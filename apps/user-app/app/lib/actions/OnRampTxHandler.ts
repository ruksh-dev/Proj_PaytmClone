"use server"
import prisma from "@repo/db/client";
import {getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import { authOptions } from "../auth";
const handleOnRampTransaction=async (amount: number, provider: string)=>{
    const session=await getServerSession(authOptions);
    const userId=session?.user?.id;
    if(!userId) {
        return {
            message: "user not logged in!"
        }
    }
    const token=Math.random().toString();
    const newTransaction=await prisma.onRampTransaction.create({
        data: {
            userId: Number(userId),
            amount,
            status: "Processing",
            startTime: new Date(),
            provider,
            token
        }
    })
    return {
        message: "OnRamp Transaction added!"
    }
}

export default handleOnRampTransaction;
