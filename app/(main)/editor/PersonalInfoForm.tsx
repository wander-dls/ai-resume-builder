import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { personalInfoSchema, PersonalInfoValues } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"



const PersonalInfoForm = () => {
    const form = useForm<PersonalInfoValues>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            jobTitle: '',
            city: '',
            country: '',
            phone: '',
            email: '',
        }
    })

    useEffect(() => {
        const {unsubscribe} = form.watch(async () => {
            const isValid = await form.trigger()
            if (!isValid) return
        })
        return unsubscribe
    }, [form])


  return (
    <div className="max-w-xl mx-auto space-y-6">
        <div className='space-y-1.5 text-center'>
            <h2 className='text-2xl font-semibold'>Personal info</h2>
            <p className='text-sm text-muted-foreground'>
                Tell us about yourself.
            </p>
        </div>
        <Form {...form}>
            <form className='space-y-3 h-[50vh] p-3' >
                <FormField control={form.control} name="photo" render={({field: {value, ...fieldValues}}) => (
                    <FormItem>
                        <FormLabel>Your photo</FormLabel>
                        <FormControl>
                            <Input 
                                {...fieldValues} 
                                type="file" 
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    fieldValues.onChange(file)
                                    }}       
                                />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <div className="grid grid-cols-2 gap-3">
                    <FormField control={form.control} name="firstName" render={({field}) => (
                        <FormItem>
                            <FormLabel>First name</FormLabel>
                        <FormControl>
                            <Input {...field} autoFocus />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )} />
                    <FormField control={form.control} name="lastName" render={({field}) => (
                        <FormItem>
                            <FormLabel>Last name</FormLabel>
                        <FormControl>
                            <Input {...field}  />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )} />
                </div>
                <FormField control={form.control} name="jobTitle" render={({field}) => (
                        <FormItem>
                            <FormLabel>Job title</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Frontend developer" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )} />
                       <div className="grid grid-cols-2 gap-3">
                    <FormField control={form.control} name="city" render={({field}) => (
                        <FormItem>
                            <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )} />
                    <FormField control={form.control} name="country" render={({field}) => (
                        <FormItem>
                            <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input {...field}  />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )} />
                </div>
                <FormField control={form.control} name="phone" render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                        <FormControl>
                            <Input {...field} type="tel"  />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )} />
                <FormField control={form.control} name="email" render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} type="email"  />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )} />
            </form>
                
        </Form>
    </div>
  )
}
export default PersonalInfoForm