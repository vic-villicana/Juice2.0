import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/lib/prismadb'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method === 'GET'){
        try{
            const locations = await prisma.location.findMany({})
            console.log("Location_GET:", locations)
            return res.json(locations)
        }catch(e){
            console.log("Location_ERROR:", e)
            return res.status(500).json({
                status:'internal server error'
            })
        }
    }
}