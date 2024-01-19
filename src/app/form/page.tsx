"use client"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  emailAddress: z.string().email()
})

export default function FormShadcn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: ""
    }
  })

  const formSubmit = () => { }

  return (
    <div className="flex flex-col justify-start items-center w-3/5 mx-auto bg-slate-100 my-4 p-4 rounded">
      <h1 className="text-lg text-cyan-500">Form</h1>
      <div className="w-full p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formSubmit)} className="max-w-md mx-auto w-full flex flex-col gap-4">
            <FormField control={form.control} name="emailAddress" render={(field) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormDescription>abc@abc.com</FormDescription>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
