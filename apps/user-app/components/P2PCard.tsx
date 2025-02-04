"use client"
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import { Button } from "@repo/ui/button";
import handleP2PTransfer from "../app/lib/actions/p2pTransfer";

const P2PCard=()=>{
    const [amount,setAmount]=useState("");
    const [number,setNumber]=useState("")
    return (
    <div className="w-auto border p-6 bg-white rounded-xl bg-[#ededed]">
        <TextInput label={"Number"} placeholder={"Phone Number"} onChange={(value)=>{
            setNumber(value);
        }}
        />
        <TextInput label={"Amount"} placeholder={"Amount"} onChange={(value)=>{
            setAmount(value);
        }}
        />
        <div className="flex justify-center pt-4">
        <Button onClick={async()=>{
            await handleP2PTransfer(number,Number(amount)*100)
            }}>
            Send
        </Button>
        </div>
    </div>
    )
}
export default P2PCard;