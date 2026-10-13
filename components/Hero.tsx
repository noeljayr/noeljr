export default function Hero() {
  return (
    <header className="hero" role="banner">
      <div className="wrap hero-inner">
        <span aria-label="">
          <h1 className="" data-text="Design & Everything">
            Design &amp; Everything
          </h1>
        </span>
        <p className="hero-role mono io" role="doc-subtitle">
          Product Designer &amp; Developer
        </p>
        <div className="hero-foot io">
          <p>
            Some <strong>see design and code as separate worlds;</strong> I love
            living in both! I&apos;m a <strong>Product Designer</strong> with a
            knack for building <strong> products</strong>.
          </p>
          <div className="hero-meta mono">
            <span className="hidden" itemProp="addressLocality">Fintech</span>

            <span>E-commerce · AI & Automation</span>
            <span> Health · Education</span>
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
