import P2PCard from "../../../components/P2PCard";
import { P2PTransactions } from "../../../components/P2PTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client"
interface p2ptx {
    amount: number;
    timestamp: Date;
    fromUserId: number;
    toUserId: number;
}
async function getP2PTransactions() {
    const session = await getServerSession(authOptions);
    const userId=session?.user?.id;
    if(!userId) {
        return [];
    }
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            OR: [
              { fromUserId: Number(userId) },
              { toUserId: Number(userId) }
            ],
          },
          include: {
            fromUser: true,
            toUser: true,
          },
    });
    return txns.map((t:p2ptx) => ({
        timestamp: t.timestamp,
        amount: t.amount,
        fromUserId: t.fromUserId,
        toUserId: t.toUserId
    }))
}

export default async function() {
    const transactions=await getP2PTransactions();
    console.log("txns: ",JSON.stringify(transactions));
    return (
    <div className="w-full flex justify-around items-center">
        <P2PCard />
        <div className="pt-4">
             <P2PTransactions transactions={transactions} /> 
        </div>
    </div>
    )
}