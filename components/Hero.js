export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__media">
        <img src="/assets/portfolio/v166/02.jpg" alt="V-166 Summer House" />
      </div>
      <div className="hero__inner wrap">
        <div className="hero__top">
          <span className="hero__corner">[ WYT&nbsp;— Construction &amp; Fine Finishes ]</span>
          <span className="hero__corner">Est. 2014 · Cairo &amp; the North Coast</span>
        </div>
        <h1 className="display">Spaces built<br />to the millimetre.</h1>
        <p className="hero__sub">
          A single turnkey partner for construction, interior finishing and fit-out — delivering
          high-end commercial and residential environments from first sketch to final handover.
        </p>
        <div className="hero__actions">
          <a href="#consult" className="btn btn-primary btn-lg">
            Request a Consultation <span className="arr">→</span>
          </a>
          <a href="#work" className="btn btn-ghost btn-lg">View Our Projects</a>
        </div>
      </div>
      <div className="hero__scroll">// SCROLL</div>
    </header>
  );
}
