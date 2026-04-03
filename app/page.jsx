export default function Home() {
  return (
    <main style={styles.container}>
      
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.logo}>ALFAXMS <span style={{color:"#c1121f"}}>LLC</span></div>
        <div style={styles.links}>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        
        <div style={styles.left}>
          <div style={styles.tag}>PRIVATE LUXURY AUTOMOTIVE STUDIO</div>

          <h1 style={styles.title}>
            ALFAXMS <span style={{color:"#c1121f"}}>LLC</span>
          </h1>

          <p style={styles.subtitle}>
            High end luxury automotive customization with a premium private client experience.
          </p>

          <p style={styles.description}>
            Private builds. Exclusive clients. Elevated automotive transformation shaped by precision,
            visual refinement, and a luxury standard in every detail.
          </p>

          <div style={styles.buttons}>
            <button style={styles.primaryBtn}>Explore Services</button>
            <button style={styles.secondaryBtn}>Contact Us</button>
          </div>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Luxury without compromise.</h3>
          <p style={styles.cardText}>
            A premium automotive brand experience built around select clientele,
            elevated aesthetics, and meticulously directed project execution.
          </p>

          <div style={styles.cardList}>
            <div>Private client experience</div>
            <div>Luxury vehicle transformation</div>
            <div>Premium coordination and finish</div>
          </div>
        </div>

      </section>
    </main>
  );
}

const styles = {
  container: {
    background: "#0b0b0b",
    color: "#fff",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    padding: "40px"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "60px"
  },

  logo: {
    fontWeight: "bold",
    letterSpacing: "2px"
  },

  links: {
    display: "flex",
    gap: "20px"
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "40px",
    flexWrap: "wrap"
  },

  left: {
    maxWidth: "500px"
  },

  tag: {
    fontSize: "12px",
    letterSpacing: "2px",
    marginBottom: "20px",
    opacity: 0.6
  },

  title: {
    fontSize: "48px",
    marginBottom: "20px"
  },

  subtitle: {
    fontSize: "20px",
    marginBottom: "20px"
  },

  description: {
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "30px"
  },

  buttons: {
    display: "flex",
    gap: "15px"
  },

  primaryBtn: {
    background: "#fff",
    color: "#000",
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer"
  },

  secondaryBtn: {
    background: "transparent",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "20px",
    border: "1px solid #555",
    cursor: "pointer"
  },

  card: {
    background: "#111",
    padding: "30px",
    borderRadius: "15px",
    maxWidth: "300px"
  },

  cardTitle: {
    marginBottom: "10px"
  },

  cardText: {
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "20px"
  },

  cardList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "13px"
  }
};
