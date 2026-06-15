export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-mark">WYT</div>
            <p style={{ marginTop: 18, color: 'var(--d-soft)', maxWidth: '30ch' }}>
              Construction &amp; fine finishes. Turnkey delivery, held to the millimetre.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Navigate</h5>
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#studio">Studio</a>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <a href="#services">Construction</a>
              <a href="#services">Interior Finishing</a>
              <a href="#services">Fit-Out</a>
              <a href="#services">Turnkey Delivery</a>
            </div>
            <div className="footer-col">
              <h5>Connect</h5>
              <a href="#consult">Request Consultation</a>
              <a href="mailto:studio@wyt.example">Email</a>
              <a href="tel:+10000000000">Phone</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} WYT Designs. All rights reserved.</span>
          <span className="anno">[ Built to the millimetre ]</span>
        </div>
      </div>
    </footer>
  );
}
