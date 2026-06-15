export default function CaseStudy() {
  return (
    <section className="section paper" id="case">
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginBottom: 'clamp(32px,4vw,56px)' }}>
          <div className="sec-head__main">
            <span className="kicker"><span className="ix">04</span> Case Study</span>
            <h2 className="h-lg">V-166 Summer House</h2>
          </div>
          <p className="sec-head__aside lead">
            A beachfront summer house in Caesar Bay on the North Coast — structure, stonework, pools
            and interior finishing delivered as a single turnkey programme.
          </p>
        </div>

        <div className="case reveal" data-d="1">
          <div className="case__media">
            <span className="case__badge">[ Built 2022 ]</span>
            <img src="/assets/portfolio/v166/02.jpg" alt="V-166 Summer House, Caesar Bay — completed" loading="lazy" />
          </div>
          <div>
            <ul className="case__list">
              <li>
                <span className="mk">01</span>
                <div><b>The brief.</b> A family summer house facing the sea, where the architecture, the pools and the interior all had to feel like one calm, continuous material world.</div>
              </li>
              <li>
                <span className="mk">02</span>
                <div><b>What we delivered.</b> Full turnkey build — structure, natural stone cladding and flooring, infinity and family pools, integrated lighting and a warm, pared-back interior fit-out.</div>
              </li>
              <li>
                <span className="mk">03</span>
                <div><b>The result.</b> A seamless beachfront home handed over ready to live in, where every threshold between inside, terrace and water is detailed to the millimetre.</div>
              </li>
            </ul>
            <dl className="case__facts">
              <div><dt>Sector</dt><dd>Residential · Summer House</dd></div>
              <div><dt>Scope</dt><dd>Turnkey construction</dd></div>
              <div><dt>Location</dt><dd>Caesar Bay</dd></div>
              <div><dt>Year</dt><dd>2022</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
