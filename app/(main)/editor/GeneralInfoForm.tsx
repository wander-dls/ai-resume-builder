import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { generalInfoSchema, GeneralInfoValues } from '@/lib/validation';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const GeneralInfoForm = () => {
    const form = useForm<GeneralInfoValues>({
        resolver: zodResolver(generalInfoSchema),
        defaultValues: {
            title: '',
            description: '',
        }
    })
  return (
    <div className="max-w-xl mx-auto space-y-6">
        <div className='space-y-1.5 text-center'>
            <h2 className='text-2xl font-semibold'>General info</h2>
            <p className='text-sm text-muted-foreground'>
                this will not appear on your resume.
            </p>
        </div>
        <Form {...form}>
            <form className='space-y-3 h-[50vh]'>
                <FormField control={form.control} name="title" render={({field}) => (
                    <FormItem>
                        <FormLabel>Project name</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="My cool resume" autoFocus />
                        </FormControl>
                    </FormItem>
                )} />
                <FormField control={form.control} name="description" render={({field}) => (
                    <FormItem>
                        <FormLabel>Project descrioption</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="A resume for my next job"  />
                        </FormControl>
                        <FormDescription>
                            Describe what this resume is for.
                        </FormDescription>
                    </FormItem>
                )} />
            </form>
        </Form>
    </div>
  )
}
export default GeneralInfoForm