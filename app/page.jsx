export default function AlfaxmsLuxuryWebsite() {
  return (
    <div className="site-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Great+Vibes&display=swap');

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          width: 100%;
          min-height: 100%;
          background: #000;
          font-family: 'Montserrat', sans-serif;
          color: #fff;
        }

        :root {
          --accent: #FFF200;
          --line: rgba(220, 220, 220, 0.55);
          --soft-line: rgba(255, 255, 255, 0.14);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site-root {
          width: 100%;
          min-height: 100vh;
          padding: 28px 42px;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 78% 18%, rgba(255,242,0,0.08), transparent 22%),
            radial-gradient(circle at 48% 48%, rgba(255,255,255,0.08), transparent 24%),
            linear-gradient(120deg, #000 0%, #050505 38%, #171717 72%, #000 100%);
        }

        .container {
          width: 100%;
          max-width: 1700px;
          min-height: calc(100vh - 56px);
          margin: 0 auto;
          display: grid;
          grid-template-rows: auto auto auto;
          gap: 34px;
        }

        .top {
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(380px, 0.88fr);
          gap: 34px;
          align-items: center;
        }

        .title {
          font-size: clamp(56px, 5.7vw, 92px);
          font-weight: 900;
          letter-spacing: 0.045em;
          line-height: 0.95;
          text-shadow: 0 18px 40px rgba(0,0,0,0.45);
          white-space: nowrap;
        }

        .accent {
          color: var(--accent);
        }

        .subtitle {
          font-size: clamp(20px, 1.75vw, 29px);
          color: #f4f4f4;
          margin: 18px 0 10px;
          line-height: 1.35;
          max-width: 880px;
        }

        .desc {
          font-size: clamp(14px, 1.05vw, 17px);
          color: #c7c7c7;
          max-width: 880px;
          line-height: 1.65;
          padding-top: 10px;
          border-top: 1px solid var(--soft-line);
        }

        .contact-box {
          width: min(100%, 560px);
          min-height: 250px;
          justify-self: end;
          padding: 34px 38px;
          display: grid;
          align-content: center;
          justify-items: center;
          gap: 14px;
          border-radius: 28px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.06), transparent 34%),
            radial-gradient(circle at 20% 15%, rgba(255,242,0,0.06), transparent 34%),
            rgba(7,7,7,0.92);
          border: 1px solid rgba(255,242,0,0.72);
          box-shadow:
            0 18px 50px rgba(0,0,0,0.6),
            0 0 30px rgba(255,242,0,0.14),
            inset 0 1px 0 rgba(255,255,255,0.1);
          text-align: center;
        }

        .label {
          color: var(--accent);
          font-size: clamp(15px, 1.2vw, 20px);
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 900;
          text-align: center;
        }

        .contact-text {
          color: #f8f8f8;
          font-size: clamp(15px, 1.15vw, 20px);
          line-height: 1.65;
          text-align: center;
        }

        .contact-text a:hover {
          color: var(--accent);
        }

        .services-section {
          display: grid;
          gap: 16px;
          width: 100%;
        }

        .section-title {
          margin: 0;
          font-size: clamp(17px, 1.45vw, 23px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 900;
          text-align: center;
          position: relative;
        }

        .section-title::before,
        .section-title::after {
          content: '';
          display: inline-block;
          width: 110px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--line));
          vertical-align: middle;
          margin: 0 22px;
        }

        .section-title::after {
          background: linear-gradient(90deg, var(--line), transparent);
        }

        .services-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .service-card {
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(22,22,22,0.92), rgba(5,5,5,0.86));
          box-shadow: 0 16px 34px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.08);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .service-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,242,0,0.8);
          box-shadow: 0 20px 45px rgba(0,0,0,0.42), 0 0 24px rgba(255,242,0,0.08);
        }

        .service-title {
          color: var(--accent);
          font-size: clamp(12px, 0.9vw, 14px);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 900;
          text-align: center;
          line-height: 1.4;
        }

        .about-wrap {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
          gap: 44px;
          align-items: start;
        }

        .about-left {
          border-left: 2px solid var(--line);
          padding-left: 30px;
          max-width: 940px;
        }

        .about-left h2 {
          margin: 0 0 12px;
          font-size: clamp(28px, 2.3vw, 38px);
          line-height: 1.05;
          letter-spacing: 0.02em;
        }

        .about-left p {
          margin: 0 0 10px;
          font-size: clamp(14px, 0.95vw, 15px);
          color: #ededed;
          line-height: 1.55;
        }

        .founder-line {
          margin-top: 18px;
          font-size: clamp(14px, 1vw, 16px);
          letter-spacing: 0.2em;
          color: #FFF200;
          text-transform: uppercase;
          font-weight: 700;
        }

        .signature-name {
          font-family: 'Montserrat', sans-serif;
          font-size: inherit;
          letter-spacing: inherit;
          text-transform: inherit;
          font-weight: 700;
          margin-left: 6px;
          color: #ffffff;
          display: inline;
          transform: none;
        }

        .about-card-stack {
          display: grid;
          gap: 14px;
          max-width: 610px;
          justify-self: end;
          width: 100%;
        }

        .about-card {
          min-height: 86px;
          padding: 18px 24px;
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          align-items: center;
          gap: 22px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(22,22,22,0.92), rgba(5,5,5,0.86));
          box-shadow: 0 14px 34px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.07);
        }

        .about-card h3 {
          margin: 0;
          font-size: clamp(17px, 1.2vw, 19px);
          line-height: 1.15;
          font-weight: 900;
        }

        .about-card p {
          margin: 0;
          color: #d8d8d8;
          font-size: clamp(14px, 0.95vw, 15px);
          line-height: 1.55;
          border-left: 1px solid rgba(255,242,0,0.5);
          padding-left: 22px;
        }

        @media (max-width: 900px) {
          html,
          body {
            overflow-x: hidden;
            overflow-y: auto;
          }

          .site-root {
            min-height: 100vh;
            padding: 22px 18px 36px;
            overflow: visible;
          }

          .container {
            min-height: auto;
            display: grid;
            gap: 28px;
          }

          .top {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .title {
            font-size: clamp(38px, 12vw, 54px);
            white-space: normal;
            letter-spacing: 0.025em;
          }

          .subtitle {
            font-size: 19px;
            max-width: 100%;
          }

          .desc {
            font-size: 14px;
            max-width: 100%;
          }

          .contact-box {
            width: 100%;
            min-height: auto;
            padding: 26px 18px;
            border-radius: 22px;
            justify-self: stretch;
          }

          .label {
            font-size: 14px;
            letter-spacing: 0.2em;
          }

          .contact-text {
            font-size: 15px;
          }

          .section-title {
            font-size: 17px;
            line-height: 1.45;
          }

          .section-title::before,
          .section-title::after {
            width: 44px;
            margin: 0 10px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .service-card {
            min-height: 70px;
          }

          .service-title {
            font-size: 12px;
            letter-spacing: 0.18em;
          }

          .about-wrap {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .about-left {
            padding-left: 18px;
          }

          .about-left h2 {
            font-size: 28px;
          }

          .about-left p {
            font-size: 14px;
          }

          .founder-line {
            letter-spacing: 0.14em;
            font-size: 12px;
            line-height: 1.5;
          }

          .about-card-stack {
            max-width: 100%;
            justify-self: stretch;
          }

          .about-card {
            grid-template-columns: 1fr;
            min-height: auto;
            padding: 18px;
            gap: 10px;
          }

          .about-card p {
            border-left: 1px solid rgba(255,242,0,0.5);
            padding-left: 16px;
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
            <div className="label">BY APPOINTMENT ONLY</div>
            <div className="contact-text">Exclusive service for serious clientele.</div>
            <div className="label">Contact</div>
            <div className="contact-text">
              <a href="mailto:info@alfaxms.com?subject=ALFAXMS Inquiry&body=Hello, I would like to inquire about your services.">info@alfaxms.com</a>
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

        <div className="about-wrap">
          <div className="about-left">
            <h2>About ALFAXMS</h2>
            <p>Private luxury automotive studio delivering high end services for select clientele.</p>
            <p>
              Founded in 2020 by Abobakir Alfayadh, ALFAXMS was built on a vision of redefining the automotive experience through precision, discretion, and uncompromising quality. What began as a passion for performance and craftsmanship evolved into a private studio serving a select clientele who value attention to detail, trust, and a truly elevated standard of service. Every vehicle is treated with a tailored approach, ensuring results that reflect both technical excellence and a luxury experience from start to finish.
            </p>
            <p className="founder-line">
              Founder — <span className="signature-name">Abobakir Alfayadh</span>
            </p>
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
  )
}
