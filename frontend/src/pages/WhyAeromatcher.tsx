import React from "react";

// this is the marketing/benefits page
export default function WhyAeromatcher() {
  return (
    <section
      style={{
        padding: 24,
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--faire-sprig-sans)",
          fontSize: "3.5rem",
          lineHeight: "105%",
          fontWeight: 500,
          letterSpacing: "-0.05em",
          color: "rgb(19 17 16 / 1)",
          marginBottom: "35px",
        }}
      >
        Matching You to the Right Jet, Every Single Time
      </h3>
      <p
        style={{
          color: "#000000ff",
          fontFamily: "var(--faire-sprig-sans)",
          fontSize: "1.1rem",
          fontWeight: 550,
          lineHeight: "150%",
          "--tw-text-opacity": "1",
          textAlign: "center",
          maxWidth: "90%",
          margin: "0 auto",
        }}
      >
        AeroMatcher removes the guesswork from private aviation. Our mission is
        simple: match you to the right jet, every single time.
      </p>
    </section>
  );
}
