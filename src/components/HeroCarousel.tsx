import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import type { Stud } from '../data/studs';

type HeroCarouselProps = { studs: Stud[] };

const slideOrder = ['pink-boss', 'pink-chenzo', 'steph-curly', 'pink-slime', 'pink-face'];
const slideCopy: Record<string, { name: string; title: string; description: string; price?: string; color: string }> = {
  'pink-boss': { name: 'BOSS', title: 'PINK BOSS', description: 'FOR FEMALES WITH NO PINK, CURLY OR FURNISHING GENES.', price: '$3,500', color: '#d8ae7a' },
  'pink-chenzo': { name: 'CHENZO', title: 'PINK CHENZO', description: 'RISING STAR STUD OF HOI STUDS. 8 MONTHS OLD, EXTREMELY DOCILE, PLAYFUL, AND FRIENDLY, IDEAL FOR FAMILIES.', color: '#f2b7c7' },
  'steph-curly': { name: 'CURLY', title: 'PINK CURLY', description: 'THE IDEAL OPTION FOR BREEDERS LOOKING FOR ELITE RED GENETICS WITHOUT MIXING INTO THE PINK LINES.', price: '$2,500', color: '#a94738' },
  'pink-slime': { name: 'SLIME', title: 'PINK SLIME', description: 'EXTREMELY HIGH-DEMAND COMMERCIAL STUD THANKS TO HIS PURE RED COLOR COMBINED WITH IMPECCABLE STRUCTURE.', color: '#b8494a' },
  'pink-face': { name: 'FACE', title: 'PINK FACE', description: 'EXOTIC STUD NOTED FOR HIS CLEAN GENETICS AND HIGHLY UNUSUAL PHYSICAL TRAITS IN THE BREED. CALM TEMPERAMENT.', color: '#e9d9c7' },
};

export default function HeroCarousel({ studs }: HeroCarouselProps) {
  const orderedStuds = slideOrder.map((slug) => studs.find((stud) => stud.slug === slug)).filter((stud): stud is Stud => Boolean(stud));
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();
  const activeStud = orderedStuds[activeIndex] ?? orderedStuds[0];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') selectStud((activeIndex + 1) % orderedStuds.length);
      if (event.key === 'ArrowLeft') selectStud((activeIndex - 1 + orderedStuds.length) % orderedStuds.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, orderedStuds.length]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = window.setInterval(() => selectStud((activeIndex + 1) % orderedStuds.length), 7000);
    return () => window.clearInterval(timer);
  }, [activeIndex, shouldReduceMotion, orderedStuds.length]);

  const selectStud = (index: number) => {
    setDirection(index > activeIndex || (activeIndex === orderedStuds.length - 1 && index === 0) ? 1 : -1);
    setActiveIndex(index);
    window.history.replaceState(null, '', `#${orderedStuds[index].slug}`);
  };

  if (!activeStud) return null;
  const copy = slideCopy[activeStud.slug];

  return (
    <section className={`brand-hero brand-hero--${activeStud.atmosphere}`} style={{ '--hero-accent': activeStud.accent } as React.CSSProperties} aria-label="Featured HOI Frenchies studs">
      <div className="brand-hero__mist" aria-hidden="true" />
      <div className="brand-hero__fracture" aria-hidden="true" />
      <div className="brand-hero__socials brand-hero__socials--side" aria-label="Social media"><a href="#facebook" aria-label="Facebook"><FaFacebookF aria-hidden="true" /></a><a href="#instagram" aria-label="Instagram"><FaInstagram aria-hidden="true" /></a><a href="#tiktok" aria-label="TikTok"><FaTiktok aria-hidden="true" /></a></div>
      <AnimatePresence mode="wait" initial={!shouldReduceMotion}>
        <motion.div className="brand-hero__ghost" key={`${activeStud.slug}-ghost`} initial={shouldReduceMotion ? false : { opacity: 0, filter: 'blur(14px)', y: 24 }} animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }} exit={shouldReduceMotion ? undefined : { opacity: 0, filter: 'blur(14px)', y: -20 }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }} aria-hidden="true">{copy.name}</motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait" initial={!shouldReduceMotion}>
        <motion.div className="brand-hero__visual" key={`${activeStud.slug}-media`} initial={shouldReduceMotion ? false : { opacity: 0, y: 190, rotate: direction * 8, scale: .8 }} animate={{ opacity: 1, y: 0, rotate: direction * -2, scale: 1 }} exit={shouldReduceMotion ? undefined : { opacity: 0, y: -100, rotate: direction * -8, scale: .9 }} transition={{ type: 'spring', stiffness: 115, damping: 16, mass: 1.05 }}>
          <div className="brand-hero__orbit" aria-hidden="true" />
          <motion.img src={activeStud.image} alt={`${copy.name} French Bulldog`} initial={shouldReduceMotion ? false : { scale: 1.18 }} animate={{ scale: 1 }} transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }} />
          <span className="brand-hero__visual-label mono">EXOTIC / DNA / STRUCTURE</span>
        </motion.div>
      </AnimatePresence>
      <div className="brand-hero__overlay" aria-hidden="true" />
      <AnimatePresence mode="wait" initial={!shouldReduceMotion}>
        <motion.div className="brand-hero__content" key={`${activeStud.slug}-content`} initial={shouldReduceMotion ? false : { opacity: 0, x: direction * -70 }} animate={{ opacity: 1, x: 0 }} exit={shouldReduceMotion ? undefined : { opacity: 0, x: direction * 70 }} transition={{ duration: .7, delay: .32, ease: [0.22, 1, 0.36, 1] }}>
          <div className="brand-hero__badge">{copy.title}</div>
          <p className="brand-hero__description">{copy.description}</p>
          <div className="brand-hero__actions"><a className="brand-hero__cta" href="#">LOCK-IN <span aria-hidden="true">↗</span></a><a className="brand-hero__buy" href="#">BUY NOW <span aria-hidden="true">↗</span></a></div>
        </motion.div>
      </AnimatePresence>
      <div className="brand-hero__arrows"><button type="button" onClick={() => selectStud((activeIndex - 1 + orderedStuds.length) % orderedStuds.length)} aria-label="Previous stud">↑</button><button type="button" onClick={() => selectStud((activeIndex + 1) % orderedStuds.length)} aria-label="Next stud">↓</button></div>
      <div className="brand-hero__selectors" role="tablist" aria-label="Choose featured stud">{orderedStuds.map((stud, index) => <button type="button" role="tab" aria-selected={index === activeIndex} aria-label={`View ${slideCopy[stud.slug].name}`} className={`brand-hero__selector ${index === activeIndex ? 'is-active' : ''}`} style={{ '--selector-color': slideCopy[stud.slug].color } as React.CSSProperties} key={stud.slug} onClick={() => selectStud(index)}><span aria-hidden="true" /></button>)}</div>
      <div className="brand-hero__progress" aria-hidden="true"><span style={{ animationPlayState: shouldReduceMotion ? 'paused' : 'running' }} /></div>
    </section>
  );
}
