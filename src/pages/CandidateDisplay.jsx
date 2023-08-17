import { useState,useEffect } from "react";
import "./CandidateDisplay.css";
import Navigation from "../components/Navigation";
import { useContext} from "react";
import { WalletContext } from "../components/Wallet";

function CandidateDisplay(){
   const [list, setList] = useState([]);
   const { contract } = useContext(WalletContext);
   useEffect(()=>{
      
      async function display(){
         const arrayProposal = await contract.methods.candidateList().call();
         // console.log(arrayProposal);
         setList(arrayProposal);
      }
      contract && display();
   },[contract,setList])

   return<>
    <Navigation />
    <br />
    <h3 style={{ color: '#e06262' }}>Candidate Info</h3>
    <div className="table-container">
    <table>
      <tbody>
      <tr>
        
        <th>Name</th>
        
        
        <th>Party</th>
        
        <th>Age</th>
        <th>Gender</th>
        <th>CandidateId</th>
        <th>CandidateAddress</th>
        <th>Votes</th>
        {/* <th>Is Executed</th> */}
    </tr>
      {list.map((candidate)=>{
            return (
               <tr key={candidate.name}>
                  <td>{candidate.name}</td>
                  <td>{candidate.party}</td>
                  <td>{candidate.age}</td>
                  <td>{candidate.gender}</td>
                  <td>{candidate.candidateId}</td>
                  <td>{candidate.candidateAddress}</td>
                  <td>{candidate.votes}</td>
                  </tr>
            )
      })}
       </tbody>
      </table>
      </div>
   </>
  }
  export default CandidateDisplay;