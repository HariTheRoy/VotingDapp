import Navigation from "../components/Navigation";
import { useContext } from "react";
import { WalletContext } from "../components/Wallet";
import "./CandidateRegister.css";
const VoterRegister = ({account})=>{
    const { contract } = useContext(WalletContext);
    const VoterRegistration = async (event) => {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const age = document.querySelector("#age").value;
        const gender = document.querySelector("#gender").value;

        try{
            await contract.methods.voterRegistration(name, age, gender).send({ from: account, gas: 480000 });
            alert("Voter Registration Successful");
        }
        catch(error){
            console.log(error);
        }
       
    }
    return(
        <>
        <Navigation/>
        <div className="form-box">

<form onSubmit={VoterRegistration}>
    <label className="label1" htmlFor="name">
        <span className="font">Name:</span>
    </label>
    <input type="text" id="name" required></input>
    <br />
    <label className="label1" htmlFor="recipient">
        <span className="font">Age:</span>
    </label>
    <input type="text" id="age" required></input>
    <br />
    <label className="label1" htmlFor="recipient">
        <span className="font">Gender:</span>
    </label>
    <select id="gender" required>
        <option value="">Select a gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
    </select>
    <br />
    <br />
    <button className="button" type="submit">
        Register
    </button>
</form>
</div>
        </>
    )
}
export default VoterRegister;