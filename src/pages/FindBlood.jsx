import "./FindBlood.css";
function FindBlood() {
  return (
    <main className="find-blood-page">
      <section className="find-blood-hero">
        <div>
          <span className="page-badge">🩸 FIND BLOOD</span>

          <h1>
            Find the right blood
            <br />
            <span>when it matters most.</span>
          </h1>

          <p>
            Search for blood donors and nearby blood banks based on your blood
            group and location.
          </p>
        </div>
      </section>

      <section className="search-section">
        <div className="search-card">
          <h2>Search for Blood</h2>
          <p>Enter the details below to find available blood.</p>

          <div className="search-grid">
            <div className="input-group">
              <label>Blood Group</label>
              <select>
                <option value="">Select blood group</option>
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

            <div className="input-group">
              <label>Location</label>
              <input
                type="text"
                placeholder="Enter city or area"
              />
            </div>

            <button className="search-btn">
              🔎 Search Blood
            </button>
          </div>
        </div>
      </section>

      <section className="result-preview">
        <div className="result-heading">
          <span>AVAILABLE OPTIONS</span>
          <h2>Find help near you</h2>
        </div>

        <div className="result-grid">
          <div className="result-card">
            <div className="result-icon">❤️</div>
            <div>
              <h3>Blood Donors</h3>
              <p>Connect with eligible donors matching your blood group.</p>
            </div>
          </div>

          <div className="result-card">
            <div className="result-icon">🏥</div>
            <div>
              <h3>Blood Banks</h3>
              <p>Discover nearby blood banks and their available services.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FindBlood;