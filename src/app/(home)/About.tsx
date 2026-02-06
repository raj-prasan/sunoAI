export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "var(--primary-purple)" }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 blob-yellow opacity-40"></div>

        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We create a{" "}
            <span
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--secondary-yellow)",
              }}
            >
              safe space to care
            </span>
            <br />
            for your{" "}
            <span
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--secondary-yellow)",
              }}
            >
              mental health
            </span>{" "}
            and{" "}
            <span
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--secondary-yellow)",
              }}
            >
              understand your thoughts.
            </span>
          </h2>
        </div>

        {/* Team Members */}
        <div className="max-w-4xl mx-auto" style={{fontFamily: "var(--font-body)"}}>
          <p className="text-white">
            This tool offers general mental well-being insights based on your writing. It is not a diagnosis or medical advice. If you feel distressed, consider reaching out to someone you trust or a qualified mental health professional.
          </p>
          <p className="text-white"  style={{fontFamily: "var(--font-body)"}}>
            This platform is not a crisis service. For immediate help in India, contact:<br/>
            <span className="font-bold">Kiran: 1800-599-0019 <br/> AASRA: +91-9820466726 <br/> Emergency: 112</span>
          </p>

          <p className="text-white"  style={{fontFamily: "var(--font-body)"}}>
              We do not store personal reflections and cannot provide direct intervention. This tool supports awareness only and does not replace professional care.
          </p>

        </div>
      </div>
    </section>
  );
}
