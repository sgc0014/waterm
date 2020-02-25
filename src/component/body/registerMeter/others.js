import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import "../../../assets/CSS/registermeter.css";
export default function Others() {
  const [user, Adduserpicture] = useState(null);
  const [citizenFrontside, Addcfrontpicture] = useState(null);
  const [citizenBacktside, Addcbackpicture] = useState(null);
  const [lalpurja, Addlalpurjapicture] = useState(null);
  const [naksha, Addnakshapicture] = useState(null);

  

  return (
    <form style={{marginTop:"40px"}}>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Scheme Name:</label>
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
        <label class="col-sm-4 col-form-label">Caste:</label>
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
        <label class="col-sm-4 col-form-label">Saddle Size:</label>
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
        <label class="col-sm-4 col-form-label">Purpose Of Use:</label>
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
        <label class="col-sm-4 col-form-label">Photo:</label>
        <div class="col-sm-4">
          <label className="label-file-upload" for="file-upload">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            Select Photo
          </label>
          <input
            style={{ display: "none" }}
            name="file-upload"
            className="file-upload"
            id="file-upload"
            type="file"
            onChange={e => {
              Adduserpicture(e.target.files[0]);
            }}
          />
        </div>
        
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Citizenship Photo(Frontside):</label>
        <div class="col-sm-4">
          <label className="label-file-upload" for="file-upload">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            Select Photo
          </label>
          <input
            style={{ display: "none" }}
            name="file-upload"
            className="file-upload"
            id="file-upload"
            type="file"
            onChange={e => {
              Addcfrontpicture(e.target.files[0]);
            }}
          />
        </div>
        
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Citizenship Photo(Backside):</label>
        <div class="col-sm-4">
          <label className="label-file-upload" for="file-upload">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            Select Photo
          </label>
          <input
            style={{ display: "none" }}
            name="file-upload"
            className="file-upload"
            id="file-upload"
            type="file"
            onChange={e => {
              Addcbackpicture(e.target.files[0]);
            }}
          />
        </div>
        
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Naksha:</label>
        <div class="col-sm-4">
          <label className="label-file-upload" for="file-upload">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            Select Photo
          </label>
          <input
            style={{ display: "none" }}
            name="file-upload"
            className="file-upload"
            id="file-upload"
            type="file"
            onChange={e => {
              Addnakshapicture(e.target.files[0]);
            }}
          />
        </div>
        
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Lalpurja:</label>
        <div class="col-sm-4">
          <label className="label-file-upload" for="file-upload">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            Select Photo
          </label>
          <input
            style={{ display: "none" }}
            name="file-upload"
            className="file-upload"
            id="file-upload"
            type="file"
            onChange={e => {
              Addlalpurjapicture(e.target.files[0]);
            }}
          />
        </div>
        
      </div>

      <div className="form-group row registermeterform">
        <label className="col-sm-4 col-form-label">Lock Billing:</label>
        <div class="form-check col-sm-4 form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
          />
        
        </div>
      </div>
      <div className="form-group row registermeterform">
        <label className="col-sm-4 col-form-label">Restrict Online Payment(Yes/No):</label>
        <div class="form-check col-sm-4 form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
           
          />
        
        </div>
      </div>
      <div className="form-group row registermeterform">
        <label className="col-sm-4 col-form-label">Restrict Voting(Yes/No):</label>
        <div class="form-check col-sm-4 form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
          />
        
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Description 1:</label>
        <div class="col-sm-4">
          <textarea className='description' />
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Description 2:</label>
        <div class="col-sm-4">
          <textarea className='description'/>
        </div>
      </div>
      <div class="form-group row registermeterform">
        <label class="col-sm-4 col-form-label">Description 3:</label>
        <div class="col-sm-4">
          <textarea className='description'/>
        </div>
      </div>
    </form>
  );
}
