"use client"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select"

const formSchema = z
  .object({
    emailAddress: z.string().email(),
    password: z.string().min(3),
    passwordConfirm: z.string(),
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === "company") {
        return !!data.companyName
      }
      return true
    },
    {
      message: "Company Name is required",
      path: ["companyName"],
    }
  )

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
      passwordConfirm: "",
      companyName: "",
    },
  })

  const accountType = form.watch("accountType")

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values })
  }


  return (
    <div className="flex flex-col justify-start items-center w-3/5 mx-auto bg-slate-100 my-4 p-4 rounded">
      <h1 className="text-lg text-cyan-500">Form</h1>
      <div className="w-full p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="max-w-md mx-auto w-full flex flex-col gap-4">
            <FormField control={form.control} name="emailAddress" render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" type="email" {...field} />
                </FormControl>
                <FormDescription>john.doe@gmail.com</FormDescription>
                <FormMessage />
              </FormItem>
            )}
            />
            <FormField control={form.control} name="accountType" render={({ field }) => (
              <FormItem>
                <FormLabel>Account type</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an account type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="company">Company</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
            />
            {accountType === "company" && (
              <FormField control={form.control} name="companyName" render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
            )}
            <FormField control={form.control} name="password" render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" autoComplete="on" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            <FormField control={form.control} name="passwordConfirm" render={({ field }) => (
              <FormItem>
                <FormLabel>Password Confirm</FormLabel>
                <FormControl>
                  <Input placeholder="Password Confirm" type="password" autoComplete="on" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            <div className="flex flex-row justify-center items-center">
              <Button type="submit" className="w-36">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
