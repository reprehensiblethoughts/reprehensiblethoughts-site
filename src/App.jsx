import React from 'react'

const LINKS = {
  shop: "https://budmet-2p.myshopify.com",
  tiktok: "https://www.tiktok.com/@reprehensiblethoughts",
  instagram: "https://www.instagram.com/reprehensiblethoughts/",
  youtube: "https://www.youtube.com/@reprehensiblethoughts",
  x: "https://x.com/reprehensibl0fg",
  email: "mailto:reprehensiblethoughts@gmail.com"
};

function SocialIcon({ label, href, children }) {
  return (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/15 hover:border-white/30 transition"
    >
      {children}
    </a>
  );
}

const Icon = {
  TikTok: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M12.7 3.1c.6 2.3 2.1 3.9 4.4 4.4v3a7.8 7.8 0 0 1-3.6-.9v4.8a5.7 5.7 0 1 1-5.7-5.6c.4 0 .8 0 1.2.1v3a2.7 2.7 0 1 0 2.7 2.6V3.1h1z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5-8.6a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2ZM21 7.4c.1 1.4.1 1.8.1 5.6s0 4.2-.1 5.6a5.3 5.3 0 0 1-5.2 5.2c-1.4.1-1.8.1-5.6.1s-4.2 0-5.6-.1A5.3 5.3 0 0 1 .8 18.6C.7 17.2.7 16.8.7 13s0-4.2.1-5.6A5.3 5.3 0 0 1 6 2.2c1.4-.1 1.8-.1 5.6-.1s4.2 0 5.6.1a5.3 5.3 0 0 1 3.8 3.8ZM19.2 6A3.5 3.5 0 0 0 17 3.8c-1.2-.1-1.6-.1-5-.1s-3.8 0-5 .1A3.5 3.5 0 0 0 3.8 6c-.1 1.2-.1 1.6-.1 5s0 3.8.1 5A3.5 3.5 0 0 0 6 20.2c1.2.1 1.6.1 5 .1s3.8 0 5-.1A3.5 3.5 0 0 0 20.2 16c.1-1.2.1-1.6.1-5s0-3.8-.1-5Z"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.6 12 3.6 12 3.6s-7.7 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.7.4 9.4.4 9.4.4s7.7 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.7 15.5V8.5L15.8 12l-6.1 3.5Z"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M18.9 2H22l-7.1 8.1L23 22h-6.8l-5.3-6.9L4.7 22H2l7.5-8.6L1.3 2h6.9l4.8 6.3L18.9 2Zm-1.2 18.1h1.9L8.4 3.8H6.4l11.3 16.3Z"/>
    </svg>
  )
};

function ZeroFucksBadge() {
  return (
    <div className="relative inline-flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm"/>
      <div className="absolute text-center">
        <div className="text-5xl font-black tracking-tight">0</div>
        <div className="text-[10px] uppercase tracking-[0.3em] opacity-80">Fucks Given</div>
      </div>
    </div>
  );
}

function Section({ id, eyebrow, title, children, cta }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {eyebrow && <div className="text-xs uppercase tracking-widest text-white/60 mb-2">{eyebrow}</div>}
        {title && <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">{title}</h2>}
        <div className="prose prose-invert">
          {children}
        </div>
        {cta && <div className="mt-8">{cta}</div>}
      </div>
    </section>
  );
}

