import React from "react";

export default function Aadvancepayment() {
  return (
    <div className="container" style={{height:"100vh"}} >
      <h2 className="water-header">Advance Payment Entry</h2>
      <form>
      <div class=" row">
          <label  class="col-sm-2 col-form-label">
            Receipt Number:
          </label>
          <div class="col-sm-5">
            <input
              
              class="form-control m notDisabled"
              id="receiptNumber"
             
            /></div>
            <div class='col-sm-2'>
             <button type="submit" class="btn btn-primary">
           Search
          </button>
          </div>
        </div>
        <div class=" row">
          <label  class="col-sm-2 col-form-label">
           Customers:
          </label>
          <div class="col-sm-5">
            <input
              
              class="form-control m notDisabled"
              id="receiptNumber"
             
            /></div>
            <div class='col-sm-2'>
             <button type="submit" class="btn btn-primary">
            Search
          </button>
        </div>
          <div className='col-sm-2'>
          <button type="submit" class=" btn-secondary">
            Back
          </button>
          
          </div>
        </div>
      </form>
    </div>
  );
}
