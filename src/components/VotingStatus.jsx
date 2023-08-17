import { useState,useEffect, useContext } from "react";
import { WalletContext } from "./Wallet";

const VotingStatus=()=>{
    const {contract}=useContext(WalletContext);
    const [status,setStatus]=useState("");
    useEffect(() => {
      const Status=async()=>{
        try{
           const status= await contract.methods.votingStatus().call();
           setStatus(status);
        }
        catch(error){
            console.log(error);
        }
        
      }
      contract && Status();
      
    }, [contract])
    
    return(
        <>
        <div style={{color:"white"}}><b>Voting Status:</b> {status}</div>
        </>
    )
}
export default VotingStatus;