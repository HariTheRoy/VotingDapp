import { useState,useEffect } from "react";
import "./CandidateDisplay.css";
import Navigation from "../components/Navigation";
import { useContext} from "react";
import { WalletContext } from "../components/Wallet";

function VoterDisplay(){
   const [list, setList] = useState([]);
   const { contract } = useContext(WalletContext);
   useEffect(()=>{
      
      async function display(){
         const arrayProposal = await contract.methods.voterList().call();
         // console.log(arrayProposal);
         setList(arrayProposal);
      }
      contract && display();
   },[contract,setList])

   return<>
    <Navigation />
    <br />
    <h3 style={{ color: '#e06262' }}>Voter Info</h3>
    <div className="table-container">
    <table>
      <tbody>
      <tr>
        
        <th>Name</th>
        <th>Age</th>
        <th>VoterID</th>
        <th>Gender</th>
        <th>VoteCandidateID</th>
        <th>VoterAddress</th>
        {/* <th>Is Executed</th> */}
    </tr>
      {list.map((voter)=>{
            return (
               <tr key={voter.name}>
                  <td>{voter.name}</td>
                  <td>{voter.age}</td>
                  <td>{voter.voterId}</td>
                  <td>{voter.gender}</td>
                  <td>{voter.voteCandidateId}</td>
                  <td>{voter.voterAddress}</td>
                  </tr>
            )
      })}
       </tbody>
      </table>
      </div>
   </>
  }
  export default VoterDisplay;