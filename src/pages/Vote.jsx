import Navigation from "../components/Navigation";
import { useContext } from "react";
import { WalletContext } from "../components/Wallet";
import "./CandidateRegister.css";
// import VotingStatus from "../components/VotingStatus";
const Vote = ({account}) => {
    const { contract } = useContext(WalletContext);
    const Vote=async(event)=>{
        event.preventDefault();
        const voterID = document.querySelector("#voteId").value;
        const candidateId = document.querySelector("#candidateId").value;
        
        try{
            await contract.methods.vote(voterID,candidateId).send({from:account,gas:480000});
            alert("You voted succesfully");
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <>
       
        <Navigation/>
            <div className="form-box">

                <form onSubmit={Vote}>
                    <label className="label1" htmlFor="name">
                        <span className="font">VoterID:</span>
                    </label>
                    <input type="text" id="voteId" required></input>
                    <br />
                    <label className="label1" htmlFor="amount">
                        <span className="font">CandidateID:</span>
                    </label>
                    <input type="text" id="candidateId" required></input>
                    <br />
                   
                    <button className="button" type="submit">
                        Vote
                    </button>
                </form>
            </div>
        </>
    )
}
export default Vote;