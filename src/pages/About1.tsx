"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Leaf, Shield, Star, Sparkles, Scissors, HandHeart, Recycle } from "lucide-react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { StickyMenu } from "@/components/StickyMenu";
import { Footer } from "@/components/Footer";

/**
 * Dream Knot Creations — About Page
 * A modern, Awwwards‑inspired page with soft, calm aesthetics (white/light cream),
 * smooth scroll animations, and a vertical progress rail on the left.
 *
 * Tech: React + Tailwind + Framer Motion + Lucide Icons
 * Drop this component into your Next.js/React app and route it to "/about".
 */

const Section: React.FC<React.PropsWithChildren<{
  id: string;
  title: string;
  kicker?: string;
  description?: string;
}>> = ({ id, title, kicker, description, children }) => {
  return (

    <><Header /><Navigation /><StickyMenu /><section id={id} className="relative scroll-mt-24 py-24 md:py-32">
          <div className="mx-auto w-full max-w-6xl px-4">
              <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-3xl"
              >
                  {kicker && (
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cream-100/70 px-3 py-1 text-xs font-medium tracking-wide text-neutral-600 ring-1 ring-cream-300">
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>{kicker}</span>
                      </div>
                  )}
                  <h2 className="text-3xl font-semibold leading-tight text-neutral-900 md:text-5xl">
                      {title}
                  </h2>
                  {description && (
                      <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
                          {description}
                      </p>
                  )}
              </motion.div>
              <div className="mt-12">{children}</div>
          </div>
      </section></>
  );
};

const Stat: React.FC<{ label: string; value: string }>=({ label, value })=> (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-cream-300 backdrop-blur"
  >
    <div className="text-4xl font-semibold text-neutral-900">{value}</div>
    <div className="mt-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
      {label}
    </div>
  </motion.div>
);

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  text: string;
}> = ({ icon, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="group flex gap-4 rounded-2xl bg-white/70 p-6 ring-1 ring-cream-300 backdrop-blur hover:shadow-md"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-100 ring-1 ring-cream-300">
      {icon}
    </div>
    <div>
      <div className="text-lg font-semibold text-neutral-900">{title}</div>
      <p className="mt-1 text-neutral-600">{text}</p>
    </div>
  </motion.div>
);

const Milestone: React.FC<{
  year: string;
  title: string;
  text: string;
  index: number;
}> = ({ year, title, text, index }) => (
  <motion.li
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.7, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
    className="relative pl-10"
  >
    <div className="absolute left-0 top-2 h-3 w-3 -translate-x-1.5 rounded-full bg-neutral-900 ring-4 ring-cream-200" />
    <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-cream-300 backdrop-blur">
      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{year}</div>
      <div className="mt-1 text-xl font-semibold text-neutral-900">{title}</div>
      <p className="mt-2 text-neutral-600">{text}</p>
    </div>
  </motion.li>
);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
     <div
  ref={heroRef}
  className="relative isolate overflow-hidden min-h-screen"
>
  {/* Background Video Fullscreen */}
  <motion.div
    style={{ y, opacity }}
    className="absolute inset-0 -z-10"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="../../public/About-video-1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </motion.div>

  {/* Content */}
  <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-8 px-4 py-24 text-center">
    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-2 rounded-full bg-cream-100/70 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-700 ring-1 ring-cream-300"
    >
      <Star className="h-4 w-4" /> Since 1995 — Handcrafted Luxury
    </motion.div>

    {/* Big About Us */}
   {/* Big About Us */}
<motion.h1
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-7xl lg:text-8xl font-playfair tracking-tight text-white
             [text-shadow:_2px_2px_0_#000,_4px_4px_6px_rgba(0,0,0,0.7)]"
>
  About Us
</motion.h1>


{/* Subheading */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.4 }}
  transition={{ duration: 1, delay: 0.1 }}
  className="max-w-3xl px-4 md:px-6 
             text-lg md:text-xl lg:text-2xl font-playfair font-bold italic leading-relaxed 
             text-white 
             [text-shadow:_1px_1px_0_#000,_2px_2px_4px_rgba(0,0,0,0.7),_3px_3px_8px_rgba(0,0,0,0.9)]"
>
  At Dream Knot Creations, we weave more than carpets — we weave stories.  
  Our passion lies in blending timeless craftsmanship with modern design,  
  creating a sanctuary of comfort, elegance, and durability.
</motion.p>






    {/* CTA Buttons */}
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 1, delay: 0.2 }}
  className="flex flex-wrap justify-center items-center gap-4"
