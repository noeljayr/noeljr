const steps = [
  {
    n: "01",
    title: "Discover",
    text: "Listen before sketching. Understand the business, the user’s day, and where it hurts.",
  },
  {
    n: "02",
    title: "Define",
    text: "Compress findings into a point of view the whole team can repeat back.",
  },
  {
    n: "03",
    title: "Design",
    text: "Prototype at the speed of the argument — fidelity matches the decision at stake.",
  },
  {
    n: "04",
    title: "Deliver",
    text: "Stay through the build. Spec, QA, and polish until it ships as intended.",
  },
];

export default function Process() {
  return (
    <section id="process" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="shead io">
          <span className="heading">Process</span>
          <span className="subheading">How we do it.</span>
        </div>
        <div className="steps">
          {steps.map((step, i) => (
            <div
              className="step io"
              key={step.n}
              style={i ? { transitionDelay: `${i * 80}ms` } : undefined}
            >
              <span className="n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
