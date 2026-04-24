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
        }

        body {
          margin: 0;
          background: #030303;
          color: #f4f4f5;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site-root {
          min-height: 100vh;
          background:
            radial-gradient(circle at 82% 14%, rgba(255,255,255,0.08), transparent 26%),
            linear-gradient(180deg, #050505 0%, #020202 100%);
        }

        .navbar-wrap {
          padding: 16px 24px 0;
          position: sticky;
          top: 0;
          z-index: 20;
          background: linear-gradient(180deg, rgba(3,3,3,0.95), rgba(3,3,3,0.45), transparent);
          backdrop-filter: blur(6px);
        }

        .navbar {
          max-width: 1460px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 28px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(7,7,7,0.92);
        }

        .brand,
        .hero-tag,
        .nav-links,
        .eyebrow,
        .section-label,
        .service-box-title,
        .contact-label,
        .about-signature {
          font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        }

        .brand {
          letter-spacing: 0.3em;
          font-size: 14px;
          text-transform: uppercase;
          color: #f4f4f5;
          font-weight: 600;
        }

        .brand-accent,
        .accent {
          color: #a3e635;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f4f4f5;
        }

        .page {
          max-width: 1460px;
          margin: 0 auto;
          padding: 28px 24px 80px;
        }

        .section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 0 40px;
        }

        .hero-grid,
        .about-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .services-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 36px;
          align-items: center;
        }

        .hero-tag {
          display: inline-block;
          padding: 16px 32px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(180deg, rgba(17,17,17,0.98), rgba(8,8,8,0.98));
          color: #d4d4d8;
          font-size: 15px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
        }

        .hero h1,
        .hero h2,
        .card h3,
        .service-header h3,
        .service-footer h3,
        .services-left h2,
        .about-left h2,
        .about-card h3,
        .cta-banner h3 {
          font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        }

        .hero h1 {
          font-size: 82px;
          margin: 24px 0 0;
          letter-spacing: 0.06em;
          line-height: 0.95;
          color: #f4f4f5;
          text-transform: uppercase;
          font-weight: 700;
        }

        .hero h2 {
          font-size: 52px;
          margin: 24px 0 0;
          line-height: 1.1;
          font-weight: 600;
          color: #f4f4f5;
          max-width: 780px;
        }

        .hero p,
        .card p,
        .services-left p,
        .service-list,
        .service-footer p,
        .cta-banner p,
        .about-left p,
        .about-card p,
        .contact-value {
          margin: 18px 0 0;
          color: #a1a1aa;
          font-size: 24px;
          line-height: 1.9;
        }

        .glass-card,
        .service-header,
        .service-box,
        .service-footer,
        .about-card,
        .cta-banner,
        .contact-card {
          background: rgba(20,20,20,0.9);
          border-radius: 28px;
          padding: 32px;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 18px 48px rgba(0,0,0,0.34);
          position: relative;
          overflow: hidden;
        }

        .glass-card::before,
        .service-header::before,
        .service-box::before,
        .service-footer::before,
        .about-card::before,
        .contact-card::before {
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
          opacity: 0.55;
        }

        .eyebrow,
        .section-label,
        .service-box-title,
        .contact-label,
        .about-signature {
          margin: 0 0 18px;
          color: #71717a;
          font-size: 12px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
        }

        .card h3,
        .service-header h3,
        .service-footer h3,
        .about-card h3,
        .cta-banner h3 {
          margin: 0;
          font-size: 34px;
          line-height: 1.02;
          color: #f4f4f5;
          font-weight: 600;
        }

        .pill-list,
        .right-stack,
        .services-right,
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pill {
          padding: 14px 16px;
          border-radius: 16px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.05);
          color: #f4f4f5;
          font-size: 16px;
        }

        .appointment {
          display: inline-flex;
          width: fit-content;
          margin-top: 24px;
          padding: 12px 24px;
          border-radius: 999px;
          border: 1px solid rgba(132,204,22,0.7);
          background: rgba(0,0,0,0.55);
          color: #a3e635;
          font-family: 'Montserrat', Arial, Helvetica, sans-serif;
          font-size: 12px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .cta-banner {
          text-align: center;
        }

        .cta-button {
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(132,204,22,0.7);
          background: rgba(0,0,0,0.55);
          color: #a3e635;
          font-family: 'Montserrat', Arial, Helvetica, sans-serif;
          font-size: 12px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          font-weight: 600;
          padding: 12px 24px;
        }

        .contact-row {
          margin-bottom: 18px;
          position: relative;
          z-index: 1;
        }

        .contact-label {
          margin-bottom: 8px;
        }

        .services-left h2 {
          font-size: 44px;
          line-height: 1.05;
          margin: 0;
          color: #ffffff;
          text-transform: uppercase;
        }

        .services-left p {
          max-width: 240px;
        }

        .service-grid,
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .service-index {
          position: relative;
          z-index: 1;
          margin: 0 0 8px;
          color: #71717a;
          font-family: 'Montserrat', Arial, Helvetica, sans-serif;
          font-size: 12px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
        }

        .service-box-title {
          position: relative;
          z-index: 1;
          color: #a3e635;
          margin-bottom: 14px;
        }

        .service-list,
        .service-footer p,
        .about-card p {
          position: relative;
          z-index: 1;
          margin-top: 12px;
        }

        .about-left h2 {
          font-size: 56px;
          line-height: 1.02;
          margin: 0;
          color: #ffffff;
        }

        .about-divider {
          width: 120px;
          height: 1px;
          margin-top: 24px;
          background: linear-gradient(90deg, #52525b 0%, transparent 100%);
        }

        .about-signature {
          margin-top: 16px;
        }

        .why-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 12px;
        }

        .why-item {
          padding: 14px 16px;
          border-radius: 16px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.05);
          color: #f4f4f5;
          font-size: 16px;
        }

        @media (max-width: 1100px) {
          .hero-grid,
          .about-grid,
          .services-grid,
          .service-grid,
          .why-grid {
            grid-template-columns: 1fr;
          }

          .section {
            min-height: auto;
            padding: 60px 0;
          }
        }

        @media (max-width: 780px) {
          .navbar {
            padding: 16px 18px;
            flex-direction: column;
            gap: 14px;
          }

          .nav-links {
            gap: 16px;
            font-size: 11px;
          }

          .page,
          .navbar-wrap {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero h1 {
            font-size: 46px;
          }

          .hero h2,
          .card h3,
          .service-header h3,
          .service-footer h3,
          .about-card h3,
          .cta-banner h3,
          .services-left h2,
          .about-left h2 {
            font-size: 28px;
          }
        }
      `}</style>

      <div className="navbar-wrap">
        <div className="navbar">
          <div className="brand">
            ALFAXMS <span className="brand-accent">LLC</span>
          </div>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.key} href={`#${item.key}`}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="page">
        <section id="home" className="section">
          <div className="hero-grid">
            <div>
              <div className="hero-tag">Private Luxury Automotive Studio</div>
              <h1>
                ALFAXMS <span className="brand-accent">LLC</span>
              </h1>
              <h2>High end automotive services delivered with a luxury level client experience.</h2>
              <p>
                Private service. Exclusive clients. Elevated automotive experience shaped by precision, care, and a luxury standard in every detail.
              </p>

              {/* MOVED HERE UNDER PARAGRAPH */}
              <div className="glass-card" style={{ marginTop: '24px' }}>
                <p className="eyebrow">Signature Standard</p>
                <h3>Luxury without compromise.</h3>
                <p>
                  A premium automotive service experience built around select clientele, elevated care, and meticulously directed execution.
                </p>
                <div className="pill-list">
                  {standards.map((item) => (
                    <div key={item} className="pill">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="right-stack">

              {/* MOVED ABOVE CTA */}
              <div className="appointment">By appointment only</div>

              <div className="cta-banner">
                <h3>Make Sure Your Vehicle Is Taken Care Of</h3>
                <button className="cta-button">Contact Us</button>
              </div>

              <div className="contact-card">
                <div className="contact-row">
                  <div className="contact-label">Email</div>
                  <div className="contact-value">Info@alfaxms.com</div>
                </div>
                <div className="contact-row">
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Wylie, Texas</div>
                </div>
                <div className="contact-row" style={{ marginBottom: 0 }}>
                  <div className="contact-label">Availability</div>
                  <div className="contact-value">Private bookings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="services-grid">
            <div className="services-left">
              <div className="section-label">Services</div>
              <h2>Specialized automotive services with a premium standard.</h2>
              <p>
                Designed for clients who value exclusivity, premium presentation, and an elevated automotive experience.
              </p>
            </div>

            <div className="services-right">
              <div className="service-header">
                <div className="service-index">01</div>
                <h3>Automotive Performance Garage</h3>
              </div>

              <div className="service-grid">
                {serviceGroups.map((group) => (
                  <div key={group.title} className="service-box">
                    <div className="service-box-title">{group.title}</div>
                    <div className="service-list">
                      {group.items.map((item) => (
                        <div key={item}>{item}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="service-footer">
                <div className="service-index">02</div>
                <h3>Private Client Consulting</h3>
                <p>
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
              <p>
                Since 2020, ALFAXMS LLC has operated as a private luxury automotive studio delivering refined performance and high end vehicle transformation for a select clientele. Built on precision, discretion, and uncompromising standards, every project reflects a level of execution designed for those who expect more than traditional automotive service.
              </p>
              <div className="about-divider" />
              <div className="about-signature">
                Private. Precise. Elevated.
              </div>

              {/* SIGNATURE LIKE IMAGE STYLE */}
              <div style={{
                marginTop: '12px',
                textAlign: 'right',
                fontFamily: 'Edwardian Script ITC, Apple Chancery, Snell Roundhand, cursive',
                fontSize: '60px',
                fontWeight: 400,
                fontStyle: 'normal',
                color: '#e5e5e5',
                opacity: 0.92,
                letterSpacing: '1px'
              }}>
                Alfayadh
              </div>

              <div style={{ marginTop: '28px' }}>
                <div className="section-label">Why ALFAXMS</div>
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
                <div key={card.title} className="about-card">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
