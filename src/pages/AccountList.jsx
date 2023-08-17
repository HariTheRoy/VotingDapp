import React, { useEffect, useContext, useState } from "react";
import { WalletContext } from "../components/Wallet";
import Navigation from "../components/Navigation";
import VotingStatus from "../components/VotingStatus";
const AccountList = ({saveAccount}) => {
  const { web3 } = useContext(WalletContext);

  useEffect(() => {
    const fetchAccounts = async () => {
      if (web3) {
        const options = await web3.eth.getAccounts();
        const select = document.getElementById("selectNumber");

        options.forEach((opt) => {
          const el = document.createElement("option");
          el.textContent = opt;
          el.value = opt;
          select.appendChild(el);
        });
      }
    };

    fetchAccounts();
  }, [web3]);

  const selectAccount = () => {
    const selectedAccountAddress = document.getElementById("selectNumber").value;

    if (selectedAccountAddress && selectedAccountAddress !== "Choose an account") {
      saveAccount(selectedAccountAddress);
    }
  };

  return (
    <>
       <VotingStatus/>
      <Navigation />
      <form className="label0" id="myForm" style={{marginTop:'-26px'}}>
        <select className="innerBox" id="selectNumber" onChange={selectAccount}>
          <option align="center">Choose an account</option>
        </select>
      </form>
     
    </>
  );
};

export default AccountList;
