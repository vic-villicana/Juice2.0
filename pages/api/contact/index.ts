import type {NextApiRequest, NextApiResponse} from "next"
import {NextResponse} from "next/server"
import prismadb from '@/lib/prismadb'

type responseData = {
    message:string
}

export default async function Handler(req: NextApiRequest, res:NextApiResponse<ResponseData>){

    if(req.method === "POST"){
        try{
            const body = await req.body
            console.log(body)
            const {name, email , message} = body

            const customerMessage = await prismadb.message.create({
                data:{
                    name,
                    email,
                    message
                }
            })
         
            return res.status(200).json(customerMessage)
        }catch(error){
            console.log("CONTACT_POST", error)
            return res.status(500).end({message:"server error"})
        }
        
    }



}