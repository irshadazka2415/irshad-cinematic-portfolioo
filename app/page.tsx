'use client'

import { useEffect, useState } from 'react'

const experience = [
  { year: '2025 — 2026', role: 'Cluster & Meetings Group Sales', company: 'The Clermont Group · London', text: 'Relationship building, meeting coordination, administration and cross-functional business operations.' },
  { year: '2023 — 2025', role: 'Business & Hospitality Operations · MBA Placement', company: 'Royal Horseguards Hotel · London', text: 'Business development, guest relations, events, sales & marketing, operational coordination and customer experience.' },
  { year: '2022 — 2023', role: 'Finance Work Experience Mentee', company: 'PwC · London', text: 'Mentoring, networking and exposure to audit, risk and professional business operations.' },
  { year: '2022 — 2023', role: 'External Assessor', company: 'City of London College · London', text: 'Student mentoring, development planning and employability workshops.' },
  { year: '2018 — 2019', role: 'Business Development Executive', company: 'Plus Business Solutions · Colombo', text: 'Customer needs assessment, relationship management and sales across the product/service portfolio.' },
  { year: '2018', role: 'Tele Business Development Executive', company: 'W. I Tel Solutions · Colombo', text: 'Marketing reports, sales data and campaign development.' },
]

const skills = ['Business Development', 'Sales & Relationship Management', 'Customer Experience', 'Strategic Planning', 'Project Management', 'Stakeholder Engagement', 'Digital Marketing', 'Social Media', 'SEO & Analytics', 'Inventory & Operations', 'Problem Solving', 'MS Office']

const education = [
  ['Master’s in International Business Management', 'University of Greenwich', '2022 — 2024'],
  ['Bachelor’s in International Business Management · First Class Honours', 'University of West London', '2020 — 2021'],
  ['HND in Business Management · Marketing Special', 'Cardiff Metropolitan University', '2016 — 2018'],
]

