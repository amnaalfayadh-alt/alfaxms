export default function Home() {
  const goToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main style={styles.page}>
      <div style={styles.texture} />
      <div style={styles.glowTop} />
      <div style={styles.glowRight} />

      <nav style={styles.fixedNav}>
        <div style={styles.brand}>
          <span style={styles.brandMain}>ALFAXMS</span>
          <span style={styles.brandLLC}>LLC</span>
        </div>
        <div style={styles.navLinks}>
          <button type="button" onClick={() => goToSection("about")} style={styles.navButtonRed}>About</button>
          <button type="button" onClick={() => goToSection("services")} style={styles.navButtonRed}>Services</button>
          <button type="button" onClick={() => goToSection("contact")} style={styles.navButtonRed}>Contact</button>
        </div>
      </nav>

      <section style={styles.heroSection}>
        <div style={styles.heroGrid}>
          <div>
            <div style={styles.pill}>PRIVATE LUXURY AUTOMOTIVE STUDIO</div>
            <h1 style={styles.heroTitle}>
              <span>ALFAXMS </span>
              <span style={styles.redText}>LLC</span>
            </h1>
            <div style={styles.heroLine} />
            <h2 style={styles.heroSubtitle}>
              High end automotive services
              <br />
              delivered with a luxury level client
              <br />
              experience.
            </h2>
            <p style={styles.heroText}>
              Private service. Exclusive clients. Elevated automotive experience shaped by
              precision, care, and a luxury standard in every detail.
            </p>
            <div style={styles.appointmentBadgeRed}>BY APPOINTMENT ONLY</div>
            <div style={styles.buttonRow}>
              <button type="button" onClick={() => goToSection("services")} style={styles.primaryButton}>Explore Services</button>
              <button type="button" onClick={() => goToSection("contact")} style={styles.secondaryButton}>Contact Us</button>
            </div>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.cardEyebrow}>SIGNATURE STANDARD</div>
            <h3 style={styles.cardTitle}>Luxury without compromise.</h3>
            <p style={styles.cardParagraph}>
              A premium automotive service experience built around select clientele,
              elevated care, and meticulously directed execution.
            </p>
            <div style={styles.featureList}>
              <div style={styles.featureListItem}>Private client experience</div>
              <div style={styles.featureListItem}>Luxury vehicle transformation</div>
              <div style={styles.featureListItem}>Premium coordination and finish</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <div style={styles.aboutGrid}>
          <div>
            <div style={styles.sectionEyebrow}>ABOUT</div>
            <h2 style={styles.sectionTitle}>
              About ALFAXMS <span style={styles.redText}>LLC</span>
            </h2>
            <p style={styles.aboutText}>
              ALFAXMS LLC is a private luxury automotive studio focused on high end
              vehicle transformation, premium presentation, and exclusive client
              experiences built around discretion, refinement, and elevated execution.
            </p>
          </div>

          <div style={styles.aboutCards}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoCardTitle}>Premium Positioning</h3>
              <p style={styles.infoCardText}>
                Built around exclusivity, trust, and a brand presence that feels elevated from the
                first impression.
              </p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoCardTitle}>Private Client Experience</h3>
              <p style={styles.infoCardText}>
                A selective, high touch model centered on personalized service, detail, and
                discretion.
              </p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoCardTitle}>Refined Execution</h3>
              <p style={styles.infoCardText}>
                Every project is guided through a polished process with strong visual direction and
                premium standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={styles.section}>
        <div style={styles.servicesHeader}>
          <div>
            <div style={styles.sectionEyebrow}>SERVICES</div>
            <h2 style={styles.servicesTitle}>
              Specialized automotive services
              <br />
              with a premium standard.
            </h2>
          </div>
          <p style={styles.servicesIntro}>
            Designed for clients who value exclusivity, premium presentation, and an elevated
            automotive experience.
          </p>
        </div>

        <div style={styles.servicesPanel}>
          <div style={styles.serviceNumber}>01</div>
          <h3 style={styles.servicesPanelTitle}>Automotive Performance Garage</h3>

          <div style={styles.servicesColumns}>
            <div>
              <div style={styles.columnTitle}>MAINTENANCE &amp; INSPECTION</div>
              <ul style={styles.serviceList}>
                <li style={styles.serviceItem}>Premium vehicle maintenance and preventive care</li>
                <li style={styles.serviceItem}>Pre purchase vehicle inspections</li>
              </ul>
            </div>

            <div>
              <div style={styles.columnTitle}>DIAGNOSTICS &amp; ELECTRICAL</div>
              <ul style={styles.serviceList}>
                <li style={styles.serviceItem}>Advanced vehicle diagnostics computer and manual inspection</li>
                <li style={styles.serviceItem}>Electrical systems diagnostics and repair</li>
                <li style={styles.serviceItem}>Wiring troubleshooting and sensor diagnostics</li>
                <li style={styles.serviceItem}>ECU and advanced system diagnostics</li>
                <li style={styles.serviceItem}>Battery alternator and starter services</li>
              </ul>
            </div>

            <div>
              <div style={styles.columnTitle}>REPAIR SERVICES</div>
              <ul style={styles.serviceList}>
                <li style={styles.serviceItem}>Engine repair and performance optimization</li>
                <li style={styles.serviceItem}>Brake system inspection and replacement</li>
                <li style={styles.serviceItem}>Suspension and steering services</li>
                <li style={styles.serviceItem}>Cooling system and AC heating repair</li>
              </ul>
            </div>

            <div>
              <div style={styles.columnTitle}>PERFORMANCE &amp; UPGRADES</div>
              <ul style={styles.serviceList}>
                <li style={styles.serviceItem}>Exhaust and intake system upgrades</li>
                <li style={styles.serviceItem}>Sport suspension and handling upgrades</li>
                <li style={styles.serviceItem}>Premium performance modification and upgrading</li>
                <li style={styles.serviceItem}>Custom performance builds and track preparation</li>
              </ul>
            </div>

            <div>
              <div style={styles.columnTitle}>SPECIALIZED &amp; OFF ROAD</div>
              <ul style={styles.serviceList}>
                <li style={styles.serviceItem}>JDM specialized diagnostics and repair</li>
                <li style={styles.serviceItem}>Off road 4x4 consultation and build planning</li>
                <li style={styles.serviceItem}>Off road 4x4 modification services</li>
              </ul>
            </div>

            <div>
              <div style={styles.columnTitle}>CONSULTATION &amp; TROUBLESHOOTING</div>
              <ul style={styles.serviceList}>
                <li style={styles.serviceItem}>Performance consultation and upgrade planning</li>
                <li style={styles.serviceItem}>Expert troubleshooting for complex vehicle issues</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.smallCardWrap}>
          <div style={styles.smallServiceCard}>
            <div style={styles.serviceNumber}>02</div>
            <h3 style={styles.infoCardTitle}>Private Client Consulting</h3>
            <p style={styles.infoCardText}>
              High touch consultation for selective clients seeking a tailored and discreet automotive experience.
            </p>
            <div style={styles.smallLine} />
          </div>
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <div style={styles.contactGrid}>
          <div>
            <div style={styles.sectionEyebrow}>CONTACT</div>
            <h2 style={styles.sectionTitle}>
              Contact ALFAXMS <span style={styles.redText}>LLC</span>
            </h2>
            <p style={styles.aboutText}>
              Reach out for private consultation, luxury automotive customization inquiries,
              and premium project planning. No walk in appointments required.
            </p>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.contactBlock}>
              <div style={styles.contactLabel}>EMAIL</div>
              <div style={styles.contactValue}>Info@alfaxms.com</div>
            </div>

            <div style={styles.contactBlock}>
              <div style={styles.contactLabel}>LOCATION</div>
              <div style={styles.contactValue}>Wylie, Texas</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    background: "linear-gradient(90deg, #050505 0%, #111111 55%, #1a1a1a 100%)",
    color: "#d9d9d9",
    fontFamily: "Arial, Helvetica, sans-serif",
    scrollBehavior: "smooth",
    scrollSnapType: "y mandatory",
  },
  texture: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.14,
    backgroundImage:
      "repeating-linear-gradient(115deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 1px, transparent 1px, transparent 8px)",
  },
  glowTop: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    background: "radial-gradient(circle at top center, rgba(255,255,255,0.08), transparent 35%)",
  },
  glowRight: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "40%",
    height: "100%",
    pointerEvents: "none",
    background: "radial-gradient(circle at right center, rgba(255,255,255,0.08), transparent 55%)",
  },
  fixedNav: {
    position: "fixed",
    top: 12,
    left: 64,
    right: 64,
    zIndex: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "999px",
    padding: "14px 22px",
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 30px rgba(255,255,255,0.03)",
  },
  heroSection: {
    position: "relative",
    padding: "88px 96px 40px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    scrollSnapAlign: "start",
  },
  section: {
    position: "relative",
    padding: "88px 96px 40px",
    minHeight: "100vh",
    borderTop: "1px solid rgba(255,255,255,0.04)",
    scrollSnapAlign: "start",
  }, {
    position: "relative",
    padding: "120px 96px 72px",
    minHeight: "100vh",
    borderTop: "1px solid rgba(255,255,255,0.04)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    letterSpacing: "6px",
    fontSize: 14,
    fontWeight: 700,
  },
  brandMain: {
    color: "#d6d6d6",
  },
  brandLLC: {
    color: "#8d1010",
  },
  navLinks: {
    display: "flex",
    gap: 34,
    fontSize: 14,
  },
  navButtonRed: {
    color: "#c11212",
    background: "transparent",
    border: "none",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 14,
    padding: 0,
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 64,
    alignItems: "center",
    marginTop: 34,
  },
  pill: {
    display: "inline-block",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "#8f8f8f",
    padding: "12px 20px",
    borderRadius: 999,
    letterSpacing: "6px",
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 28,
  },
  heroTitle: {
    fontSize: 72,
    lineHeight: 1,
    margin: 0,
    fontWeight: 700,
    color: "#dddddd",
  },
  redText: {
    color: "#a81111",
  },
  heroLine: {
    width: 112,
    height: 2,
    background: "rgba(255,255,255,0.18)",
    margin: "28px 0 34px",
  },
  heroSubtitle: {
    margin: 0,
    fontSize: 38,
    lineHeight: 1.25,
    color: "#d0d0d0",
    fontWeight: 700,
    maxWidth: 760,
  },
  heroText: {
    marginTop: 34,
    fontSize: 18,
    lineHeight: 1.8,
    color: "#9b9b9b",
    maxWidth: 760,
  },
  appointmentBadgeRed: {
    display: "inline-block",
    marginTop: 30,
    border: "1px solid rgba(193,18,18,0.6)",
    background: "rgba(193,18,18,0.08)",
    color: "#c11212",
    padding: "12px 18px",
    borderRadius: 999,
    fontSize: 13,
    letterSpacing: "5px",
    fontWeight: 700,
  },
  buttonRow: {
    display: "flex",
    gap: 16,
    marginTop: 34,
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 30px",
    borderRadius: 999,
    background: "#f3f3f3",
    color: "#151515",
    fontWeight: 700,
    minWidth: 190,
    border: "none",
    cursor: "pointer",
  },
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 30px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#d7d7d7",
    fontWeight: 700,
    minWidth: 160,
    cursor: "pointer",
  },
  featureCard: {
    background: "linear-gradient(180deg, rgba(38,38,38,0.82), rgba(22,22,22,0.9))",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 32,
    padding: 34,
    boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
  },
  cardEyebrow: {
    color: "#7f7f7f",
    fontSize: 14,
    letterSpacing: "6px",
    fontWeight: 700,
    marginBottom: 28,
  },
  cardTitle: {
    margin: 0,
    fontSize: 30,
    color: "#d7d7d7",
  },
  cardParagraph: {
    marginTop: 22,
    color: "#a4a4a4",
    fontSize: 16,
    lineHeight: 2,
  },
  featureList: {
    marginTop: 28,
    display: "grid",
    gap: 14,
  },
  featureListItem: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 18,
    background: "rgba(0,0,0,0.22)",
    padding: "14px 18px",
    color: "#9b9b9b",
    fontSize: 14,
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 56,
    alignItems: "start",
    marginTop: 36,
  },
  sectionEyebrow: {
    color: "#7f7f7f",
    fontSize: 14,
    letterSpacing: "6px",
    fontWeight: 700,
    marginBottom: 28,
  },
  sectionTitle: {
    margin: 0,
    fontSize: 64,
    lineHeight: 1.1,
    color: "#d7d7d7",
  },
  aboutText: {
    maxWidth: 720,
    marginTop: 30,
    color: "#9e9e9e",
    fontSize: 18,
    lineHeight: 1.8,
  },
  aboutCards: {
    display: "grid",
    gap: 18,
  },
  infoCard: {
    background: "linear-gradient(180deg, rgba(53,53,53,0.82), rgba(36,36,36,0.9))",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 28,
    padding: 28,
    boxShadow: "0 18px 60px rgba(0,0,0,0.28)",
  },
  infoCardTitle: {
    margin: 0,
    fontSize: 22,
    color: "#d2d2d2",
  },
  infoCardText: {
    marginTop: 18,
    color: "#9d9d9d",
    fontSize: 16,
    lineHeight: 1.9,
  },
  servicesHeader: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 40,
    alignItems: "end",
    marginTop: 36,
  },
  servicesTitle: {
    margin: 0,
    fontSize: 64,
    lineHeight: 1.08,
    color: "#d8d8d8",
  },
  servicesIntro: {
    color: "#9e9e9e",
    fontSize: 18,
    lineHeight: 1.7,
    maxWidth: 500,
    justifySelf: "end",
  },
  servicesPanel: {
    marginTop: 44,
    background: "rgba(10,10,10,0.85)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 34,
    padding: "34px 36px 42px",
    boxShadow: "0 18px 60px rgba(0,0,0,0.32)",
  },
  serviceNumber: {
    color: "#7d7d7d",
    fontSize: 14,
    letterSpacing: "6px",
    marginBottom: 22,
  },
  servicesPanelTitle: {
    margin: 0,
    fontSize: 28,
    color: "#d5d5d5",
  },
  servicesColumns: {
    marginTop: 34,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "28px 44px",
  },
  columnTitle: {
    color: "#737373",
    fontSize: 14,
    letterSpacing: "5px",
    fontWeight: 700,
    marginBottom: 16,
  },
  serviceList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gap: 12,
  },
  serviceItem: {
    color: "#a2a2a2",
    fontSize: 15,
    lineHeight: 1.6,
    position: "relative",
    paddingLeft: 16,
  },
  smallCardWrap: {
    marginTop: 34,
    maxWidth: 420,
  },
  smallServiceCard: {
    background: "rgba(18,18,18,0.82)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 30,
    padding: 28,
    boxShadow: "0 18px 60px rgba(0,0,0,0.28)",
  },
  smallLine: {
    marginTop: 28,
    height: 1,
    width: "100%",
    background: "rgba(255,255,255,0.08)",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 0.9fr",
    gap: 64,
    alignItems: "center",
    marginTop: 36,
  },
  contactCard: {
    background: "linear-gradient(180deg, rgba(43,43,43,0.86), rgba(28,28,28,0.92))",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 34,
    padding: 34,
    boxShadow: "0 18px 60px rgba(0,0,0,0.3)",
    minHeight: 280,
  },
  contactBlock: {
    marginBottom: 34,
  },
  contactLabel: {
    color: "#777777",
    fontSize: 14,
    letterSpacing: "6px",
    fontWeight: 700,
    marginBottom: 16,
  },
  contactValue: {
    color: "#d7d7d7",
    fontSize: 18,
  },
};
