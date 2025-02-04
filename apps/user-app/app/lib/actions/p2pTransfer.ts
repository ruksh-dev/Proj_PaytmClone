"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client"
const handleP2PTransfer=async(to:string, amount:number)=>{
    const session=await getServerSession(authOptions);
    const from=session?.user?.id;
    console.log("processing p2p transfer of: ",from," ...")
    if(!from) {
        return {
            message: "user not logged in!"
        }
    }
    console.log("finding target user....")
    const targetUser=await prisma.user.findFirst({
        where: {
            number: to
        }
    })
    if(!targetUser) {
        return {
            message: "target user not found"
        }
    }
    console.log("target user found!, ",targetUser.id);
    await prisma.$transaction(async(tx)=>{
        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;

        const fromBalance=await tx.balance.findUnique({
            where: { userId: Number(from)}
        });
        if(!fromBalance || fromBalance.amount<amount) {
            throw new Error("insufficient funds!")
        }
        await tx.balance.update({
            where: {userId: Number(from)},
            data: {amount: {decrement: amount}}
        })
        await tx.balance.update({
            where: {userId: Number(targetUser.id)},
            data: {amount: {increment: amount}}
        })
        await tx.p2pTransfer.create({
            data: {
                amount,
                fromUserId: Number(from),
                toUserId: Number(targetUser.id),
                timestamp: new Date()
            }
        })
    });
    return {
        message: "amount transfered successfully!"
    }
}
export default handleP2PTransfer;