export default function Home() {
  const [menu, setMenu] = useState(false)
  const [progress, setProgress] = useState(0)
useEffect(() => {
  const reveal = () => {
    const elements = document.querySelectorAll('.reveal')

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()

      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
        el.classList.add('visible')
      }
    })
  }

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight

    setProgress(max > 0 ? window.scrollY / max : 0)

    document.documentElement.style.setProperty(
      '--scroll',
      `${window.scrollY}px`
    )

    reveal()
  }

  const onMove = (e: MouseEvent) => {
    document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
    document.documentElement.style.setProperty('--my', `${e.clientY}px`)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('mousemove', onMove)

  // Only reveal elements currently visible when the page loads
  requestAnimationFrame(reveal)

  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('mousemove', onMove)
  }
}, [])
  const go = (id: string) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return <main>
    <div className="cursorGlow" />
    <div className="progress" style={{ transform: `scaleX(${progress})` }} />

    <nav className="nav">
      <button className="brand" onClick={() => go('top')}>IRSHAD<span>.</span></button>
      <div className={`links ${menu ? 'open' : ''}`}>
        {['about','experience','work','education','contact'].map(x => <button key={x} onClick={() => go(x)}>{x}</button>)}
      </div>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? 'CLOSE' : 'MENU'}</button>
    </nav>

    <section id="top" className="hero section">
      <div className="heroImageWrap reveal"><img className="heroImage" src="/irshad-cinematic-portfolioo/irshad.jpg" alt="Irshad in London" /></div>
      <div className="heroShade" />
      <div className="heroContent">
        <div className="eyebrow reveal">PORTFOLIO · 2026 · LONDON / SRI LANKA</div>
        <div className="heroTitle reveal">
          <span>BUSINESS</span><br/><span className="accent">MEETS</span><br/><span>DIGITAL.</span>
        </div>
        <div className="heroIntro reveal"><p>MOHAMED IRSHAD</p><span>INTERNATIONAL BUSINESS · SALES · CUSTOMER EXPERIENCE</span></div>
      </div>
      <div className="heroBottom reveal">
        <p>7+ YEARS<br/>PROFESSIONAL EXPERIENCE</p>
        <button className="circleBtn" onClick={() => go('about')} aria-label="Scroll to about">↓</button>
        <p className="right">BUILDING BETTER<br/>BUSINESS EXPERIENCES</p>
      </div>
    </section>

    <section id="about" className="section about">
      <div className="sectionLabel reveal">01 / ABOUT</div>
      <div className="aboutGrid">
        <h2 className="reveal">I CONNECT<br/><span className="accent">PEOPLE.</span><br/>BUSINESS.<br/>EXPERIENCE.</h2>
        <div className="aboutCopy reveal">
          <p>Commercially driven business professional with a Master’s degree in International Business Management and First-Class Honours, with 7+ years across business development, sales, operations, hospitality and stakeholder engagement.</p>
          <p>My strength is connecting people, commercial goals and practical execution — with a growing focus on digital experiences and technology.</p>
          <div className="stats"><div><b>7+</b><span>YEARS<br/>EXPERIENCE</span></div><div><b>3</b><span>ACADEMIC<br/>QUALIFICATIONS</span></div><div><b>3</b><span>LANGUAGES<br/>IN PROFILE</span></div></div>
        </div>
      </div>
    </section>

    <section id="experience" className="section experience">
      <div className="sectionLabel reveal">02 / EXPERIENCE</div>
      <h2 className="mega reveal">SELECTED<br/><span className="accent">EXPERIENCE.</span></h2>
      <div className="timeline">{experience.map((item, i) => <article className="experienceRow reveal" key={item.role}>
        <span className="num">0{i + 1}</span><span className="year">{item.year}</span><div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.text}</p></div><span className="arrow">↗</span>
      </article>)}</div>
    </section>

    <section id="work" className="section work">
      <div className="sectionLabel reveal">03 / SELECTED WORK</div>
      <h2 className="mega reveal">THINK.<br/><span className="accent">BUILD.</span><br/>DELIVER.</h2>
      <div className="workGrid">
        <article className="workCard reveal"><span>CASE STUDY 01</span><h3>CSR × CUSTOMER<br/>SATISFACTION</h3><p>Master’s dissertation research examining the impact of corporate social responsibility on customer satisfaction and corporate reputation, with reference to Costco UK.</p><b>INTERNATIONAL BUSINESS · RESEARCH</b></article>
        <article className="workCard dark reveal"><span>CASE STUDY 02</span><h3>CUSTOMER LOYALTY ×<br/>ORGANISATIONAL PERFORMANCE</h3><p>Bachelor’s dissertation exploring how customer loyalty can affect organisational performance, with reference to Dialog Broadband Networks.</p><b>CUSTOMER EXPERIENCE · STRATEGY</b></article>
      </div>
      <div className="githubCard reveal"><div><span>BUILD IN PUBLIC</span><h3>THE NEXT PROJECT<br/><span className="accent">STARTS HERE.</span></h3></div><a href="https://github.com/irshadazka2415" target="_blank" rel="noreferrer">GITHUB ↗</a></div>
    </section>

    <section className="section skills">
      <div className="sectionLabel reveal">04 / CAPABILITIES</div>
      <h2 className="mega reveal">WHAT I<br/><span className="accent">BRING.</span></h2>
      <div className="skillCloud reveal">{skills.map((s, i) => <span key={s} style={{ '--i': i } as React.CSSProperties}>{s}</span>)}</div>
    </section>

    <section id="education" className="section education">
      <div className="sectionLabel reveal">05 / EDUCATION</div>
      <div className="eduList">{education.map(([degree, uni, years], i) => <article className="eduRow reveal" key={degree}><span>0{i + 1}</span><div><h3>{degree}</h3><p>{uni}</p></div><time>{years}</time></article>)}</div>
    </section>

   <section id="contact" className="section contact"> <div className="sectionLabel reveal">06 / GET IN TOUCH</div>

<h2 className="contactTitle reveal"> MOHAMED<br/> <span className="accent">IRSHAD.</span> </h2>

<div className="contactLine reveal"> <a href="mailto:Irshadgck@outlook.com">IRSHADGCK@OUTLOOK.COM</a> <a href="https://github.com/irshadazka2415" target="_blank" rel="noreferrer"> GITHUB ↗ </a> </div>

<footer> <span>IRSHAD.</span> <span>BUSINESS · DIGITAL · EXPERIENCE</span> <span>© 2026</span> </footer> </section>
    </section>
  </main>
}
