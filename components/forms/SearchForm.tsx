"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { useRouter } from "next/navigation"
import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UsernameValidation } from "@/lib/validations"
import { useState } from "react"
import { fetchGitHubUsername } from "@/lib/actions/Api"

const SearchForm = () => {
    const router =  useRouter();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);

  // 1. Define your form.
    const form = useForm<z.infer<typeof UsernameValidation>>({
        resolver: zodResolver(UsernameValidation),
        defaultValues: {
        username: "",
        },
    })
 
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof UsernameValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const username = values.username.trim().replace(/\s+/g, '');
        setIsLoading(true);
        setError(null);
        try {
            const profile = await fetchGitHubUsername(username);
            if (profile) {
                form.reset();
                router.push(`/user/${username}`)
              console.log('GitHub profile:', profile);
            } else {
              console.log(error);
            }
        } catch (error) {
          setError(error instanceof Error ? error.message : 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }

        console.log(values)
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Username:</FormLabel>
              {error && <p className="text-red-500 text-xs">{error}</p>}
              <div className=" border border-[#000000] rounded-md flex items-center max-w-[600px]">
                <Image
                    src="/assets/icons/user.svg"
                    height={24}
                    width={24}
                    alt="usericon"
                    className="mx-2"
                />
                <FormControl>
                  <Input placeholder="username" {...field} className="focus-visible:ring-0 focus-visible:ring-offset-0" />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading} className="w-fit mx-auto">
        {isLoading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  )
}

export default SearchForm