>
  {/* Scroll to Story section */}
  <a
    href="#story"
    className="group inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-6 py-3 text-sm md:text-base font-medium text-white shadow-lg transition-transform duration-300 hover:-translate-y-1"
  >
    Our Story{" "}
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </a>

  {/* Scroll to Process section */}
  <a
    href="#process"
    className="inline-flex items-center gap-2 rounded-2xl bg-white/70 px-6 py-3 text-sm md:text-base font-medium text-neutral-900 ring-1 ring-cream-300 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
  >
    Our Craft
  </a>
</motion.div>

  </div>
</div>

  );
};

const LeftRail: React.FC<{ sections: { id: string; label: string }[] }>=({ sections })=>{
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: undefined });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <div className="pointer-events-none sticky top-24 hidden h-[calc(100vh-6rem)] shrink-0 md:block md:w-16 lg:w-20">
      <div className="relative h-full">
        {/* Vertical line */}
        <motion.div
  className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-neutral-300 via-cream-300 to-white"
  style={{
    scaleY: smooth,
    transformOrigin: "top center", 
  }}
/>

        {/* Section dots */}
        <ul className="absolute left-1/2 top-0 -translate-x-1/2 space-y-16">
          {sections.map((s, i) => (
            <li key={s.id} className="pointer-events-auto">
              <a
                href={`#${s.id}`}
                className="group block"
                aria-label={s.label}
              >
                <span className="block h-3 w-3 rounded-full bg-neutral-900 ring-4 ring-cream-200 transition-transform group-hover:scale-110" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const GalleryStrip: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  return (
    <div ref={ref} className="overflow-hidden rounded-3xl ring-1 ring-cream-300">
      <motion.div style={{ x }} className="flex min-w-[140%] gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] w-1/3 shrink-0 bg-[url('/carpet-sample.jpg')] bg-cover bg-center" />
        ))}
      </motion.div>
    </div>
  );
};

