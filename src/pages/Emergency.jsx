import "./Emergency.css";

function Emergency() {
  return (
    <main className="emergency-page">
      <section className="emergency-hero">
        <div className="emergency-intro">
          <span className="emergency-badge">🚨 EMERGENCY BLOOD REQUEST</span>

          <h1>
            Need blood
            <br />
            <span>right now?</span>
          </h1>

          <p>
            Create an emergency blood request and share the details with
            potential donors and nearby blood banks.
          </p>

          <div className="emergency-note">
            <span>⚡</span>
            <div>
              <strong>For urgent situations</strong>
              <p>Provide accurate information so people can respond quickly.</p>
            </div>
          </div>
        </div>

        <div className="emergency-form-card">
          <div className="form-card-header">
            <div className="form-icon">🩸</div>
            <div>
              <h2>Emergency Request</h2>
              <p>Enter the required details</p>
            </div>
          </div>

          <form className="emergency-form">
            <div className="form-row">
              <div className="form-group">
                <label>Patient Name</label>
                <input
                  type="text"
                  placeholder="Enter patient name"
                />
              </div>

              <div className="form-group">
                <label>Blood Group</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select group
                  </option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Required Units</label>
                <input
                  type="number"
                  min="1"
                  placeholder="Example: 2"
                />
              </div>

              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="tel"
                  placeholder="Enter contact number"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Hospital / Location</label>
              <input
                type="text"
                placeholder="Enter hospital or area"
              />
            </div>

            <div className="form-group">
              <label>Additional Message</label>
              <textarea
                rows="4"
                placeholder="Add any important information..."
              ></textarea>
            </div>

            <button type="submit" className="emergency-submit">
              🚨 Create Emergency Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Emergency;