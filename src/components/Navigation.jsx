import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './Header.css'; // Import your custom CSS styles
import { Link } from 'react-router-dom';
import './Navigation.css'
const Navigation = ()=>{
    return(
        <>
        <header className="header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
      <div className="container">
        <a className="navbar-brand" href="">ELECTION</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
           
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Candidate
              </a>
              <ul class="dropdown-menu">
                <Link class="dropdown-item" to="/candidate">Candidate Registration</Link>
                <Link class="dropdown-item" to="/candidateDisplay">Candidate List</Link>
              </ul>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/candidate">Candidate</Link>
            </li> */}
             {/* <li className="nav-item">
              <Link className="nav-link" to="/voter">Voter</Link>
            </li> */}
             <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Voter
              </a>
              <ul class="dropdown-menu">
                <Link class="dropdown-item" to="/voter">Voter Registration</Link>
                <Link class="dropdown-item" to="/voterDisplay">Voter List</Link>
                <Link class="dropdown-item" to="/submitVote">Vote</Link>
              </ul>
            </li>
             {/* <li className="nav-item">
              <Link className="nav-link" to="/election-commission">Electioncommission</Link>
            </li> */}
             <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Electioncommission
              </a>
              <ul class="dropdown-menu">
                <Link class="dropdown-item" to="/election-commission">VotingTime</Link>
                <Link class="dropdown-item" to="/result">Results</Link>

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
    <br />
    <br />
        </>
    )
}
export default Navigation;