"use client"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "@/components/ui/input"
import { eventValidator } from "@/lib/validator"


export function EventForm() {
    const form = useForm({
        resolver: yupResolver(eventValidator),
        defaultValues: {
            facilityName: "",
            facilityLocation: "",
            firstName: "",
            lastName: "",
            phoneNumber: undefined,
            email: "",
            website: "",
            facebookPage: "",
        },
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex flex-col gap-10 md:flex-row ">
                    <FormField
                        control={form.control}
                        name="facilityName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Facility Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} className="rounded-none" />
                                </FormControl>
                                <FormDescription>
                                    Official facility name to be listed on slide
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="facilityLocation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Facility Location</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} className="rounded-none" />
                                </FormControl>
                                <FormDescription>
                                    Official facility location
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-col">
                    <FormLabel>Name</FormLabel>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="" {...field} className="rounded-none" />
                                    </FormControl>
                                    <FormDescription>
                                        First Name
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="" {...field} className="rounded-none" />
                                    </FormControl>
                                    <FormDescription>
                                        Last Name
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-10 md:flex-row">
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} className="rounded-none" />
                                </FormControl>
                                <FormDescription>
                                    Please supply your best contact number
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} className="rounded-none" />
                                </FormControl>
                                <FormDescription>
                                    example@example.com
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>


                <div className="flex flex-col gap-10 md:flex-row">
                    <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Website</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} className="rounded-none" />
                                </FormControl>
                                <FormDescription>
                                    Official facility website link
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="facebookPage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Facebook Page</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} className="rounded-none" />
                                </FormControl>
                                <FormDescription>
                                    Official Facebook page link
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
