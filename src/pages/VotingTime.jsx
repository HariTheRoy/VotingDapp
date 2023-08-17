import { useContext } from "react";
import Navigation from "../components/Navigation";
import { WalletContext } from "../components/Wallet";
import "./CandidateRegister.css";


const VotingTime = ({account}) => {
    const { contract } = useContext(WalletContext);
    const votingTime = async () => {
        const startTime = document.querySelector("#startime").value;
        const endTime = document.querySelector("#endtime").value
        try{
            await contract.methods.voteTime(startTime,endTime).send({from:account,gas:480000});
            alert("voting started");
        }
        catch(error){
            console.log(error);
        }
    }   
    return (
        <>
            <Navigation />
            <div className="form-box">

                <form onSubmit={votingTime}>
                    <label className="label1" htmlFor="name">
                        <span className="font">Start time:</span>
                    </label>
                    <input type="text" id="startime" required></input>
                    <br />
                    <label className="label1" htmlFor="amount">
                        <span className="font">End time:</span>
                    </label>
                    <input type="text" id="endtime" required></input>
                    <br />
                    <button className="button" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}
export default VotingTime;