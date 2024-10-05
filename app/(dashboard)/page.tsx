'use client';
import { DataCharts } from "@/components/data-chart";
import { DataGrid } from "@/components/data-grid";

export default function DashboardPage() {
  return (
    <div className="mx-auto -mt-6 w-full max-w-screen-2xl pb-10">
      <DataGrid />

      <DataCharts />
    </div>
  );
}