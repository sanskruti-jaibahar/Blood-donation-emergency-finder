import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">🩸 Every Drop Matters</span>

          <h1>
            Find Blood.
            <br />
            <span>Save Lives.</span>
          </h1>

          <p>
            Connect with blood donors and nearby blood banks quickly during
            emergencies. Find the right blood group when every second matters.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Find Blood</button>
            <button className="secondary-btn">Become a Donor</button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>24/7</strong>
              <span>Emergency Support</span>
            </div>

            <div>
              <strong>Fast</strong>
              <span>Donor Search</span>
            </div>

            <div>
              <strong>Nearby</strong>
              <span>Blood Banks</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="blood-icon">🩸</div>

          <h2>Need Blood?</h2>

          <p>
            Search for available donors and blood banks near your location.
          </p>

          <div className="blood-info">
            <div>
              <span>Blood Groups</span>
              <strong>A+ A− B+ B−</strong>
            </div>

            <div>
              <span>Emergency</span>
              <strong>Available</strong>
            </div>
          </div>

          <button className="card-btn">Search Now →</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-heading">
          <span>HOW IT HELPS</span>
          <h2>Blood help, made simple.</h2>
          <p>
            Everything you need to find or provide blood support in one place.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🔎</div>
            <h3>Find Blood Fast</h3>
            <p>
              Search for donors based on blood group and location during an
              emergency.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Nearby Blood Banks</h3>
            <p>
              Discover nearby blood banks and get the information you need
              quickly.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Become a Donor</h3>
            <p>
              Register as a donor and help people who may need blood in an
              emergency.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div>
          <span>BE A LIFESAVER</span>
          <h2>Your one decision can make a difference.</h2>
          <p>
            Register as a blood donor and be there for someone when they need
            help the most.
          </p>
        </div>

        <button className="cta-btn">Register as Donor →</button>
      </section>
    </main>
  );
}

export default Home;