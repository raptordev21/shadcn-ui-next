import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const links = [
  {
    link: '/form',
    title: 'Form',
    desc: 'Complete Form'
  },
  {
    link: '/table',
    title: 'Basic Table',
    desc: 'Complete Basic Table'
  },
  {
    link: '/data-table',
    title: 'Data Table',
    desc: 'Complete Data Table'
  }
]

export default function Home() {
  return (
    <main className="py-8">
      <section className="mx-auto p-2 w-3/4 bg-gray-100 rounded">
        <div className="mb-2">
          <Input placeholder="Search" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {links.map((card, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle><Link href={card.link}>{card.title}</Link></CardTitle>
                <CardDescription>{card.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
