export default function AlfaxmsLuxuryWebsite() {
  return (
    <div className="site-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          background: #000;
          font-family: 'Montserrat', sans-serif;
          color: #fff;
        }

        .site-root {
          min-height: 100vh;
          padding: 40px;
          background: radial-gradient(circle at right, rgba(217,154,30,0.12), transparent 40%), #000;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section {
          margin-bottom: 80px;
        }

        .title {
          font-size: 64px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .accent {
          color: #d99a1e;
        }

        .subtitle {
          font-size: 22px;
          color: #ccc;
          margin: 20px 0;
          line-height: 1.45;
        }

        .desc {
          color: #aaa;
          max-width: 520px;
          line-height: 1.7;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .box,
        .card,
        .cta-bottom {
          border: 1px solid rgba(217,154,30,0.85);
          border-radius: 20px;
          background: rgba(20,20,20,0.9);
        }

        .box {
          padding: 30px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .card {
          padding: 24px 20px;
          min-height: 95px;
          display: flex;
          align-items: center;
        }

        .card-title {
          color: #d99a1e;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .service-title {
          color: #d99a1e;
          font-size: 14px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          font-weight: 600;
          margin: 0;
        }

        .about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .about-left {
          border-left: 2px solid #d99a1e;
          padding-left: 25px;
        }

        .signature {
          font-family: 'Edwardian Script ITC', 'Apple Chancery', 'Snell Roundhand', cursive;
          font-size: 60px;
          color: #d99a1e;
          margin-top: 20px;
          line-height: 1;
        }

        .about-card-stack {
          display: grid;
          gap: 16px;
        }

        .about-card {
          display: block;
          min-height: auto;
        }

        .about-card h3 {
          margin: 0 0 8px;
        }

        .about-card p {
          margin: 0;
          color: #aaa;
          line-height: 1.6;
        }

        .cta-bottom {
          padding: 30px;
          text-align: center;
        }

        @media (max-width: 900px) {
          .site-root {
            padding: 24px;
          }

          .hero,
          .about {
            grid-template-columns: 1fr;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .title {
            font-size: 44px;
          }
        }
      `}</style>

      <div className="container">
        <div className="section hero">
          <div>
            <div className="title">
              ALFAXMS <span className="accent">LLC</span>
            </div>
            <div className="subtitle">
              High end automotive services delivered with a luxury level client experience.
            </div>
            <div className="desc">
              Private service. Exclusive clients. Elevated automotive experience shaped by precision, care, and a luxury standard in every detail.
            </div>
          </div>

          <div className="box">
            <div className="card-title">By Appointment Only</div>
            <div>Exclusive service for serious clientele.</div>

            <div style={{ marginTop: 20 }} className="card-title">Contact</div>
            <div>info@alfaxms.com</div>
            <div>Wylie, Texas</div>
            <div>Private bookings</div>
          </div>
        </div>

        <div className="section">
          <h2>Automotive Performance Garage</h2>

          <div className="services-grid">
            <div className="card">
              <div className="service-title">Maintenance & Inspection</div>
            </div>
            <div className="card">
              <div className="service-title">Diagnostics & Electrical</div>
            </div>
            <div className="card">
              <div className="service-title">Repair Services</div>
            </div>
            <div className="card">
              <div className="service-title">Performance Upgrades</div>
            </div>
            <div className="card">
              <div className="service-title">Off Road</div>
            </div>
            <div className="card">
              <div className="service-title">Consultation</div>
            </div>
          </div>
        </div>

        <div className="section about">
          <div className="about-left">
            <h2>About ALFAXMS</h2>
            <p>Private luxury automotive studio delivering high end services for select clientele.</p>

            <div className="signature">Alfayadh</div>
            <div>FOUNDER</div>
          </div>

          <div className="about-card-stack">
            <div className="card about-card">
              <h3>Premium Positioning</h3>
              <p>Built around exclusivity and trust.</p>
            </div>

            <div className="card about-card">
              <h3>Private Client Experience</h3>
              <p>High touch personalized service.</p>
            </div>

            <div className="card about-card">
              <h3>Refined Execution</h3>
              <p>Precision driven results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
