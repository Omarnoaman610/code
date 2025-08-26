import * as z from "zod"; 

export const registerSchema = z.object({
    name:z.string().nonempty('this field is required!').min(2,'min length is 2 char').max(10,'max length is 10 char'),
    email:z.string().nonempty('this field is required!').email('not valid email'),
    password:z.string().nonempty('this field is required!').regex( /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'password not valid'),
    rePassword:z.string().nonempty('this field is required!'),
    phone:z.string().nonempty('this field is required!').regex(/^(002)?(01)[0-23]\d{8}$/)
}).refine((data)=> data.password === data.rePassword,{
 path:['rePassword'],
 message:'not the same'
})

export type registerSchemaForm = z.infer<typeof registerSchema>