import React from "react";
import "../../../assets/CSS/masikBilling.css";

export default function Payment() {
  return (
    <div className="payment-part">
      <div className="row">
        <div className="col-md-6 ">
          <form>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Other Charges
              </label>
              <div class="col-sm-10">
                <select class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Amount
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control m notDisabled"
                  id="inputPassword"
                  placeholder="0.0"
                />
              </div>
            </div>
            <div className="col-md-12">
              <button type="submit" class="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>

        <form className="col-md-6 payment">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Total Amount:</label>
            <div class="col-sm-10">
              <input readOnly class="form-control" value="1658.5" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Advance amount:</label>
            <div class="col-sm-10">
              <input
                readOnly
                class="form-control"
                id="advanceAmount"
                value="342.5"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">To Pay Amount:</label>
            <div class="col-sm-10">
              <input readOnly class="form-control" id="toPay" value="1316" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Tender:</label>
            <div class="col-sm-10">
              <input
                class="form-control notDisabled"
                id="tender"
                placeholder="0.0"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Returning Amount:</label>
            <div class="col-sm-10">
              <input
                readOnly
                class="form-control"
                id="returningAmount"
                value="0"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Returned Amount:</label>
            <div class="col-sm-10">
              <input
                class="form-control notDisabled"
                id="returnedAmount"
                placeholder="0.0"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Total Amount:</label>
            <div class="col-sm-10">
              <input readOnly class="form-control" id="totalAmount" value="0" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">New Advance amount:</label>
            <div class="col-sm-10">
              <input
                readOnly
                class="form-control"
                id="newAdvanceAmount"
                value="0"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Payment Amount:</label>
            <div
              class="col-sm-10"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="Cash"
                />
                <label class="form-check-label" for="inlineCheckbox1">
                  Bank
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="Cash"
                />
                <label class="form-check-label" for="inlineCheckbox1">
                  Cash
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" class="btn btn-primary">
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