const CTA: React.FC = () => (
  <section className="relative py-20">
    <div className="mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl bg-gradient-to-br from-cream-100 via-white to-cream-200 p-8 ring-1 ring-cream-300 md:p-12"
      >
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Visit Our Studio</div>
            <h3 className="mt-2 text-2xl font-semibold text-neutral-900 md:text-4xl">
              Feel the weave. See the craft.
            </h3>
            <p className="mt-3 text-neutral-600">
              Book a private walkthrough to explore textures, dyes, and bespoke patterns designed exclusively for your space.
            </p>
          </div>
          <div className="flex items-center justify-start md:justify-end">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-6 py-3 text-white ring-1 ring-neutral-900/10 transition-transform duration-300 hover:-translate-y-0.5">
              Schedule a Visit <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function AboutDreamKnotCreations() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const headerBlur = useTransform(scrollYProgress, [0, 0.05], [6, 0]);

  const sections = [
    { id: "story", label: "Our Story" },
    { id: "craft", label: "Craft" },
    { id: "process", label: "Process" },
    { id: "values", label: "Values" },
    { id: "timeline", label: "Timeline" },
  ];

  return (
    <><div ref={pageRef} className="min-h-screen bg-cream-50 text-neutral-900">
          {/* Floating header that fades in on scroll */}


          {/* Hero */}
          <Hero />

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-4 md:grid-cols-[auto,1fr] md:gap-8">
              {/* Left rail with progress */}
              

              {/* Right content */}
              <main className="">
                  {/* Story */}
                <Section id={""} title={""}>
  <div className="relative font-playfair isolate rounded-3xl bg-gradient-to-b from-white via-cream-50 to-cream-100 px-4 sm:px-6 md:px-12 py-12 sm:py-16 shadow-lg">
    {/* Background accents */}
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden rounded-3xl"
    >
      <div className="absolute -left-20 top-10 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-cream-200/60 blur-3xl" />
      <div className="absolute bottom-[-2rem] right-[-2rem] h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-white/60 blur-3xl" />
    </div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-10 sm:mb-12"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-xs sm:text-sm font-medium uppercase tracking-wider text-amber-800"
      >
        Since 1995
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="font-playfair text-2xl sm:text-3xl md:text-5xl text-neutral-900 leading-snug"
      >
        Our story is woven into every knot
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-3 sm:mt-4 max-w-xl sm:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-neutral-600 px-2"
      >
        Founded in 1995, Dream Knot Creations has been crafting premium carpets
        that marry heritage techniques with contemporary design. Our atelier
        believes in slow craft, natural materials, and designs that breathe calm
        into your home.
      </motion.p>
    </motion.div>

    {/* Stats */}
    <div className="grid font-playfair gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {[
        { value: "29+", label: "Years Honing The Craft" },
        { value: "10k+", label: "Carpets Handcrafted" },
        { value: "35+", label: "Artisans Empowered" },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl bg-white/70 p-4 sm:p-6 shadow-md backdrop-blur ring-1 ring-cream-300 hover:shadow-xl transition text-center"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900">
            {stat.value}
          </p>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-neutral-700">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</Section>



                  {/* Craft */}
                  

                  {/* Process */}
                  <Section id={""} title={""}
>
  

  {/* Process Timeline */}
  <div className="relative isolate rounded-3xl bg-gradient-to-b from-white via-cream-50 to-cream-100 px-4 sm:px-6 md:px-12 py-16 shadow-lg">
  {/* Decorative blurred accents */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
    className="mb-16 text-center max-w-3xl mx-auto"
  >
    <p className="text-sm font-playfair uppercase tracking-widest text-amber-800">
      Our Process
    </p>
    <h2 className="mt-2  text-4xl md:text-5xl font-playfair leading-tight text-neutral-900">
      From <span className="text-amber-900">sketch</span> to {" "}
      <span className="text-amber-900">Masterpiece</span>
    </h2>
    <p className="mt-4 text-lg text-neutral-600">
      Every carpet is a journey. We collaborate on designs, select natural
      fibers, and shape each weave by hand — bringing softness, strength, and
      serenity to your home.
    </p>
  </motion.div>
  
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 overflow-hidden rounded-3xl"
  >
    <div className="absolute -left-24 top-16 h-40 w-40 rounded-full bg-cream-200/60 blur-2xl" />
    <div className="absolute bottom-[-2rem] right-[-2rem] h-64 w-64 rounded-full bg-white/40 blur-3xl" />
  </div>

  {/* Section Heading */}
  

 <div className="space-y-20">
  {[
    {
      step: "Design",
      desc: "Sketching motifs and mapping palettes with precision before a single thread is woven.",
      video: "../../public/design-carpets.mp4",
    },
    {
      step: "Dyeing",
      desc: "Natural, low-impact dyeing for rich hues that last generations.",
      video: "../../public/Dyeing-process.mp4",
    },
    {
      step: "Weaving",
      desc: "Hand-knotted artistry bringing life, texture, and soul to every carpet.",
      video: "../../public/weaving-about.mp4",
    },
    {
      step: "Finishing",
      desc: "Meticulous shearing, trimming, and detailing for perfection.",
      video: "../..//public/Finished-carpet.mp4",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40, x: i % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: i * 0.2 }}
      className={`flex flex-col md:flex-row items-center gap-10 ${
        i % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Video */}
      <div
        className="w-full md:w-1/2 relative"
        onMouseEnter={(e) => e.currentTarget.querySelector("video")?.play()}
        onMouseLeave={(e) => {
          const video = e.currentTarget.querySelector("video");
          if (video) {
            video.pause();
            video.currentTime = 0; // reset on leave
          }
        }}
      >
        <motion.video
          src={item.video}
          muted
          playsInline
          loop
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
          Step {i + 1}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-playfair">
          {item.step}
        </h3>
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  ))}
</div>



</div>

</Section>



                  {/* Values */}
                  

                  {/* Timeline with animated left line that follows on scroll */}
             <Section id={""} title={""}  
>
  {/* Sweet impactful heading */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h2 className="font-playfair text-4xl md:text-5xl  text-neutral-900">
      Every knot tells a story,{" "}
      <span className="text-amber-950">woven across time</span>
    </h2>
    <p className="mt-4 max-w-2xl mx-auto italic text-neutral-600">
      From our humble beginnings in 1995 to today’s sustainable craft,
      each milestone carries forward our legacy of artistry and care.
    </p>
  </motion.div>

  <div className="relative pl-10">
    {/* Animated vertical line */}
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "100%" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute left-4 top-0 w-[3px] bg-gradient-to-b from-neutral-900 via-cream-300 to-transparent rounded-full"
    />

    <ol className="space-y-12 relative">
      {[
        {
          year: "1995",
          title: "Dream Knot Creations is born",
          text: "Our journey starts in a small studio, rooted in heritage weaving techniques.",
        },
        {
          year: "2002",
          title: "First bespoke collection",
          text: "We introduce customizable motifs for interior designers.",
        },
        {
          year: "2010",
          title: "Ethical sourcing program",
          text: "Partnerships with local farms ensure traceable, high-quality wool.",
        },
        {
          year: "2017",
          title: "Atelier expansion",
          text: "We scale our artisan team while maintaining hand-finished quality.",
        },
        {
          year: "2023",
          title: "Calm Modern line",
          text: "A new collection focused on soft neutrals and minimalist patterns.",
        },
        {
          year: "2025",
          title: "Sustainable dye lab",
          text: "Launching in-house low-impact dye facility to reduce our footprint.",
        },
      ].map((milestone, i) => (
        <motion.li
          key={milestone.year}
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.9)" }}
          className="relative rounded-2xl bg-white/70 backdrop-blur p-6 shadow-md ring-1 ring-cream-300 transition"
        >
          {/* Year badge */}
          <span className="absolute -left-[2.8rem] top-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-950 text-white font-bold shadow-md">
            {milestone.year}
          </span>

          <h3 className="text-lg font-playfair text-neutral-900">
            {milestone.title}
          </h3>
          <p className="mt-2 text-neutral-600 italic">{milestone.text}</p>
        </motion.li>
      ))}
    </ol>
  </div>
</Section>



                  <CTA />
              </main>
          </div>

          {/* Footer spacer */}
          <div className="h-16" />

          <style>{`
  :root {
    --cream-50: #fffdf8;
    --cream-100: #fcf7ee;
    --cream-200: #f6ecda;
    --cream-300: #ecdfc5;
  }
  .bg-cream-50 { background-color: var(--cream-50); }
  .bg-cream-100 { background-color: var(--cream-100); }
  .bg-cream-200 { background-color: var(--cream-200); }
  .bg-cream-300 { background-color: var(--cream-300); }
  .ring-cream-300 { --tw-ring-color: var(--cream-300); }
  .bg-cream-100\\/70 { background-color: color-mix(in oklab, var(--cream-100) 70%, transparent); }
  .bg-cream-200\\/60 { background-color: color-mix(in oklab, var(--cream-200) 60%, transparent); }
`}</style>

      </div><Footer /></>
  );
}
