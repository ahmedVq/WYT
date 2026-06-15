import { Fragment } from 'react';

const SVCS = [
  { n: '01', t: 'Construction',       d: 'Structural and civil works, MEP coordination and base build delivered to programme.' },
  { n: '02', t: 'Interior Finishing', d: 'Stone, joinery, plaster and surface detailing — the fine finishes that define the space.' },
  { n: '03', t: 'Fit-Out Solutions',  d: 'Commercial and retail fit-out, from showrooms to workplaces, built for brand and use.' },
  { n: '04', t: 'Renovation',         d: 'Sensitive refurbishment and reconfiguration of existing and occupied buildings.' },
  { n: '05', t: 'Project Management', d: 'Cost, programme and quality control with transparent reporting at every stage.' },
  { n: '06', t: 'Turnkey Delivery',   d: 'A single handover-ready package — design, build and finish under one contract.' },
];

const STEPS = ['Consult', 'Design', 'Plan', 'Build', 'Finish', 'Handover'];

export default function Services() {
  return (
    <section className="section dark" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-head__main">
            <span className="kicker"><span className="ix">02</span> Turnkey Services</span>
            <h2 className="h-xl">Everything the<br />build needs.</h2>
          </div>
          <p className="sec-head__aside lead">
            Six disciplines under one roof, sequenced as one programme — so nothing falls between
            trades and the schedule holds from demolition to handover.
          </p>
        </div>

        <div className="svc-grid reveal" data-d="1">
          {SVCS.map(s => (
            <article className="svc" key={s.n}>
              <span className="svc__line" />
              <span className="svc__ix">{s.n} /</span>
              <h3 className="svc__title">{s.t}</h3>
              <p className="svc__desc">{s.d}</p>
              <span className="svc__more">Explore <span>→</span></span>
            </article>
          ))}
        </div>

        <div className="svc-process reveal" data-d="2">
          {STEPS.map((s, i) => (
            <Fragment key={s}>
              {i > 0 && <span className="sep" />}
              <div className="step">
                <span className="n">0{i + 1}</span>
                <b>{s}</b>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
