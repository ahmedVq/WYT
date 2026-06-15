'use client';
import { useEffect } from 'react';
import { ProjectProvider } from '../context/ProjectContext';
import Nav             from '../components/Nav';
import Hero            from '../components/Hero';
import Stats           from '../components/Stats';
import Studio          from '../components/Studio';
import Services        from '../components/Services';
import Work            from '../components/Work';
import CaseStudy       from '../components/CaseStudy';
import ProcessTimeline from '../components/ProcessTimeline';
import WhyWYT          from '../components/WhyWYT';
import Testimonials    from '../components/Testimonials';
import Consult         from '../components/Consult';
import Contact         from '../components/Contact';
import Footer          from '../components/Footer';
import ProjectDetail   from '../components/ProjectDetail';

export default function Home() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = Array.from(document.querySelectorAll('.reveal'));

    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach(r => r.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    reveals.forEach(r => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <ProjectProvider>
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <Studio />
        <Services />
        <Work />
        <CaseStudy />
        <ProcessTimeline />
        <WhyWYT />
        <Testimonials />
        <Consult />
        <Contact />
      </main>
      <Footer />
      <ProjectDetail />
    </ProjectProvider>
  );
}
