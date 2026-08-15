import "./BloodBanks.css";

function BloodBanks() {
  const bloodBanks = [
    {
      name: "City Blood Bank",
      location: "Central City",
      availability: "All major blood groups",
      status: "Open",
    },
    {
      name: "LifeCare Blood Center",
      location: "Main Road",
      availability: "A+, B+, O+, O-",
      status: "Open",
    },
    {
      name: "Hope Blood Bank",
      location: "Near Civil Hospital",
      availability: "A+, AB+, B-",
      status: "Open",
    },
  ];

  return (
    <main className="blood-banks-page">
      <section className="blood-banks-hero">
        <span className="page-badge">🏥 BLOOD BANKS</span>

        <h1>
          Find a blood bank
          <br />
          <span>near you.</span>
        </h1>

        <p>
          Discover nearby blood banks and quickly find the support you need
          during an emergency.
        </p>
      </section>

      <section className="blood-banks-section">
        <div className="blood-banks-heading">
          <div>
            <span>NEARBY BLOOD BANKS</span>
            <h2>Available blood banks</h2>
          </div>

          <button className="location-btn">📍 Use My Location</button>
        </div>

        <div className="blood-bank-grid">
          {bloodBanks.map((bank) => (
            <div className="blood-bank-card" key={bank.name}>
              <div className="bank-top">
                <div className="bank-icon">🏥</div>

                <span className="open-status">{bank.status}</span>
              </div>

              <h3>{bank.name}</h3>

              <p className="bank-location">📍 {bank.location}</p>

              <div className="bank-info">
                <span>Blood availability</span>
                <strong>{bank.availability}</strong>
              </div>

              <button className="details-btn">View Details →</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BloodBanks;