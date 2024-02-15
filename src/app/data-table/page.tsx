import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "55728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed522",
      amount: 200,
      status: "processing",
      email: "mqq@example.com",
    },
    {
      id: "728ed523",
      amount: 300,
      status: "success",
      email: "mww@example.com",
    },
    {
      id: "728ed52355",
      amount: 300,
      status: "success",
      email: "mww@example.com",
    },
    {
      id: "728ed52366",
      amount: 300,
      status: "success",
      email: "mww@example.com",
    },
    {
      id: "728ed52377",
      amount: 300,
      status: "success",
      email: "mww@example.com",
    },
    {
      id: "728ed52388",
      amount: 300,
      status: "success",
      email: "mww@example.com",
    },
    {
      id: "728ed52399",
      amount: 300,
      status: "success",
      email: "mww@example.com",
    },
    {
      id: "728ed52355645",
      amount: 300,
      status: "success",
      email: "mww@example.com",
    },
    {
      id: "728ed5232331",
      amount: 300,
      status: "success",
      email: "mww@example.com",
    },
    {
      id: "728ed524",
      amount: 400,
      status: "failed",
      email: "mdf@example.com",
    },
  ]
}

export default async function DataTableShadcnUI() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
