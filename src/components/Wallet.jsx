import {useState, useEffect, createContext} from "react";
// import PropTypes from "prop-types";
import Web3 from 'web3';
import ABI from "./ABI.json";
const WalletContext= createContext();
const Wallet = ({children})=>{
    const[state, setState] = useState({
        web3:null, 
        contract:null
    });
    useEffect(() => {
     const init = async()=>{
        const web3 = new Web3 ("HTTP://127.0.0.1:7545");
        const contractAddress = "0xFC5f6113F99487630039Bb3C528D3d9A3B0e1e48";
        // to create the contract instance required contrct address and contract abi
        const contract = new web3.eth.Contract(ABI, contractAddress);
        
        setState({
            web3:web3,
            contract:contract
        });
        // console.log(contract);
     }
     init();
    }, [])

    return(
        <>
        <WalletContext.Provider value={state}>
            {children}
        </WalletContext.Provider>
        </>
    )
    
}
export {WalletContext};
export default Wallet;