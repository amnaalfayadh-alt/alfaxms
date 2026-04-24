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
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #000;
          font-family: 'Montserrat', sans-serif;
          color: #fff;
        }

        :root {
          --accent: #FFF200;
          --line: #9a9a9a; /* light gray lines */
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site-root {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          padding: 24px 36px;
          background: linear-gradient(120deg, #000 0%, #060606 38%, #191919 70%, #000 100%);
        }

        .container {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-rows: auto auto auto; /* remove forced centering */
          gap: 28px;
        }

        .top {
          display: grid;
          grid-template-columns: 1fr 0.6fr;
          gap: 40px;
          align-items: center;
        }

        .title {
          font-size: clamp(42px, 4.6vw, 72px);
          font-weight: 700;
          letter-spacing: 0.04em;
          line-height: 0.95;
        }

        .accent {
          color: var(--accent);
        }

        .subtitle {
          font-size: clamp(17px, 1.55vw, 24px);
          color: #f2f2f2;
          margin: 18px 0 10px;
          line-height: 1.35;
          max-width: 760px;
        }

        .desc {
          font-size: clamp(12px, 1vw, 15px);
          color: #b8b8b8;
          max-width: 720px;
          line-height: 1.65;
        }

        .contact-box {
          min-height: 170px;
          width: 100%;
          max-width: 380px;
          padding: 28px 32px;
          display: grid;
          align-content: center;
          justify-items: center;
          text-align: center;
          gap: 12px;
          justify-self: end;
          border: 1px solid rgba(255,242,0,0.6);
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(20,20,20,0.95), rgba(10,10,10,0.95));
          box-shadow: 0 0 25px rgba(255,242,0,0.15);
          transition: all 0.3s ease;
        }

        .contact-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 0 35px rgba(255,242,0,0.25);
          border-color: var(--accent);
        }

        .label {
          color: var(--accent);
          font-size: 12px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .contact-text {
          color: #f5f5f5;
          font-size: 14px;
          line-height: 1.6;
        }

        .services-section {
          display: grid;
          align-content: start; /* no vertical centering */
          justify-items: stretch;
          gap: 18px;
          width: 100%;
        }

        .section-title {
          margin: 0;
          font-size: clamp(15px, 1.4vw, 20px);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          text-align: center;
        }

        .services-grid {
          width: 100%; /* full width */
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .service-card {
          height: 74px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: rgba(18,18,18,0.9);
        }

        .service-title {
          color: var(--accent);
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          text-align: center;
          line-height: 1.35;
        }

        .about-full {
          display: flex;
          align-items: flex-start; /* move up */
          justify-content: space-between;
          width: 100%;
        }

        .about-wrap {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .about-left {
          border-left: 2px solid var(--line);
          padding-left: 26px;
        }

        .about-left h2 {
          margin: 0 0 12px;
          font-size: clamp(20px, 2vw, 32px);
          line-height: 1;
        }

        .about-left p {
          margin: 0;
          font-size: 14px;
          color: #f0f0f0;
          line-height: 1.55;
        }

        .signature {
          margin-top: 14px;
          font-family: 'Edwardian Script ITC', 'Apple Chancery', 'Snell Roundhand', cursive;
          font-size: clamp(42px, 4.5vw, 76px);
          color: var(--accent);
          line-height: 0.85;
        }

        .founder {
          margin-top: 10px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .about-card-stack {
          display: grid;
          gap: 16px;
          max-width: 520px;
          justify-self: end;
          width: 100%;
        }

        .about-card {
          min-height: 70px;
          padding: 16px 20px;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          align-items: center;
          gap: 18px;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: rgba(18,18,18,0.9);
        }

        .about-card h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.2;
        }

        .about-card p {
          margin: 0;
          color: #cfcfcf;
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          html,
          body {
            overflow: auto;
          }

          .site-root {
            height: auto;
            min-height: 100vh;
            overflow: visible;
            padding: 24px;
          }

          .container {
            height: auto;
            grid-template-rows: auto;
          }

          .top,
          .about-wrap {
            grid-template-columns: 1fr;
          }

          .services-grid {
            width: 100%;
            grid-template-columns: 1fr 1fr;
          }

          .about-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="top">
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

          <div className="contact-box">
            <div className="label">By Appointment Only</div>
            <div className="contact-text">Exclusive service for serious clientele.</div>
            <div className="label">Contact</div>
            <div className="contact-text">
              <a href="mailto:info@alfaxms.com">info@alfaxms.com</a>
              <br />
              Wylie, Texas
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2 className="section-title">Automotive Performance Garage</h2>
          <div className="services-grid">
            <div className="service-card"><div className="service-title">Maintenance & Inspection</div></div>
            <div className="service-card"><div className="service-title">Diagnostics & Electrical</div></div>
            <div className="service-card"><div className="service-title">Repair Services</div></div>
            <div className="service-card"><div className="service-title">Performance Upgrades</div></div>
            <div className="service-card"><div className="service-title">Off Road</div></div>
            <div className="service-card"><div className="service-title">Consultation</div></div>
          </div>
        </div>

        <div className="about-full">
          <div className="about-wrap">
            <div className="about-left">
              <h2>About ALFAXMS</h2>
              <p>Private luxury automotive studio delivering high end services for select clientele.</p>
              <div className="signature">Alfayadh</div>
              <div className="founder">Founder</div>
            </div>

            <div className="about-card-stack">
              <div className="about-card">
                <h3>Premium Positioning</h3>
                <p>Built around exclusivity and trust.</p>
              </div>
              <div className="about-card">
                <h3>Private Client Experience</h3>
                <p>High touch personalized service.</p>
              </div>
              <div className="about-card">
                <h3>Refined Execution</h3>
                <p>Precision driven results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
