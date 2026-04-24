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
          grid-template-rows: 31% 34% 35%;
          gap: 18px;
        }

        .top {
          display: grid;
          grid-template-columns: 1.35fr 0.65fr; /* more space for text */
          gap: 60px;
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
          font-size: clamp(20px, 1.9vw, 30px); /* bigger */
          color: #f2f2f2;
          margin: 20px 0 12px;
          line-height: 1.4;
          max-width: 900px; /* wider */
        }

        .desc {
          font-size: clamp(14px, 1.2vw, 18px); /* bigger */
          color: #b8b8b8;
          max-width: 880px; /* wider */
          line-height: 1.7;
        }

        .contact-box,
        .service-card,
        .about-card {
          border: 1px solid var(--accent);
          border-radius: 18px;
          background: rgba(18,18,18,0.9);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
        }

        .contact-box {
          min-height: 160px;
          padding: 22px 28px;
          display: grid;
          align-content: center;
          justify-items: center;
          text-align: center;
          gap: 10px;
          justify-self: end; /* push right */
          transform: translateY(-8px); /* slight lift for tension */
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
          align-content: center;
          justify-items: center;
          gap: 14px;
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
          width: min(900px, 80vw);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px; /* more breathing room */
        }

        .service-card {
          height: 88px; /* thicker */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          border-width: 1.5px; /* slightly stronger edge */
          box-shadow: 0 10px 22px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05);
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
          align-items: center;
          justify-content: center;
        }

        .about-wrap {
          width: min(1000px, 84vw);
          display: grid;
          grid-template-columns: 1fr 0.8fr; /* right side narrower */
          gap: 46px;
          align-items: center;
        }

        .about-left {
          border-left: 2px solid var(--accent);
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
          gap: 18px; /* more vertical rhythm */
          justify-self: end;
          width: 100%;
          max-width: 420px; /* slightly less wide */
        }

        .about-card {
          min-height: 78px;
          padding: 18px 22px;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          align-items: center;
          gap: 16px;
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
