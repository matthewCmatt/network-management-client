import { useState } from "react";
import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import NavigationBacktrace from "@components/NavigationBacktrace";

type Waypoint = {
  waypointName: string;
  id: string;
  role: "primary" | "secondary" | "disabled";
  encryption: string;
  psk: string;
  uplink: "enabled" | "disabled";
  downlink: "enabled" | "disabled";
  messageCount: number;
};

const defaultWaypoints: Waypoint[] = [
  {
    waypointName: "Example Waypoint #1",
    id: "GHI789",
    role: "primary",
    encryption: "enabled",
    psk: "secret",
    uplink: "enabled",
    downlink: "enabled",
    messageCount: 5,
  },
  {
    waypointName: "Example Waypoint #1",
    id: "JKL012",
    role: "disabled",
    encryption: "disabled",
    psk: "secret",
    uplink: "enabled",
    downlink: "enabled",
    messageCount: 10,
  },
];

const columnHelper = createColumnHelper<Waypoint>();

const columns = [
  columnHelper.accessor("waypointName", {
    header: "Name",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("id", {
    header: "ID",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("role", {
    header: "Role",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("encryption", {
    header: "Encryption",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("psk", {
    header: "PSK",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("uplink", {
    header: "Uplink",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("downlink", {
    header: "Downlink",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("messageCount", {
    header: "Message Count",
    footer: (info) => info.column.id,
  }),
];

const ManageWaypointPage = () => {
  const [data, setData] = useState(() => [...defaultWaypoints]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col w-full h-screen">
      {/* part 1: traceback */}
      <div className="flex justify-center align-middle px-9 h-20 border-b border-gray-100">
        <NavigationBacktrace
          className="my-auto mr-auto"
          levels={["Waypoints"]}
        />
      </div>
      {/* part 2: title */}
      <div className="px-9 py-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-4xl leading-10 font-semibold text-gray-700">
            Manage Waypoints
          </h1>
          <input
            placeholder="Search waypoints..."
            className="border-2 border-gray-200 text-gray-400 rounded-lg pl-2"
          ></input>
        </div>
      </div>
      {/* part 3: table */}
      <div>
        <table className="mt-5 ml-7">
          {/* Header element */}
          <thead className="text-gray-600 text-xs leading-4 font-semibold">
            {table.getHeaderGroups().map((headerGroup) => (
              // Row to contain header data
              <tr
                key={headerGroup.id}
                className="border-b-2 border-gray-200 border-solid"
              >
                {headerGroup.headers.map((header) => (
                  // Mapping each header into the row
                  <th key={header.id} className="text-left pl-5 pb-5">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="p-5 text-gray-500 text-sm leading-5 font-normal border-b"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageWaypointPage;
