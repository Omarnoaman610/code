'use client'

import React from 'react'

import { useForm } from 'react-hook-form'

import {Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from '@/components/ui/form'

import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'

import { zodResolver } from '@hookform/resolvers/zod'


import { registerSchema, registerSchemaForm } from 'src/schema/register.schema'






export default function Register() {

    const form = useForm<registerSchemaForm >({

     resolver:zodResolver(registerSchema),

     defaultValues:{
        email:'',
        name:'',
        password:'',
        rePassword:'',
        phone:''

     }

    })

  

   function onSubmit(data:registerSchemaForm) {

    console.log(data);
   }



    return (

    <>

      <h2 className='my-5'>Register now:</h2>

      <Form {...form}>

        <form className='w-2/3 mx-auto' onSubmit={form.handleSubmit(onSubmit)}>

        <FormField

          name='name'

          control={form.control}

          render={({field})=>(

            <FormItem className='my-5'>

              <FormLabel>name</FormLabel>

              <FormControl>

                <div>

                  <Input {...field}/>

                  <p>{field.value}</p>

                </div>

              </FormControl>

              <FormMessage/>

            </FormItem>

          )}

        />



       <FormField

          name='email'

          control={form.control}

          render={({field})=>(

            <FormItem className='my-5'>

              <FormLabel>email</FormLabel>

              <FormControl>

                <div>

                  <Input type='email' {...field}/>

                  <p>{field.value}</p>

                </div>

              </FormControl>

              <FormMessage/>

            </FormItem>

          )}

        />



        <FormField

          name='password'

          control={form.control}

          render={({field})=>(

            <FormItem className='my-5'>

              <FormLabel>password</FormLabel>

              <FormControl>

                  <Input type='password' autoComplete='off' {...field}/>

              </FormControl>

              <FormMessage/>

            </FormItem>

          )}

        />



        <FormField

          name='rePassword'

          control={form.control}

          render={({field})=>(

            <FormItem className='my-5'>

              <FormLabel>repassword</FormLabel>

              <FormControl>

                  <Input type='password' autoComplete='off' {...field}/>

              </FormControl>

              <FormMessage/>

            </FormItem>

          )}

        />



        <FormField

          name='phone'

          control={form.control}

          render={({field})=>(

            <FormItem className='my-5'>

              <FormLabel>phone</FormLabel>

              <FormControl>

                  <Input type='phone' {...field}/>

              </FormControl>

              <FormMessage/>

            </FormItem>

          )}

        />



         <Button className='bg-main text-white my-5 ml-auto block cursor-pointer hover:bg-main'>Register</Button>

        </form>

      </Form>

    </>

  )

}

