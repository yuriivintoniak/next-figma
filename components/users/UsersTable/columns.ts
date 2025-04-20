import { IUser } from "@/interfaces/user.interface";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<IUser>();

export const columns = [
  columnHelper.accessor("name", {
    header: "Full Name",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.department.name, {
    id: "department",
    header: "Department",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.country.name, {
    id: "country",
    header: "Country",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.status.name, {
    id: "status",
    header: "Status",
    cell: info => info.getValue(),
  }),
];