function Card({ title, children, action }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6 h-full flex flex-col">
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <div className="text-sm opacity-90 mb-4 flex-1">{children}</div>
      {action}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ZeroFucksBadge />
            <div>
              <div className="text-sm uppercase tracking-widest text-white/60">Reprehensible</div>
              <div className="font-black text-lg -mt-1">Thoughts</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#watch" className="opacity-90 hover:opacity-100">Watch</a>
            <a href="#shop" className="opacity-90 hover:opacity-100">Shop</a>
            <a href="#manifesto" className="opacity-90 hover:opacity-100">Manifesto</a>
            <a href="#newsletter" className="opacity-90 hover:opacity-100">Newsletter</a>
          </nav>
          <div className="hidden sm:flex items-center gap-2 ml-2">
            <SocialIcon label="TikTok" href={LINKS.tiktok}><Icon.TikTok /></SocialIcon>
            <SocialIcon label="Instagram" href={LINKS.instagram}><Icon.Instagram /></SocialIcon>
            <SocialIcon label="YouTube" href={LINKS.youtube}><Icon.YouTube /></SocialIcon>
            <SocialIcon label="X" href={LINKS.x}><Icon.X /></SocialIcon>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-16 -left-24 w-96 h-96 bg-fuchsia-500/10 blur-3xl rounded-full"/>
          <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] bg-sky-500/10 blur-3xl rounded-full"/>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">Bold • Abrasive • Funny</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mt-3">Zero Fucks. Full Send.</h1>
            <p className="mt-4 text-white/80 max-w-prose">Straight-to-camera rants with a pulse. If you’re allergic to reality, consider this your EpiPen. I talk fast, hit hard, and leave the fake positivity at the door.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#watch" className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90">Watch now</a>
              <a href={LINKS.shop} className="px-5 py-3 rounded-xl border border-white/20 hover:border-white/40">Shop the drop</a>
            </div>
            <div className="mt-6 text-xs text-white/60">Handle everywhere: <span className="font-mono">@reprehensiblethoughts</span></div>
          </div>
          <div className="flex md:justify-end">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 w-full md:w-[420px]">
              <div className="absolute -top-6 -left-6"><ZeroFucksBadge /></div>
              <div className="text-sm uppercase tracking-widest text-white/60">Policy</div>
              <div className="text-2xl font-extrabold mt-1">0 Fucks Given</div>
              <p className="text-white/80 mt-2">Not decoration—policy. You’ll get unfiltered takes, punchlines that sting, and the occasional deadpan stare at the sign.</p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 text-white/80">
                <li>Truth over comfort</li>
                <li>Humor over hand‑holding</li>
                <li>Consistency over clout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WATCH */}
      <Section id="watch" eyebrow="Rants" title="Watch the latest">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Truth Bombs" action={<a href={LINKS.tiktok} className="mt-3 inline-block text-sm underline" target="_blank" rel="noreferrer noopener">Open on TikTok →</a>}>
            <p>“Everyone says they want the truth—until someone gives it to them.”</p>
            <p className="mt-2 opacity-70 text-xs">Embed your short here (TikTok, IG Reels, or YouTube Short).</p>
          </Card>
          <Card title="Mediocrity" action={<a href={LINKS.instagram} className="mt-3 inline-block text-sm underline" target="_blank" rel="noreferrer noopener">Open on Instagram →</a>}>
            <p>Stop celebrating average. It’s contagious.</p>
          </Card>
          <Card title="Self‑Love" action={<a href={LINKS.youtube} className="mt-3 inline-block text-sm underline" target="_blank" rel="noreferrer noopener">Open on YouTube →</a>}>
            <p>Self‑respect beats self‑indulgence. Every time.</p>
          </Card>
        </div>
      </Section>

      {/* SHOP */}
      <Section id="shop" eyebrow="Merch" title="Shop the drop" cta={<a href={LINKS.shop} className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90">Visit the store</a>}>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="0 Fucks Given — Poster" action={<a href={LINKS.shop} className="mt-3 inline-block text-sm underline" target="_blank" rel="noreferrer noopener">View product →</a>}>
            <p>Matte museum‑grade print. Your wall’s new policy statement.</p>
          </Card>
          <Card title="Truth Over Comfort — Tee" action={<a href={LINKS.shop} className="mt-3 inline-block text-sm underline" target="_blank" rel="noreferrer noopener">View product →</a>}>
            <p>Premium cotton, heavyweight. Silkscreened with a chip on its shoulder.</p>
          </Card>
          <Card title="Comfort = Coffin — Mug" action={<a href={LINKS.shop} className="mt-3 inline-block text-sm underline" target="_blank" rel="noreferrer noopener">View product →</a>}>
            <p>Caffeine delivery vehicle with a message your 9AM meeting needs.</p>
          </Card>
        </div>
      </Section>

      {/* MANIFESTO */}
      <Section id="manifesto" eyebrow="Why this exists" title="The Manifesto">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="What you’ll get">
            <ul className="list-disc pl-5 space-y-2">
              <li>Daily straight‑to‑camera rants (30–90s)</li>
              <li>Sharp takes, sharper punchlines</li>
              <li>Zero pandering, zero fluff</li>
            </ul>
          </Card>
          <Card title="What you won’t get">
            <ul className="list-disc pl-5 space-y-2">
              <li>Fake positivity</li>
              <li>Trend‑chasing for clout</li>
              <li>Apologies for speaking plainly</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section id="newsletter" eyebrow="Stay sharp" title="Get the weekly hit list"
        cta={
          <form onSubmit={(e)=>{e.preventDefault(); alert('Hook this up to your email platform.');}} className="flex gap-2 max-w-md">
            <input type="email" required placeholder="you@inbox.com" className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-white/40" />
            <button className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90" type="submit">Subscribe</button>
          </form>
        }>
        <p className="text-white/70">One email. Big takes. New drops. No hand‑holding.</p>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-sm uppercase tracking-widest text-white/60">Reprehensible Thoughts</div>
            <div className="text-xs text-white/50">© {new Date().getFullYear()} All rights reserved.</div>
          </div>
          <div className="flex justify-center md:justify-center gap-3">
            <SocialIcon label="TikTok" href={LINKS.tiktok}><Icon.TikTok /></SocialIcon>
            <SocialIcon label="Instagram" href={LINKS.instagram}><Icon.Instagram /></SocialIcon>
            <SocialIcon label="YouTube" href={LINKS.youtube}><Icon.YouTube /></SocialIcon>
            <SocialIcon label="X" href={LINKS.x}><Icon.X /></SocialIcon>
          </div>
          <div className="md:text-right">
            <a href={LINKS.email} className="text-sm underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
