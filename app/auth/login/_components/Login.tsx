'use client'

import React from 'react'

import { useForm } from 'react-hook-form'

import {Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from '@/components/ui/form'

import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'

import { zodResolver } from '@hookform/resolvers/zod'


import { loginSchema, loginSchemaForm } from 'src/schema/login.schema'

import { signIn } from 'next-auth/react'




export default function Login() {

    const form = useForm< loginSchemaForm>({

     resolver:zodResolver(loginSchema),

     defaultValues:{
      email:'',
      password:''
 }

    })

  const firstError = Object.keys(form.formState.errors)[0]

   async function onSubmit(data:loginSchemaForm) {

    const res = await signIn ('credentials',{
        email:data.email,
        password:data.password,
        redirect:false,
        callbackUrl:'/'
    })
    
    if(res?.ok)
      window.location.href = res?.url || ''
    else
      console.log(res?.error)
    
   }



    return (

    <>

      <h2 className='my-5'>Login now:</h2>

      <Form {...form}>

        <form className='w-2/3 mx-auto' onSubmit={form.handleSubmit(onSubmit)}>

        



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

              {firstError == 'email' && <FormMessage/>}

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

              {firstError == 'password' && <FormMessage/>}

            </FormItem>

          )}

        />

         <Button className='bg-main text-white my-5 ml-auto block cursor-pointer hover:bg-main'>Login</Button>

        </form>

      </Form>

    </>

  )

}



