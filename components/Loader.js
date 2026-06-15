'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = ['W', 'Y', 'T'];

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          style={overlay}
          exit={{ opacity: 0, scale: 1.06, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] } }}
        >
          {/* Letters */}
          <div style={letterRow}>
            {LETTERS.map((l, i) => (
              <div key={l} style={letterWrap}>
                {/* fill letter */}
                <motion.span
                  style={letterStyle}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  {l}
                </motion.span>

                {/* outline ghost that drifts up and fades */}
                <motion.span
                  aria-hidden
                  style={{ ...letterStyle, ...ghostLetter }}
                  initial={{ y: '0%', opacity: 0 }}
                  animate={{ y: '-30%', opacity: [0, 0.18, 0] }}
                  transition={{ duration: 1.1, delay: 0.55 + i * 0.12, ease: 'easeOut' }}
                >
                  {l}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Sweep line */}
          <div style={lineTrack}>
            <motion.div
              style={lineFill}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            />
          </div>

          {/* Tag line */}
          <motion.div
            style={tagRow}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
          >
            <span style={tagLeft}>Construction &amp; Fine Finishes</span>
            <span style={tagRight}>Est.&nbsp;2014</span>
          </motion.div>

          {/* Corner annotation */}
          <motion.div
            style={corner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            [ Built to the millimetre ]
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── styles ─────────────────────────────────────────────── */
const overlay = {
  position: 'fixed',
  inset: 0,
  zIndex: 999,
  background: '#0a0a0a',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

const letterRow = {
  display: 'flex',
  gap: 'clamp(0px, 1vw, 14px)',
  lineHeight: 1,
};

const letterWrap = {
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'flex-end',
};

const letterStyle = {
  display: 'block',
  fontFamily: '"Archivo","Trebuchet MS",system-ui,sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(120px, 22vw, 300px)',
  letterSpacing: '-0.02em',
  color: '#ece8d0',
  lineHeight: 0.88,
  userSelect: 'none',
};

const ghostLetter = {
  position: 'absolute',
  inset: 0,
  WebkitTextStroke: '1px rgba(236,232,208,0.4)',
  color: 'transparent',
  pointerEvents: 'none',
};

const lineTrack = {
  width: 'clamp(260px, 46vw, 660px)',
  height: 1,
  background: 'rgba(236,232,208,0.15)',
  margin: '28px 0 22px',
  transformOrigin: 'left center',
  overflow: 'hidden',
  position: 'relative',
};

const lineFill = {
  position: 'absolute',
  inset: 0,
  background: '#ece8d0',
  transformOrigin: 'left center',
};

const tagRow = {
  display: 'flex',
  justifyContent: 'space-between',
  width: 'clamp(260px, 46vw, 660px)',
  fontFamily: '"Archivo","Trebuchet MS",system-ui,sans-serif',
};

const tagBase = {
  fontSize: 11,
  letterSpacing: '0.26em',
  textTransform: 'uppercase',
  fontWeight: 600,
  color: 'rgba(236,232,208,0.55)',
};

const tagLeft = { ...tagBase };
const tagRight = { ...tagBase };

const corner = {
  position: 'absolute',
  bottom: 28,
  left: 'clamp(20px,4vw,56px)',
  fontFamily: '"Archivo","Trebuchet MS",system-ui,sans-serif',
  fontSize: 10,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  fontWeight: 600,
  color: 'rgba(236,232,208,0.3)',
};
