export default function Contact() {
  return (
    <section className="section dark" id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head reveal" style={{ borderTop: '1px solid var(--d-line)', paddingTop: 'clamp(56px,7vw,96px)' }}>
          <div className="sec-head__main">
            <span className="kicker"><span className="ix">09</span> Visit the Studio</span>
            <h2 className="h-lg">Come and see<br />how we work.</h2>
          </div>
        </div>
        <div className="contact-grid reveal" data-d="1">
          <div className="map">
            <img src="/assets/portfolio/v166/03.jpg" alt="WYT Studio" loading="lazy" />
            <div className="map__pin">
              <span className="dot" />
              <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}>WYT Studio</span>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-rows">
              <div className="contact-block">
                <h4>Studio</h4>
                <p>00 Example Avenue<br />District, City 00000</p>
              </div>
              <div className="contact-block">
                <h4>Talk to us</h4>
                <a href="tel:+10000000000">+1 (000) 000-0000</a><br />
                <a href="mailto:studio@wyt.example">studio@wyt.example</a>
              </div>
              <div className="contact-block">
                <h4>Hours</h4>
                <p>Mon–Fri · 09:00–18:00<br />Site visits by appointment</p>
              </div>
            </div>
            <a href="#consult" className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }}>
              Request a Consultation <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
