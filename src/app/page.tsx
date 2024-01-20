import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-8">
      <section className="mx-auto p-2 w-3/4 bg-gray-100 rounded">
        <div className="mb-2">
          <Input placeholder="Search" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Card>
            <CardHeader>
              <CardTitle><Link href="/form">Form</Link></CardTitle>
              <CardDescription>Complete Form</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle><Link href="/table">Table</Link></CardTitle>
              <CardDescription>Complete Table</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  )
}
