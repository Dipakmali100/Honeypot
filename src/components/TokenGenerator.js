import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function TokenGenerator() {
  return (
    <div className="token-generator">
      <Header />
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          {/* <img src={image} alt="" /> */}

          <form action="" method="POST">
            <div className="formbold-form-title-manually">
              <h2 className="">Token Generator</h2>
            </div>

            <div className="formbold-mb-3">
              <label for="purpose" className="formbold-form-label">
                Select your Token
              </label>
              <select
                name="purpose"
                id="purpose"
                className="formbold-form-input"
              >
                <option value="">Select Your Token Type</option>
                <option value="Option 1">PDF Token</option>
                <option value="Option 2">DOCX Token</option>
                <option value="Option 3">XLSX Token </option>
              </select>
            </div>

            <div className="formbold-mb-3">
              <label for="address" className="formbold-form-label">
                Name Token
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-mb-3">
              <label for="address" className="formbold-form-label">
                Remind note when this token is triggered
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="formbold-form-input"
              />
            </div>

            <div className="token-generator-btn">
                <button className="formbold-btn">Generate and Download</button>
            </div>
            <div className="token-generator-bottom-link">
                <Link to="/token-history"><p>Check History</p></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TokenGenerator;
