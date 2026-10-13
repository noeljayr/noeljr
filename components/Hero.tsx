export default function Hero() {
  return (
    <header className="hero" role="banner">
      <div className="wrap hero-inner">
        <span aria-label="Noel Jr">
          <h1 className="scramble" data-text="Design & Everything">
            Design &amp; Everything
          </h1>
        </span>
        <p className="hero-role mono io" role="doc-subtitle">
          Product Designer &amp; Developer
        </p>
        <div className="hero-foot io">
          <p>
            Some <strong>see design and code as separate worlds;</strong> I love
            living in both! I&apos;m a <strong>UI/UX Designer</strong> with a
            knack for building <strong>user-centered products</strong>.
          </p>
          <div className="hero-meta mono">
            <span itemProp="addressLocality">Malawi</span>
            <span>Fintech · Health · Education</span>
            <span>E-commerce · AI and Automation</span>
          </div>
        </div>
      </div>
      <a
        className="scroll-cue mono"
        href="#work"
        aria-label="Scroll to work section"
      >
        <span>Scroll</span>
        <i className="ti ti-arrow-down"></i>
      </a>
    </header>
  );
}
