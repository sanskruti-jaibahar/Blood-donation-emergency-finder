import "./BecomeDonor.css";

function BecomeDonor() {
  return (
    <main className="donor-page">
      <section className="donor-hero">
        <div className="donor-hero-content">
          <span className="page-badge">❤️ BECOME A DONOR</span>

          <h1>
            Be someone's
            <br />
            <span>reason to hope.</span>
          </h1>

          <p>
            Register as a blood donor and help connect people with the blood
            they need during emergencies.
          </p>
        </div>

        <div className="donor-card">
          <div className="donor-card-icon">🩸</div>

          <h2>Ready to help?</h2>

          <p>
            Fill in your details to register as a blood donor.
          </p>

          <form className="donor-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
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
                <label>City / Area</label>
                <input
                  type="text"
                  placeholder="Enter your location"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <button type="submit" className="register-btn">
              Register as Donor →
            </button>
          </form>
        </div>
      </section>

      <section className="donor-benefits">
        <div className="benefits-heading">
          <span>WHY DONATE?</span>
          <h2>Your small act can make a big difference.</h2>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div>❤️</div>
            <h3>Help Someone</h3>
            <p>
              Your donation can help someone find support when they need it.
            </p>
          </div>

          <div className="benefit-card">
            <div>🤝</div>
            <h3>Build a Community</h3>
            <p>
              Become part of a community of people willing to help others.
            </p>
          </div>

          <div className="benefit-card">
            <div>⚡</div>
            <h3>Be There in Emergencies</h3>
            <p>
              Make it easier for people to find potential donors quickly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BecomeDonor;