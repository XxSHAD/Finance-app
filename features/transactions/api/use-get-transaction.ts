import { useQuery } from "@tanstack/react-query";

import { client } from '@/lib/hono';
import { useSearchParams } from "next/navigation";
import { convertAmountFromMilliunits, convertAmountToMilliunits } from "@/lib/utils";

export const useGetTransaction = (id?: string) => {

    const query = useQuery({
        enabled: !!id,
        queryKey: ['transaction', { id }],
        queryFn: async () => {
            const response = await client.api.transactions[":id"].$get({
                param: { id },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch transaction');
            }

            const { data } = await response.json();
            data.amount =  convertAmountFromMilliunits(data.amount)
            return data;
        }
    })

    return query;
}

export default useGetTransaction;