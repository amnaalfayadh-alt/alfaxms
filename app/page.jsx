export default function AlfaxmsLuxuryWebsite() {
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'services', label: 'Services' },
    { key: 'about', label: 'About' },
  ]

  const standards = [
    'Private client experience',
    'Luxury vehicle transformation',
    'Premium coordination and finish',
  ]

  const serviceGroups = [
    {
      title: 'Maintenance & Inspection',
      items: [
        'Premium vehicle maintenance and preventive care',
        'Pre purchase vehicle inspections',
      ],
    },
    {
      title: 'Diagnostics & Electrical',
      items: [
        'Advanced diagnostics and manual inspection',
        'Electrical systems diagnostics and repair',
        'Wiring troubleshooting and sensor diagnostics',
        'Battery, alternator, and starter services',
      ],
    },
    {
      title: 'Repair Services',
      items: [
        'Engine repair and performance optimization',
        'Brake system inspection and replacement',
        'Suspension, steering, cooling, and AC heating repair',
      ],
    },
    {
      title: 'Performance & Upgrades',
      items: [
        'Exhaust and intake upgrades',
        'Sport suspension and handling upgrades',
        'Custom performance builds and track preparation',
      ],
    },
    {
      title: 'Specialized & Off Road',
      items: [
        'JDM specialized diagnostics and repair',
        'Off road 4x4 consultation, build planning, and modifications',
      ],
    },
    {
      title: 'Consultation',
      items: [
        'Performance consultation and upgrade planning',
        'Expert troubleshooting for complex vehicle issues',
      ],
    },
  ]

  const aboutCards = [
    {
      title: 'Premium Positioning',
      body: 'Built around exclusivity, trust, and a brand presence that feels elevated from the first impression.',
    },
    {
      title: 'Private Client Experience',
      body: 'A selective, high touch model centered on personalized service, detail, and discretion.',
    },
    {
      title: 'Refined Execution',
      body: 'Every project is guided through a polished process with strong visual direction and premium standards.',
    },
  ]

  const whyItems = [
    'Private Client Model',
    'No Volume Work',
    'Precision Driven Execution',
    'Selective Projects Only',
  ]

  return (
    <div className="site-root">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          overscroll-behavior-y: contain;
          -webkit-overflow-scrolling: touch;
        }

        body {
          overflow: hidden;
          margin: 0;
          background: #030303;
          color: #f4f4f5;
          font-family: 'Inter', system-ui, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .display-font {
          font-family: 'Cormorant Garamond', serif;
        }

        .site-root {
          min-height: 100vh;
          background:
            radial-gradient(circle at 82% 14%, rgba(255,255,255,0.08), transparent 26%),
            linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 46%, rgba(255,255,255,0.07) 100%),
            linear-gradient(180deg, #050505 0%, #020202 100%);
          position: relative;
          overflow-x: hidden;
        }

        .site-root::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, transparent 0%, rgba(200, 200, 200, 0.08) 50%, transparent 100%),
            repeating-linear-gradient(
              -32deg,
              rgba(0, 0, 0, 0.16) 0px,
              rgba(0, 0, 0, 0.16) 3px,
              transparent 3px,
              transparent 22px
            );
          mix-blend-mode: screen;
          opacity: 0.6;
        }

        .navbar-wrap {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 12px 24px 0;
        }

        .navbar {
          max-width: 1460px;
          margin: 0 auto;
          height: 58px;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(7,7,7,0.92);
          box-shadow: 0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
        }

        .brand {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #f4f4f5;
        }

        .accent-gradient {
          background: linear-gradient(180deg, #bef264 0%, #84cc16 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nav-links {
          display: flex;
          gap: 28px;
          font-size: 14px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #d4d4d8;
        }

        .nav-links a:hover {
          color: #bef264;
        }

        .page {
          max-width: 1460px;
          margin: 0 auto;
          padding: 0 24px;
          height: 100vh;
          overflow-y: auto;
          scroll-behavior: smooth;
          scroll-snap-type: y mandatory; /* ONE PAGE SCROLL */
        }

        .section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          scroll-snap-align: start;
        }

        .hero-grid,
        .about-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 40px;
          align-items: center;
          padding-top: 0;
        }

        .services-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 290px minmax(0, 1fr);
          gap: 40px;
          align-items: center; /* center content vertically */
          padding-top: 0;
        }

        .pill {
          width: fit-content;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(180deg, rgba(17,17,17,0.98), rgba(8,8,8,0.98));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
          padding: 12px 24px;
          font-size: 13px;
          letter-spacing: 0.46em;
          text-transform: uppercase;
          color: #d4d4d8;
        }

        .hero-title {
          margin: 20px 0 0;
          font-size: 64px;
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 600;
          color: #f4f4f5;
          font-family: 'Cormorant Garamond', serif;
        }

        .hero-line {
          width: 96px;
          height: 1px;
          margin: 24px 0;
          background: linear-gradient(90deg, #52525b 0%, transparent 100%);
        }

        .hero-subtitle {
          max-width: 760px;
          margin: 0;
          font-size: 40px;
          line-height: 1.05;
          letter-spacing: -0.04em;
          font-weight: 600;
          color: #f4f4f5;
          font-family: 'Cormorant Garamond', serif;
        }

        .hero-text,
        .about-text,
        .card-text,
        .service-text,
        .contact-value {
          font-size: 18px;
          line-height: 1.8;
          color: #d4d4d8;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .hero-text {
          max-width: 700px;
          margin: 20px 0 0;
          font-size: 15px;
          line-height: 1.7;
        }

        .appointment {
          display: inline-flex;
          width: fit-content;
          margin-top: 28px;
          padding: 12px 24px;
          border-radius: 999px;
          border: 1px solid rgba(132,204,22,0.7);
          background: rgba(0,0,0,0.55);
          color: #bef264;
          font-size: 14px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          font-weight: 600;
          box-shadow: 0 0 24px rgba(132,204,22,0.12);
        }

        .right-stack {
          justify-content: center;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .glass-card {
          position: relative;
          overflow: hidden;
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(180deg, rgba(26,26,26,0.9), rgba(11,11,11,0.92));
          box-shadow: 0 18px 48px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          padding: 32px 36px;
        }

        .glass-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            repeating-linear-gradient(
              -32deg,
              rgba(190,190,190,0.08) 0px,
              rgba(190,190,190,0.08) 2px,
              transparent 2px,
              transparent 18px
            ),
            linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.04) 14%, transparent 25%);
          opacity: 0.6;
        }

        .card-inner {
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          margin: 0 0 22px;
          font-size: 14px;
          letter-spacing: 0.44em;
          text-transform: uppercase;
          color: #71717a;
        }

        .card-title {
          margin: 0;
          font-size: 34px;
          line-height: 1.02;
          letter-spacing: -0.035em;
          font-weight: 500;
          color: #f4f4f5;
          font-family: 'Cormorant Garamond', serif;
        }

        .card-text {
          margin: 18px 0 0;
          color: #a1a1aa;
        }

        .mini-pills {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 28px;
        }

        .mini-pill {
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(180deg, rgba(18,18,18,0.98), rgba(8,8,8,0.98));
          padding: 16px 18px;
          font-size: 17px;
          color: #e4e4e7;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .cta-banner {
          border-radius: 20px;
          background: rgba(0,0,0,0.8);
          box-shadow: 0 18px 40px rgba(0,0,0,0.28);
          padding: 28px 32px;
          text-align: center;
        }

        .cta-title {
          margin: 0;
          font-size: 30px;
          line-height: 1.02;
          letter-spacing: -0.035em;
          font-weight: 500;
          color: #f4f4f5;
          font-family: 'Cormorant Garamond', serif;
        }

        .cta-button {
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(132,204,22,0.7);
          background: rgba(0,0,0,0.55);
          color: #bef264;
          font-size: 13px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          font-weight: 600;
          padding: 12px 24px;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .contact-row {
          margin-bottom: 18px;
        }

        .contact-label {
          margin: 0 0 8px;
          font-size: 13px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #71717a;
        }

        .services-left h2,
        .about-left h2 {
          max-width: 700px;
          font-size: 56px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #bef264;
        }

        .services-left h2 {
          max-width: 270px;
          font-size: 46px;
          line-height: 0.95;
          letter-spacing: -0.03em;
        }

        .services-left p {
          max-width: 240px;
          margin: 28px 0 0;
          font-size: 17px;
          line-height: 1.8;
          color: #a1a1aa;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .services-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .service-header,
        .service-footer {
          position: relative;
          overflow: hidden;
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(180deg, rgba(26,26,26,0.9), rgba(11,11,11,0.92));
          box-shadow: 0 18px 48px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.05);
          padding: 24px 26px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .service-box {
          position: relative;
          overflow: hidden;
          border-radius: 26px;
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(180deg, rgba(26,26,26,0.9), rgba(11,11,11,0.92));
          box-shadow: 0 18px 48px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.05);
          padding: 22px 20px;
        }

        .service-box::before,
        .service-header::before,
        .service-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: repeating-linear-gradient(
            -32deg,
            rgba(190,190,190,0.08) 0px,
            rgba(190,190,190,0.08) 2px,
            transparent 2px,
            transparent 18px
          );
          opacity: 0.6;
        }

        .service-index {
          position: relative;
          z-index: 1;
          margin: 0 0 8px;
          font-size: 14px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #71717a;
        }

        .service-main-title,
        .service-footer-title,
        .about-card-title {
          position: relative;
          z-index: 1;
          margin: 0;
          color: #f4f4f5;
          font-weight: 500;
          font-family: 'Cormorant Garamond', serif;
        }

        .service-main-title {
          font-size: 36px;
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .service-footer-title,
        .about-card-title {
          font-size: 34px;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .service-box-title {
          position: relative;
          z-index: 1;
          margin: 0 0 14px;
          font-size: 13px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          font-weight: 600;
          color: #bef264;
        }

        .service-list {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 16px;
          line-height: 1.7;
          color: #e4e4e7;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .service-footer-text,
        .about-card-text {
          position: relative;
          z-index: 1;
          margin: 12px 0 0;
          font-size: 17px;
          line-height: 1.75;
          color: #a1a1aa;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .about-left h2 {
          max-width: 700px;
          font-size: 66px;
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .accent {
          color: #84cc16;
        }

        .about-text {
          max-width: 690px;
          margin: 24px 0 0;
        }

        .about-divider {
          width: 120px;
          height: 1px;
          margin-top: 24px;
          background: linear-gradient(90deg, #52525b 0%, transparent 100%);
        }

        .about-signature {
          margin: 16px 0 0;
          font-size: 13px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #71717a;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .why-wrap {
          margin-top: 32px;
          max-width: 640px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .why-item {
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(180deg, rgba(17,17,17,0.98), rgba(8,8,8,0.98));
          padding: 14px 16px;
          font-size: 17px;
          color: #e4e4e7;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .about-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (max-width: 1100px) {
          body {
            overflow: auto;
          }

          .page {
            height: auto;
            overflow-y: visible;
            scroll-snap-type: none;
          }

          .section {
            min-height: auto;
            padding: 86px 0 40px;
          }
          .hero-grid,
          .about-grid,
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-grid,
          .why-grid {
            grid-template-columns: 1fr 1fr;
          }

          .hero-title {
            font-size: 72px;
          }

          .hero-subtitle {
            font-size: 50px;
          }

          .about-left h2,
          .services-left h2 {
            max-width: none;
          }
        }

        @media (max-width: 780px) {
          .navbar {
            padding: 0 18px;
          }

          .nav-links {
            gap: 14px;
            font-size: 12px;
          }

          .page,
          .navbar-wrap {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero-title {
            font-size: 54px;
          }

          .hero-subtitle {
            font-size: 38px;
          }

          .card-title,
          .cta-title,
          .service-main-title,
          .service-footer-title,
          .about-card-title,
          .about-left h2,
          .services-left h2 {
            font-size: 34px;
          }

          .service-grid,
          .why-grid {
            grid-template-columns: 1fr;
          }

          .glass-card,
          .service-header,
          .service-box,
          .service-footer {
            padding: 22px 18px;
          }
        }
      `}</style>

      <div className="navbar-wrap">
        <div className="navbar">
          <a href="#home" className="brand">
            ALFAXMS <span className="accent-gradient">LLC</span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.key} href={`#${item.key}`}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main className="page">
        <section id="home" className="section">
          <div className="hero-grid">
            <div>
              <div className="pill">Private Luxury Automotive Studio</div>
              <h1 className="hero-title">
                ALFAXMS <span className="accent-gradient">LLC</span>
              </h1>
              <div className="hero-line" />
              <h2 className="hero-subtitle">
                High end automotive services delivered with a luxury level client experience.
              </h2>
              <p className="hero-text">
                Private service. Exclusive clients. Elevated automotive experience shaped by precision, care, and a luxury standard in every detail.
              </p>
              <div className="appointment">By appointment only</div>
            </div>

            <div className="right-stack">
              <div className="glass-card">
                <div className="card-inner">
                  <p className="eyebrow">Signature Standard</p>
                  <h3 className="card-title">Luxury without compromise.</h3>
                  <p className="card-text">
                    A premium automotive service experience built around select clientele, elevated care, and meticulously directed execution.
                  </p>
                  <div className="mini-pills">
                    {standards.map((item) => (
                      <div key={item} className="mini-pill">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cta-banner">
                <p className="cta-title">Make Sure Your Vehicle Is Taken Care Of</p>
                <button className="cta-button">Contact Us</button>
              </div>

              <div className="glass-card">
                <div className="card-inner">
                  <div className="contact-row">
                    <p className="contact-label">Email</p>
                    <p className="contact-value">Info@alfaxms.com</p>
                  </div>
                  <div className="contact-row">
                    <p className="contact-label">Location</p>
                    <p className="contact-value">Wylie, Texas</p>
                  </div>
                  <div className="contact-row" style={{ marginBottom: 0 }}>
                    <p className="contact-label">Availability</p>
                    <p className="contact-value">Private bookings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="services-grid">
            <div className="services-left">
              <p className="services-eyebrow">Services</p>
              <h2>Specialized automotive services with a premium standard.</h2>
              <p>
                Designed for clients who value exclusivity, premium presentation, and an elevated automotive experience.
              </p>
            </div>

            <div className="services-right">
              <div className="service-header">
                <p className="service-index">01</p>
                <h3 className="service-main-title">Automotive Performance Garage</h3>
              </div>

              <div className="service-grid">
                {serviceGroups.map((group) => (
                  <div key={group.title} className="service-box">
                    <h4 className="service-box-title">{group.title}</h4>
                    <div className="service-list">
                      {group.items.map((item) => (
                        <div key={item}>{item}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="service-footer">
                <p className="service-index">02</p>
                <h3 className="service-footer-title">Private Client Consulting</h3>
                <p className="service-footer-text">
                  High touch consultation for selective clients seeking a tailored and discreet automotive experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="about-grid">
            <div className="about-left">
              <h2>
                About ALFAXMS <span className="accent">LLC</span>
              </h2>
              <p className="about-text hero-text">
                Since 2020, ALFAXMS LLC has operated as a private luxury automotive studio delivering refined performance and high end vehicle transformation for a select clientele. Built on precision, discretion, and uncompromising standards, every project reflects a level of execution designed for those who expect more than traditional automotive service.
              </p>
              <div className="about-divider" />
              <p className="about-signature">Private. Precise. Elevated.</p>

              <div className="why-wrap">
                <p className="why-title">Why ALFAXMS</p>
                <div className="why-grid">
                  {whyItems.map((item) => (
                    <div key={item} className="why-item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-right">
              {aboutCards.map((card) => (
                <div key={card.title} className="glass-card">
                  <div className="card-inner">
                    <h3 className="about-card-title">{card.title}</h3>
                    <p className="about-card-text">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
