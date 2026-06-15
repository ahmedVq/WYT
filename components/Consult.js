'use client';
import { useState } from 'react';

export default function Consult() {
  const [submitted, setSubmitted] = useState(false);
  const [note, setNote] = useState('[ Your details stay private — we reply within two business days. ]');
  const [noteColor, setNoteColor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    if (!data.get('name') || !data.get('email')) {
      setNote('[ Please add your name and email so we can reply. ]');
      setNoteColor('#e9c46a');
      return;
    }
    setSubmitted(true);
    setNote('[ Received. A WYT project lead will be in touch within two business days. ]');
    setNoteColor('');
  }

  return (
    <section className="section dark" id="consult">
      <div className="wrap">
        <div className="lead-grid">
          <div className="lead-aside reveal">
            <span className="kicker"><span className="ix">08</span> Start a Project</span>
            <h2 className="h-lg">Let&apos;s build your<br />next project.</h2>
            <p className="lead" style={{ marginTop: 22 }}>
              Tell us about the space, the timeline and the ambition. We&apos;ll come back within
              two business days with a considered first response.
            </p>
            <div className="contact-line">
              <a href="tel:+10000000000"><span className="lab">Phone</span> +1 (000) 000-0000</a>
              <a href="mailto:studio@wyt.example"><span className="lab">Email</span> studio@wyt.example</a>
              <a href="#contact"><span className="lab">Studio</span> 00 Example Avenue, City</a>
            </div>
          </div>

          <form className="form reveal" data-d="1" onSubmit={handleSubmit} noValidate>
            <div className="field half"><label>Name</label><input name="name" placeholder="Your full name" required disabled={submitted} /></div>
            <div className="field half"><label>Company</label><input name="company" placeholder="Company / organisation" disabled={submitted} /></div>
            <div className="field half"><label>Phone</label><input name="phone" type="tel" placeholder="+1 000 000 0000" disabled={submitted} /></div>
            <div className="field half"><label>Email</label><input name="email" type="email" placeholder="you@email.com" required disabled={submitted} /></div>
            <div className="field half">
              <label>Project Type</label>
              <select name="type" disabled={submitted}>
                <option value="">Select…</option>
                <option>Construction</option>
                <option>Interior Finishing</option>
                <option>Fit-Out</option>
                <option>Renovation</option>
                <option>Turnkey Delivery</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field half">
              <label>Budget Range</label>
              <select name="budget" disabled={submitted}>
                <option value="">Select…</option>
                <option>Under $250k</option>
                <option>$250k – $1M</option>
                <option>$1M – $5M</option>
                <option>$5M+</option>
                <option>To be discussed</option>
              </select>
            </div>
            <div className="field full">
              <label>Message</label>
              <textarea name="message" rows={3} placeholder="Tell us about the space, location and timeline…" disabled={submitted} />
            </div>
            <button
              type="submit"
              className="form__submit"
              style={submitted ? { background: '#1f8a5b', color: '#fff' } : {}}
              disabled={submitted}
            >
              {submitted ? 'Thank you — message sent ✓' : 'Let\'s Build Your Next Project '}
              {!submitted && <span className="arr">→</span>}
            </button>
            <div className="form__note" style={noteColor ? { color: noteColor } : {}}>{note}</div>
          </form>
        </div>
      </div>
    </section>
  );
}
