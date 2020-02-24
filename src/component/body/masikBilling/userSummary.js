import React from 'react'
import '../../../assets/CSS/masikBilling.css'

export default function Usersummary() {
    return (
        <form style={{background:"#f3d3d3"}}>
        <div class="form-group row" style={{textAlign:"center"}}>
          <label  class="col-sm-6 col-form-label">
            Customer No.:
          </label>
          <div class="col-sm-6">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              value="123456"
            />
          </div>

        </div>
        <div class="form-group row" style={{textAlign:"center"}}>
          <label  class="col-sm-6 col-form-label">
            Customer Name
          </label>
          <div class="col-sm-6">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              value="Shankar Prasad"
            />
          </div>

        </div>
        <div class="form-group row" style={{textAlign:"center"}}>
          <label  class="col-sm-6 col-form-label">
            Old Customer Id:
          </label>
          <div class="col-sm-6">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              value="p12345"
            />
          </div>

        </div>
        <div class="form-group row" style={{textAlign:"center"}}>
          <label  class="col-sm-6 col-form-label">
            Address(Tole):
          </label>
          <div class="col-sm-6">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              value="Naharpur"
            />
          </div>

        </div>
        <div class="form-group row" style={{textAlign:"center"}}>
          <label  class="col-sm-6 col-form-label">
            Contact Number:
          </label>
          <div class="col-sm-6">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              value="9876543210"
            />
          </div>

        </div>

      </form>
    )
}
