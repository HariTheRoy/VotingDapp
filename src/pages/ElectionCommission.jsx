import { useContext,useState } from "react";
import Navigation from "../components/Navigation";
import { WalletContext } from "../components/Wallet";
import "./CandidateRegister.css";


const Election = ({account}) => {
    const { contract } = useContext(WalletContext);
    const [winner,setWinner] =useState("No Winner till now")
    const Result = async (event) => {
        event.preventDefault();
        try{
            await contract.methods.result().send({from:account,gas:480000});
            const Winner= await contract.methods.winner().call();
            setWinner(Winner);
            alert("Results are out");
        }
        catch(error){
            console.log(error);
        }
    } 
    const emergency = async (event) => {
        event.preventDefault();
        try{
            await contract.methods.emergency().send({from:account,gas:480000});
            alert("Stopper");
        }
        catch(error){
            console.log(error);
        }
    }    
    return (
        <>
            <Navigation />
            <h2 style={{color:'white'}}><b>Winner is:</b> {winner}</h2>
            <div className="form-box">

                <form onSubmit={Result}>
                    <button className="button" type="submit">
                        Result
                    </button>
                </form>
                <br />
                <form onSubmit={emergency}>
                    <button className="button" type="submit">
                        Emergency
                    </button>
                </form>
            </div>
        </>
    )
}
export default Election;