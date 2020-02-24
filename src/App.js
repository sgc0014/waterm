import React from 'react';
import './App.css';
import Navbar from './component/layout/navbar';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Accountstate from './component/body/accountState';
import Header from './component/layout/header';
import Masikbilling from './component/body/masikBilling/index';
import Aadvancepayment from './component/body/advancePayment';
import Footer from './component/layout/footer';

function App() {
  return (
    <div className="App">
      <header className="header">
      
      </header>
      <Router>
        <Header/>
      <Navbar/>
     
      <Route path="/accountState" component={Accountstate}/>
      <Route path='/masikBilling' component={Masikbilling}/>
      <Route path='/advancepayment' component={Aadvancepayment}/>
     
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
