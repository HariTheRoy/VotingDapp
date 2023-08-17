import { useContext, useState } from "react";
import { WalletContext } from "../components/Wallet";
import Navigation from "../components/Navigation";
import "./CandidateRegister.css";
const CandidateRegister = ({ account }) => {
    // const {web3,contract}=useContext(WalletContext);
    // console.log(contract);
    // console.log(web3);
    
    const { contract } = useContext(WalletContext);
    const CandidateRegistration = async (event) => {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const party = document.querySelector("#party").value;
        const age = document.querySelector("#age").value;
        const gender = document.querySelector("#gender").value;

        try{
            await contract.methods.candidateRegistration(name, party, age, gender).send({ from: account, gas: 480000 });
            alert("Registration successful");
        }
        catch(error){
            console.log(error);
        }
       
    }
    return (
        <>
            <Navigation />
            <div className="form-box">

                <form onSubmit={CandidateRegistration}>
                    <label className="label1" htmlFor="name">
                        <span className="font">Name:</span>
                    </label>
                    <input type="text" id="name" required></input>
                    <br />
                    <label className="label1" htmlFor="amount">
                        <span className="font">Party:</span>
                    </label>
                    <input type="text" id="party" required></input>
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
    );
};
export default CandidateRegister;
