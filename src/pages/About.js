function About() {
  return (
    <div
      className="main-content"
      style={{ padding: "20px", maxWidth: "600px", margin: "40px auto" }}
    >
      <h2
        style={{
          marginBottom: "2rem",
          fontFamily: "Montserrat, sans-serif",
          color: "#4caf50",
        }}
      >
        About Organic Life
      </h2>
      <p
        style={{
          marginBottom: "2rem",
          fontSize: "1rem",
          lineHeight: "1.6",
          color: "#555",
        }}
      >
        We have been making products inspired by four generations of human
        history. Everything is 100% organic, with no additional additives — only
        fruits or vegetables. No sugar, salt, or artificial preservatives.
      </p>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
        We blend what nature gives us with our art to create unique, healthy
        products for people. Our goal is to offer wholesome nutrition in its
        purest form.
      </p>
      <p
        style={{
          fontSize: "1rem",
          marginTop: "1.5rem",
          fontWeight: "600",
          color: "#4caf50",
        }}
      >
        Abdullah Corduk
      </p>
    </div>
  );
}

export default About;
