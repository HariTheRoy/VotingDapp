
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Wallet from './components/Wallet';
import { useState } from 'react';

import AccountList from './pages/AccountList';
import CandidateDisplay from './pages/CandidateDisplay';
import CandidateRegister from './pages/CandidateRegister';
// import ConnectedAccount from './pages/ConnectedAccount';
import ElectionCommission from './pages/ElectionCommission';

// import Vote from './pages/Vote';
import VoterDisplay from './pages/VoterDisplay';
import VoterRegister from './pages/VoterRegister';



import './App.css';
import ConnectedAccount from './components/ConnectedAccount';
import Footer from './pages/Footer';
import VotingTime from './pages/votingTime';
import Vote from './pages/Vote';
// import Courosel from './pages/Courosel';

function App() {
  const [account,setAccount] = useState("");
  const saveAccount = (address)=>{
    setAccount(address);
}
    const router = createBrowserRouter([
      {path:"/",element:<AccountList saveAccount={saveAccount} />},
      {path:"/candidate",element:<CandidateRegister account= {account} />},
      {path:"/candidateDisplay",element:<CandidateDisplay />},
      {path:"/voter",element:<VoterRegister account={account} />},
      {path:"/voterDisplay",element:<VoterDisplay/>},
      {path:"/election-commission",element:<VotingTime  account={account}/>},
      {path:"/result",element:<ElectionCommission  account={account}/>},
      {path:"/submitVote",element:<Vote  account={account}/>},

    ])
    
  return (
    <>
      <div id="content">
      <ConnectedAccount account={account}/>
      <Wallet>
      {/* <Courosel>
        
      </Courosel> */}
      <RouterProvider router={router}>
      </RouterProvider>
      </Wallet>
      <Footer/>
      </div>
      
    </>
  )
}

export default App;
