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
          grid-template-rows: auto auto auto;
          gap: 10px; /* tighter overall */
        }

        .top {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr; /* push box closer */
          gap: 8px; /* tighter gap */
          align-items: center; /* vertically align to remove empty space */
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
          margin: 10px 0 6px; /* tighter spacing */
          line-height: 1.35;
          max-width: 760px;
        }

        .desc {
          font-size: clamp(12px, 1vw, 15px);
          color: #b8b8b8;
          max-width: 720px;
          line-height: 1.5;
          margin-bottom: 0;
        }

        .contact-box {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          margin-top: 0;
          min-height: 300px;
          width: 100%;
          max-width: 560px;
          padding: 44px 48px;
          display: grid;
          align-content: center;
          justify-items: center;
          text-align: center;
          gap: 18px;
          justify-self: end;
          border-radius: 26px;
          background: linear-gradient(145deg, rgba(22,22,22,0.95), rgba(8,8,8,0.98));
          border: 2px solid var(--accent);
          box-shadow:
            0 0 28px rgba(255,242,0,0.42),
            0 0 95px rgba(255,242,0,0.22),
            inset 0 0 30px rgba(255,242,0,0.14);
          animation: contactPulse 3.2s ease-in-out infinite;
        }

        .contact-box::before {
          content: '';
          position: absolute;
          inset: -2px;
          z-index: -1;
          border-radius: 28px;
          background: linear-gradient(120deg, transparent 0%, rgba(255,242,0,0.15) 30%, rgba(255,242,0,0.8) 50%, rgba(255,242,0,0.15) 70%, transparent 100%);
          background-size: 220% 220%;
          animation: borderShine 3.8s linear infinite;
        }

        .contact-box::after {
          content: '';
          position: absolute;
          top: -40%;
          left: -80%;
          width: 60%;
          height: 180%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: rotate(22deg);
          animation: shineSweep 4.5s ease-in-out infinite;
          pointer-events: none;
        }

        .contact-box:hover {
          transform: translateY(-4px);
          box-shadow:
            0 0 40px rgba(255,242,0,0.55),
            0 0 120px rgba(255,242,0,0.3),
            inset 0 0 38px rgba(255,242,0,0.18);
        }

        @keyframes contactPulse {
          0%, 100% {
            box-shadow:
              0 0 24px rgba(255,242,0,0.36),
              0 0 80px rgba(255,242,0,0.18),
              inset 0 0 24px rgba(255,242,0,0.1);
          }
          50% {
            box-shadow:
              0 0 40px rgba(255,242,0,0.58),
              0 0 130px rgba(255,242,0,0.32),
              inset 0 0 38px rgba(255,242,0,0.18);
          }
        }

        @keyframes borderShine {
          0% { background-position: 0% 50%; }
          100% { background-position: 220% 50%; }
        }

        @keyframes shineSweep {
          0%, 35% { left: -80%; opacity: 0; }
          50% { opacity: 1; }
          75%, 100% { left: 130%; opacity: 0; }
        }

        .label {
          color: var(--accent);
          font-size: 13px; /* slightly bigger */
          letter-spacing: 0.26em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .contact-text {
          color: #f5f5f5;
          font-size: 16px; /* bigger text */
          line-height: 1.7;
        }

        .services-section {
          display: grid;
          align-content: start;
          justify-items: stretch;
          gap: 10px;
          width: 100%;
          margin-top: -8px; /* pull up to remove gap */
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
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          margin-top: -10px; /* pull up to remove big gap */
        }

        .about-wrap {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px; /* reduced space between about and cards */
          align-items: start;
        }

        .about-left {
          border-left: 2px solid var(--line);
          padding-left: 26px;
        }

        .about-left h2 {
          margin: 0 0 8px;
          font-size: clamp(20px, 2vw, 32px);
          line-height: 1;
        }

        .about-left p {
          margin: 0 0 6px;
          font-size: 14px;
          color: #f0f0f0;
          line-height: 1.45;
        }

        .about-card-stack {
          display: grid;
          gap: 10px; /* tighter spacing between cards */
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
              <a href="mailto:info@alfaxms.com?subject=ALFAXMS Inquiry&body=Hello, I would like to inquire about your services." target="_blank" rel="noopener noreferrer">info@alfaxms.com</a>
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
