export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "64px", letterSpacing: "4px" }}>
          ALFAXMS
        </h1>

        <p style={{ marginTop: "20px", fontSize: "18px", color: "#aaa" }}>
          Luxury Automotive Experience
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "12px 30px",
            background: "#d4af37",
            border: "none",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Explore Inventory
        </button>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#111",
        }}
      >
        <h2 style={{ fontSize: "36px" }}>About ALFAXMS</h2>
        <p style={{ maxWidth: "600px", margin: "20px auto", color: "#ccc" }}>
          We specialize in luxury vehicles, delivering premium automotive
          experiences with unmatched quality and service.
        </p>
      </section>
    </main>
  );
}
