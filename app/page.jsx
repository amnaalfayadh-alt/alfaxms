export default function AlfaxmsLuxuryWebsite() {
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'services', label: 'Services' },
    { key: 'about', label: 'About' },
  ]

  const serviceGroups = [
    {
      title: 'Maintenance & Inspection',
      items: [
        'Premium vehicle maintenance and preventive care',
        'Pre purchase vehicle inspections',
      ],
    },
    {
      title: 'Diagnostics & Electrical',
      items: [
        'Advanced diagnostics and manual inspection',
        'Electrical systems diagnostics and repair',
        'Wiring, sensor, battery, alternator, and starter services',
      ],
    },
    {
      title: 'Repair Services',
      items: [
        'Engine repair and performance optimization',
        'Brake system inspection and replacement',
        'Suspension, steering, cooling, and AC heating repair',
      ],
    },
    {
      title: 'Performance & Upgrades',
      items: [
        'Exhaust and intake upgrades',
        'Sport suspension and handling upgrades',
        'Custom performance builds and track preparation',
      ],
    },
    {
      title: 'Specialized & Off Road',
      items: [
        'JDM specialized diagnostics and repair',
        'Off road 4x4 consultation, build planning, and modifications',
      ],
    },
    {
      title: 'Consultation',
      items: [
        'Performance consultation and upgrade planning',
        'Expert troubleshooting for complex vehicle issues',
      ],
    },
  ]

  const standards = [
    'Private client experience',
    'Luxury level presentation',
    'Precision focused execution',
  ]

  const aboutCards = [
    {
      title: 'Premium Positioning',
      body: 'Built around exclusivity, trust, and a brand presence that feels elevated from the first impression.',
    },
    {
      title: 'Private Client Experience',
      body: 'A selective, high touch model centered on personalized service, detail, and discretion.',
    },
    {
      title: 'Refined Execution',
      body: 'Every project is guided through a polished process with strong visual direction and premium standards.',
    },
  ]

  const aboutPoints = [
    'Private Client Model',
    'No Volume Work',
    'Precision Driven Execution',
    'Selective Projects Only',
  ]

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #030303;
          color: #f4f4f5;
          font-family: 'Cormorant Garamond', serif;
        }

        .site-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at 85% 12%, rgba(255,255,255,0.07), transparent 30%),
            linear-gradient(180deg, #050505 0%, #020202 100%);
          position: relative;
          overflow-x: hidden;
        }

        .site-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, transparent 0%, rgba(210,210,210,0.08) 50%, transparent 100%),
            repeating-linear-gradient(
              -32deg,
              rgba(0,0,0,0.18) 0px,
              rgba(0,0,0,0.18) 3px,
              transparent 3px,
              transparent 22px
            );
          opacity: 0.55;
          mix-blend-mode: screen;
        }

        .nav-shell {
          background: rgba(7,7,7,0.9);
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
        }

        .glass-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(26,26,26,0.9), rgba(11,11,11,0.92));
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 18px 48px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
        }

        .glass-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            repeating-linear-gradient(
              -32deg,
              rgba(190,190,190,0.08) 0px,
              rgba(190,190,190,0.08) 2px,
              transparent 2px,
              transparent 18px
            ),
            linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.04) 14%, transparent 25%);
          opacity: 0.6;
        }

        .pill {
          background: linear-gradient(180deg, rgba(17,17,17,0.98), rgba(8,8,8,0.98));
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
        }

        .accent {
          color: #a3e635;
        }

        .accent-gradient {
          background: linear-gradient(180deg, #bef264 0%, #84cc16 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .section-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 88px;
          padding-bottom: 56px;
        }
      `}</style>

      <div className="site-shell">
        <header className="sticky top-0 z-50 px-6 pt-4">
          <nav className="nav-shell mx-auto flex h-14 max-w-[1480px] items-center justify-between rounded-full px-8">
            <a href="#home" className="text-[0.92rem] font-semibold uppercase tracking-[0.38em] text-zinc-100">
              ALFAXMS <span className="accent-gradient">LLC</span>
            </a>

            <div className="flex items-center gap-8 text-[0.9rem] uppercase tracking-[0.24em] text-zinc-300">
              {navItems.map((item) => (
                <a key={item.key} href={`#${item.key}`} className="transition hover:text-lime-300">
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-[1480px] px-6">
          <section id="home" className="section-page">
            <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <div className="flex flex-col justify-center">
                <div className="pill mb-8 inline-flex w-fit rounded-full px-6 py-3 text-[0.86rem] uppercase tracking-[0.46em] text-zinc-300">
                  Private Luxury Automotive Studio
                </div>

                <h1 className="max-w-[760px] text-[4.9rem] font-semibold leading-[0.9] tracking-[-0.05em] text-zinc-100 md:text-[5.6rem]">
                  ALFAXMS <span className="accent-gradient">LLC</span>
                </h1>

                <div className="my-6 h-px w-24 bg-gradient-to-r from-zinc-600 to-transparent" />

                <h2 className="max-w-[860px] text-[3.2rem] font-semibold leading-[1.02] tracking-[-0.04em] text-zinc-100 md:text-[4rem]">
                  High end automotive services delivered with a luxury level client experience.
                </h2>

                <p className="mt-7 max-w-[780px] text-[1.18rem] leading-9 text-zinc-300">
                  Private service. Exclusive clients. Elevated automotive experience shaped by precision, care, and a luxury standard in every detail.
                </p>

                <div className="mt-8 inline-flex w-fit rounded-full border border-lime-500/70 bg-black/55 px-6 py-3 text-[0.88rem] font-semibold uppercase tracking-[0.36em] text-lime-300 shadow-[0_0_24px_rgba(132,204,22,0.12)]">
                  By appointment only
                </div>
              </div>

              <div className="flex flex-col justify-center gap-5">
                <div className="glass-card rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
                  <p className="mb-6 text-[0.88rem] uppercase tracking-[0.44em] text-zinc-500">Signature Standard</p>
                  <h3 className="text-[2.15rem] font-medium tracking-[-0.035em] text-zinc-100 md:text-[2.5rem]">
                    Luxury without compromise.
                  </h3>
                  <p className="mt-5 text-[1.08rem] leading-8 text-zinc-400">
                    A premium automotive service experience built around select clientele, elevated care, and meticulously directed execution.
                  </p>

                  <div className="mt-8 space-y-3.5">
                    {standards.map((item) => (
                      <div key={item} className="pill rounded-2xl px-5 py-4 text-[1rem] text-zinc-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.2rem] bg-black/80 px-8 py-7 text-center shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                  <p className="text-[2rem] font-medium tracking-[-0.035em] text-zinc-100 md:text-[2.34rem]">
                    Make Sure Your Vehicle Is Taken Care Of
                  </p>
                  <button className="mt-4 inline-flex rounded-full border border-lime-500/70 bg-black/55 px-6 py-3 text-[0.86rem] font-semibold uppercase tracking-[0.36em] text-lime-300 transition hover:bg-black/75">
                    Contact Us
                  </button>
                </div>

                <div className="glass-card rounded-[2rem] px-8 py-7 md:px-10 md:py-8">
                  <div className="space-y-4 text-zinc-100">
                    <div>
                      <p className="mb-2 text-[0.84rem] uppercase tracking-[0.4em] text-zinc-500">Email</p>
                      <p className="text-[1.06rem] text-zinc-200">Info@alfaxms.com</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[0.84rem] uppercase tracking-[0.4em] text-zinc-500">Location</p>
                      <p className="text-[1.06rem] text-zinc-200">Wylie, Texas</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[0.84rem] uppercase tracking-[0.4em] text-zinc-500">Availability</p>
                      <p className="text-[1.06rem] text-zinc-200">Private bookings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="section-page">
            <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-10">
              <div className="flex flex-col justify-center">
                <p className="mb-5 text-[0.92rem] uppercase tracking-[0.42em] text-lime-300">Services</p>
                <h2 className="max-w-[260px] text-[2.9rem] font-medium leading-[0.95] tracking-[-0.03em] text-zinc-100 md:text-[3.4rem]">
                  Specialized automotive services with a premium standard.
                </h2>
                <p className="mt-7 max-w-[230px] text-[1.05rem] leading-8 text-zinc-400">
                  Designed for clients who value exclusivity, premium presentation, and an elevated automotive experience.
                </p>
              </div>

              <div className="min-w-0 space-y-4">
                <div className="glass-card rounded-[2rem] px-6 py-5">
                  <p className="mb-2 text-[0.88rem] uppercase tracking-[0.38em] text-zinc-500">01</p>
                  <h3 className="text-[2rem] font-medium tracking-[-0.03em] text-zinc-100 md:text-[2.25rem]">
                    Automotive Performance Garage
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {serviceGroups.map((group) => (
                    <div key={group.title} className="glass-card rounded-[1.6rem] p-5">
                      <h4 className="mb-3 text-[0.82rem] font-semibold uppercase tracking-[0.36em] text-lime-300">
                        {group.title}
                      </h4>
                      <div className="space-y-2.5 text-[0.98rem] leading-8 text-zinc-200">
                        {group.items.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="glass-card rounded-[2rem] px-6 py-5">
                  <p className="mb-2 text-[0.88rem] uppercase tracking-[0.38em] text-zinc-500">02</p>
                  <h3 className="text-[1.9rem] font-medium tracking-[-0.03em] text-zinc-100 md:text-[2.1rem]">
                    Private Client Consulting
                  </h3>
                  <p className="mt-2 text-[1rem] leading-8 text-zinc-400">
                    High touch consultation for selective clients seeking a tailored and discreet automotive experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="section-page">
            <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
              <div className="flex flex-col justify-center">
                <h2 className="max-w-[700px] text-[3.5rem] font-medium leading-[1.02] tracking-[-0.03em] text-zinc-100 md:text-[4.1rem]">
                  About ALFAXMS <span className="accent">LLC</span>
                </h2>

                <p className="mt-6 max-w-[680px] text-[1.18rem] leading-9 text-zinc-300">
                  Since 2020, ALFAXMS LLC has operated as a private luxury automotive studio delivering refined performance and high end vehicle transformation for a select clientele. Built on precision, discretion, and uncompromising standards, every project reflects a level of execution designed for those who expect more than traditional automotive service.
                </p>

                <div className="mt-6 h-px w-[120px] bg-gradient-to-r from-zinc-600 to-transparent" />
                <p className="mt-4 text-[0.86rem] uppercase tracking-[0.3em] text-zinc-500">
                  Private. Precise. Elevated.
                </p>

                <div className="mt-8 w-full max-w-[640px]">
                  <p className="mb-4 text-[0.92rem] uppercase tracking-[0.42em] text-lime-300">Why ALFAXMS</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {aboutPoints.map((item) => (
                      <div key={item} className="pill rounded-2xl px-4 py-3 text-[1rem] text-zinc-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4">
                {aboutCards.map((card) => (
                  <div key={card.title} className="glass-card rounded-[1.8rem] px-7 py-7">
                    <h3 className="text-[1.95rem] font-medium tracking-[-0.03em] text-zinc-100">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[1.08rem] leading-8 text-zinc-400">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
