import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/lib/prismadb'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    if(req.method === 'GET'){
        try{
            const items = await prisma.item.findMany({})
            console.log('GET_ITEMS', items)
            return res.json(items)
    
        }catch(err){
            console.log('ITEMS_GET', err)
            return res.status(500).json({
                status:'internal server error',
            })
        }
    }
    
}


