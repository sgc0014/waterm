import React, { Fragment } from "react";

export default function Basicinfo() {
  return (
      <Fragment>
           <table
        id="basicinfo"
        class="table table-bordered table-lg table-responsive-sm" style={{marginTop:"40px"}}
      >
        <thead>
          <tr>
            <th className="th-sm">Type</th>
            <th class="th-sm">Charge Amount</th>
            <th class="th-sm">Paid Amount</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <p>No records found.</p>
            </tr>
        </tbody>
        </table> 
        <div className="col-md-12 table-summary">
              <ul>
                <li>Total Amount:0.0</li>
                <li>EMI Transaction:0.0</li>
              </ul>
            </div>
    <form>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Find From Membership:</label>
        <div class="col-sm-4">
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Find Neighbour:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Customer No:</label>
        <div class="col-sm-4">
          <input readOnly class="disabled" />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Old System No:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Registration No:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Registration Date:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Meter Connected Date:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Date Of Birth:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>

      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Customer's Name(Nepali):</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Father's Name:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Father's Name(Nepali):</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Grand Father's Name:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">
          Grand Father's Name(Nepali):
        </label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Forefare's Name:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Forefare's Relation:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Gender:</label>
        <div class="col-sm-4">
          <select class="form-control">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Citizenship No:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">
          Citizenship Issued District:
        </label>
        <div class="col-sm-4">
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Address(Tole):</label>
        <div class="col-sm-4">
          <input placeholder="Address in English" />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Customer Address(Nepali):</label>
        <div class="col-sm-4">
          <input placeholder="Address in English" />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Meter Reading Zone:</label>
        <div class="col-sm-4">
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Ward:</label>
        <div class="col-sm-4">
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Telephone:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Mobile Number:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Customer Type:</label>
        <div class="col-sm-4">
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Tab Type:</label>
        <div class="col-sm-4">
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Tab Size:</label>
        <div class="col-sm-4">
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Plumber Name:</label>
        <div class="col-sm-4">
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Meter Serial:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Meter's Initial Reading :</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">No. Of Consumers:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div className="form-group row registermeterform">
        <label className="col-sm-4 col-form-label">EMI Payment</label>
        <div class="form-check col-sm-4 form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
          />
          <label class="form-check-label" for="inlineCheckbox1"></label>
        </div>
      </div>
      <div class="col-md-12 ">
          <button className='btn btn-primary'>Submit</button>
          <button className='btn btn-secondary back'>Back</button>
          </div>
    </form>
    
    </Fragment>
  );
}
