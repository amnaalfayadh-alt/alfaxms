export default function AlfaxmsLuxuryWebsite() {
  return (
    <div className="site-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

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
            radial-gradient(circle at 78% 18%, rgba(255,242,0,0.07), transparent 22%),
            radial-gradient(circle at 48% 48%, rgba(255,255,255,0.05), transparent 24%),
            linear-gradient(120deg, #0d0d0d 0%, #111111 38%, #1c1c1c 72%, #0f0f0f 100%);
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
          color: #E8D000;
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
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 18px 14px 14px;
          gap: 8px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(32,32,32,0.95), rgba(18,18,18,0.92));
          box-shadow: 0 16px 34px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.08);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .service-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,242,0,0.8);
          box-shadow: 0 20px 45px rgba(0,0,0,0.42), 0 0 24px rgba(255,242,0,0.08);
        }

        .service-title {
          color: #e8e8e8;
          font-size: clamp(12px, 0.9vw, 14px);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 900;
          text-align: center;
          line-height: 1.4;
        }

        .service-icon {
          width: 38px;
          height: 38px;
          margin-bottom: 4px;
          opacity: 0.9;
        }

        .service-card:hover .service-icon {
          opacity: 1;
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
          font-size: inherit;
          letter-spacing: inherit;
          text-transform: inherit;
          font-weight: 700;
          margin-left: 6px;
          color: #ffffff;
          display: inline;
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
          background: linear-gradient(145deg, rgba(32,32,32,0.95), rgba(18,18,18,0.92));
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
              Private Studio
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2 className="section-title">Automotive Performance Garage</h2>
          <div className="services-grid">
            <div className="service-card">
              {/* Maintenance & Inspection — wrench + shield */}
              <svg className="service-icon" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8C10.7 8 8 10.7 8 14c0 2.1 1.05 3.95 2.65 5.1L7 32l3 1 4.5-10.5A6 6 0 0014 8zm0 9a3 3 0 110-6 3 3 0 010 6z" fill="#FFF200"/>
                <rect x="22" y="7" width="9" height="12" rx="2" stroke="#FFF200" strokeWidth="1.8" fill="none"/>
                <path d="M26.5 11v4M24.5 13h4" stroke="#FFF200" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M22 22l9 9" stroke="#FFF200" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <div className="service-title">Maintenance & Inspection</div>
            </div>
            <div className="service-card">
              {/* Diagnostics & Electrical — circuit/bolt */}
              <svg className="service-icon" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="10" stroke="#FFF200" strokeWidth="1.8" fill="none"/>
                <path d="M21 9.5l-4 8h4l-4 11" stroke="#FFF200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8" cy="19" r="1.5" fill="#FFF200"/>
                <circle cx="30" cy="19" r="1.5" fill="#FFF200"/>
                <path d="M8 19h1M29 19h1" stroke="#FFF200" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="service-title">Diagnostics & Electrical</div>
            </div>
            <div className="service-card">
              {/* Repair Services — engine block */}
              <svg className="service-icon" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="13" width="20" height="13" rx="2" stroke="#FFF200" strokeWidth="1.8" fill="none"/>
                <rect x="13" y="16" width="4" height="7" rx="1" stroke="#FFF200" strokeWidth="1.5" fill="none"/>
                <rect x="21" y="16" width="4" height="7" rx="1" stroke="#FFF200" strokeWidth="1.5" fill="none"/>
                <path d="M13 10v3M19 10v3M25 10v3" stroke="#FFF200" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M5 17h4M29 17h4M5 22h4M29 22h4" stroke="#FFF200" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <div className="service-title">Repair Services</div>
            </div>
            <div className="service-card">
              {/* Performance Upgrades — gauge/speedo */}
              <svg className="service-icon" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 24a11 11 0 1122 0" stroke="#FFF200" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M19 24l-5-7" stroke="#FFF200" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="19" cy="24" r="2" fill="#FFF200"/>
                <path d="M10 27l1.5-1.5M28 27l-1.5-1.5M19 12v2" stroke="#FFF200" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M24 14l-1 1.7" stroke="#FFF200" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="service-title">Performance Upgrades</div>
            </div>
            <div className="service-card">
              {/* Off Road — truck with terrain */}
              <svg className="service-icon" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="14" width="22" height="12" rx="2" stroke="#FFF200" strokeWidth="1.8" fill="none"/>
                <path d="M27 18h3l3 4v4h-6" stroke="#FFF200" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
                <circle cx="11" cy="28" r="3" stroke="#FFF200" strokeWidth="1.8" fill="none"/>
                <circle cx="27" cy="28" r="3" stroke="#FFF200" strokeWidth="1.8" fill="none"/>
                <path d="M14 28h10" stroke="#FFF200" strokeWidth="1.8"/>
                <path d="M5 22h22" stroke="#FFF200" strokeWidth="1.2" strokeDasharray="2 2"/>
                <path d="M9 14v-3M15 14v-5M21 14v-3" stroke="#FFF200" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="service-title">Off Road</div>
            </div>
            <div className="service-card">
              {/* Consultation — clipboard/checklist */}
              <svg className="service-icon" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="8" width="18" height="23" rx="2" stroke="#FFF200" strokeWidth="1.8" fill="none"/>
                <path d="M15 8v-1a1 1 0 011-1h6a1 1 0 011 1v1" stroke="#FFF200" strokeWidth="1.5" fill="none"/>
                <path d="M14 17l2 2 4-4" stroke="#FFF200" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 23l2 2 4-4" stroke="#FFF200" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 18h2M22 24h2" stroke="#FFF200" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="service-title">Consultation</div>
            </div>
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
              <h3>Founded 2020</h3>
              <p>Built from a hands-on passion for performance, not a franchise model.</p>
            </div>
            <div className="about-card">
              <h3>One Client at a Time</h3>
              <p>No volume quotas. Every vehicle gets the founder's direct attention.</p>
            </div>
            <div className="about-card">
              <h3>Private Studio</h3>
              <p>Location shared by appointment with verified clients only.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
