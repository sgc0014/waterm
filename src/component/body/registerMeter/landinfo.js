import React, { Fragment } from "react";

export default function Landinfo() {
  return (
      <Fragment>
    <form style={{marginTop:"40px"}}>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Naksha Number:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Kitta Number:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Area Of Land:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">House No:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Purja No:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Supply Area:</label>
        <div class="col-sm-4">
          <select class="form-control" >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Block Number:</label>
        <div class="col-sm-4">
          <select class="form-control" >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Main Pipe Size:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
    </form>
    <form>
       <div class="form-group row  registermeterform" >
           <h5 class="col-sm-4 " style={{borderBottom:"1px solid",fontWeight:"600"}}>Char Killa</h5>
       </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">East:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">West:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">North:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">South:</label>
        <div class="col-sm-4">
          <input />
        </div>
      </div>
    </form>
    </Fragment>
  )
}
