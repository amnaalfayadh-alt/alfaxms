export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.texture} />
      <div style={styles.glowTop} />
      <div style={styles.glowRight} />

      <section style={styles.heroSection}>
        <nav style={styles.nav}>
          <div style={styles.brand}>
            <span style={styles.brandMain}>ALFAXMS</span>
            <span style={styles.brandLLC}>LLC</span>
          </div>
          <div style={styles.navLinks}>
            <a href="#about" style={styles.navLinkRed}>About</a>
            <a href="#services" style={styles.navLinkRed}>Services</a>
            <a href="#contact" style={styles.navLinkRed}>Contact</a>
          </div>
        </nav>

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

            {/* MOVED BADGE HERE */}
            <div style={styles.appointmentBadgeRed}>BY APPOINTMENT ONLY</div>

            <div style={styles.buttonRow}>
              <a href="#services" style={styles.primaryButton}>Explore Services</a>
              <a href="#contact" style={styles.secondaryButton}>Contact Us</a>
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
    </main>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    background: "linear-gradient(90deg, #050505 0%, #111111 55%, #1a1a1a 100%)",
    color: "#d9d9d9",
    fontFamily: "Arial, Helvetica, sans-serif",
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
  heroSection: {
    position: "relative",
    padding: "18px 96px 72px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "999px",
    padding: "14px 22px",
    background: "rgba(0,0,0,0.28)",
    backdropFilter: "blur(8px)",
  },
  brand: {
    display: "flex",
    gap: 10,
    letterSpacing: "6px",
    fontSize: 14,
    fontWeight: 700,
  },
  brandMain: { color: "#d6d6d6" },
  brandLLC: { color: "#8d1010" },

  navLinks: {
    display: "flex",
    gap: 34,
    fontSize: 14,
  },

  /* RED NAV LINKS */
  navLinkRed: {
    color: "#c11212",
    textDecoration: "none",
    fontWeight: 600,
  },

  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 64,
    alignItems: "center",
    marginTop: 88,
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
    margin: 0,
    fontWeight: 700,
    color: "#dddddd",
  },

  redText: { color: "#c11212" },

  heroLine: {
    width: 112,
    height: 2,
    background: "rgba(255,255,255,0.18)",
    margin: "28px 0 34px",
  },

  heroSubtitle: {
    fontSize: 38,
    color: "#d0d0d0",
    fontWeight: 700,
  },

  heroText: {
    marginTop: 34,
    fontSize: 18,
    color: "#9b9b9b",
  },

  /* RED BADGE */
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
    marginTop: 30,
  },

  primaryButton: {
    padding: "16px 30px",
    borderRadius: 999,
    background: "#f3f3f3",
    color: "#151515",
    textDecoration: "none",
    fontWeight: 700,
  },

  secondaryButton: {
    padding: "16px 30px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#d7d7d7",
    textDecoration: "none",
  },

  featureCard: {
    background: "linear-gradient(180deg, rgba(38,38,38,0.82), rgba(22,22,22,0.9))",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 32,
    padding: 34,
  },

  cardEyebrow: {
    color: "#7f7f7f",
    fontSize: 14,
    letterSpacing: "6px",
    marginBottom: 28,
  },

  cardTitle: {
    fontSize: 30,
    color: "#d7d7d7",
  },

  cardParagraph: {
    marginTop: 22,
    color: "#a4a4a4",
  },

  featureList: {
    marginTop: 28,
    display: "grid",
    gap: 14,
  },

  featureListItem: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 18,
    padding: "14px 18px",
    color: "#9b9b9b",
  },
};
