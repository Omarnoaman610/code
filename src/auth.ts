import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
    pages:{
        signIn:'/auth/login'},

    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email:{},
                password:{}
            },
         authorize: async (Credentials)=>{
              const res = await fetch(`${process.env.API}/auth/signin`,{
                method:'POST',
                body:JSON.stringify({
                    email:Credentials?.email,
                    password:Credentials?.password
                }),
                headers:{
                    'Content-Type':'application/json',
                }
              })
              const payload = await res.json()
              if(payload.message == 'success') {
                const decode = JSON.parse(Buffer.from(payload.token.split('.')[1],'base64').toString());
                return {
                    id:decode.id,
                    user:payload.user,
                    token:payload.token,
                }
              }
             else{
                throw new Error(payload.message|| 'something went wrong')
             }
            
            }
        })
    ]
}