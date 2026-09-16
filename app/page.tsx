'use client'

import { useEffect, useState } from 'react'

const experience = [
{
year: '2025—2026',
role: 'Cluster & Meetings Group Sales',
company: 'The Clermont Group',
location: 'London',
},
{
year: '2023—2025',
role: 'Business & Hospitality Operations · MBA Placement',
company: 'Royal Horseguards Hotel',
location: 'London',
},
{
year: '2022—2023',
role: 'Finance Work Experience Mentee',
company: 'PwC',
location: 'London',
},
{
year: '2022—2023',
role: 'External Assessor',
company: 'City of London College',
location: 'London',
},
{
year: '2018—2019',
role: 'Business Development Executive',
company: 'Plus Business Solutions',
location: 'Colombo',
},
{
year: '2018',
role: 'Tele Business Development Executive',
company: 'W. I Tel Solutions',
location: 'Colombo',
},
]

const skills = [
'Business Development',
'Sales & Relationship Management',
'Customer Experience',
'Strategic Planning',
'Project Management',
'Stakeholder Engagement',
'Digital Marketing',
'Social Media',
'SEO & Analytics',
'Inventory & Operations',
'Problem Solving',
'MS Office',
]

const education = [
{
year: '2022—2024',
degree: "Master's in International Business Management",
school: 'University of Greenwich',
},
{
year: '2020—2021',
degree:
"Bachelor's in International Business Management · First Class Honours",
school: 'University of West London',
},
{
year: '2016—2018',
degree: 'HND in Business Management · Marketing Special',
school: 'Cardiff Metropolitan University',
},
]

export default function Home() {
const [menu, setMenu] = useState(false)
const [progress, setProgress] = useState(0)

useEffect(() => {
const elements = document.querySelectorAll('.reveal')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px',
  }
)

elements.forEach((element) => {
  observer.observe(element)
})

const updateProgress = () => {
  const max =
    document.documentElement.scrollHeight -
    window.innerHeight

  setProgress(max > 0 ? window.scrollY / max : 0)

  document.documentElement.style.setProperty(
    '--scroll',
    `${window.scrollY}px`
  )
}

const onMove = (e: MouseEvent) => {
  document.documentElement.style.setProperty(
    '--mx',
    `${e.clientX}px`
  )

  document.documentElement.style.setProperty(
    '--my',
    `${e.clientY}px`
  )
}

window.addEventListener('scroll', updateProgress, {
  passive: true,
})

window.addEventListener('mousemove', onMove)

updateProgress()

return () => {
  observer.disconnect()
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('mousemove', onMove)
}
}, [])

const go = (id: string) => {
setMenu(false)
document.getElementById(id)?.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
})
}

return (
  <main>
<div
className="scrollProgress"
style={{
transform: `scaleX(${progress})`,
}}
/>
  <div className="cursorGlow" />

  <nav className="nav">
    <button
      className="navLogo"
      onClick={() => go('home')}
      aria-label="Go to home"
    >
      IRSHAD<span>.</span>
    </button>

    <div className={`navLinks ${menu ? 'open' : ''}`}>
      <button onClick={() => go('about')}>ABOUT</button>

      <button onClick={() => go('experience')}>
        EXPERIENCE
      </button>

      <button onClick={() => go('work')}>
        WORK
      </button>

      <button onClick={() => go('capabilities')}>
        CAPABILITIES
      </button>

      <button onClick={() => go('education')}>
        EDUCATION
      </button>

      <button onClick={() => go('contact')}>
        CONTACT
      </button>
    </div>

    <button
      className="menuButton"
      onClick={() => setMenu(!menu)}
      aria-label="Toggle menu"
    >
      {menu ? 'CLOSE' : 'MENU'}
    </button>
  </nav>

  <section id="home" className="hero">
    <div className="heroContent">
      <div className="eyebrow reveal">
        PORTFOLIO · 2026 · LONDON / SRI LANKA
      </div>

      <h1 className="heroTitle reveal">
        BUSINESS
        <br />
        <span className="accent">MEETS</span>
        <br />
        DIGITAL.
      </h1>

      <div className="heroBottom reveal">
        <p>
          Mohamed Irshad
          <br />
          International Business · Sales · Customer Experience
        </p>

        <button onClick={() => go('about')}>
          EXPLORE ↓
        </button>
      </div>
    </div>

    <div className="heroImageWrap reveal">
      <img
        className="heroImage"
        src="/portfolio/irshad.jpg"
        alt="Mohamed Irshad"
      />
    </div>
  </section>

  <section id="about" className="section about">
    <div className="sectionLabel reveal">
      01 / ABOUT
    </div>

    <div className="aboutGrid">
      <h2 className="sectionTitle reveal">
        BUILDING
        <br />
        <span className="accent">BUSINESS.</span>
      </h2>

      <div className="aboutText reveal">
        <p>
          International Business professional with experience
          across sales, hospitality, customer experience and
          business development.
        </p>

        <p>
          I bring together commercial thinking, relationship
          management and digital awareness to create practical
          business solutions and memorable customer experiences.
        </p>

        <p>
          My experience spans London and Colombo, working with
          international organisations and customer-facing
          environments.
        </p>
      </div>
    </div>
  </section>

  <section id="experience" className="section experience">
    <div className="sectionLabel reveal">
      02 / EXPERIENCE
    </div>

    <div className="experienceList">
      {experience.map((item, index) => (
        <article
          className="experienceItem reveal"
          key={`${item.company}-${index}`}
        >
          <div className="experienceYear">
            {item.year}
          </div>

          <div className="experienceMain">
            <h3>{item.role}</h3>

            <p>
              {item.company} · {item.location}
            </p>
          </div>

          <div className="experienceNumber">
            {String(index + 1).padStart(2, '0')}
          </div>
        </article>
      ))}
    </div>
  </section>

  <section id="work" className="section work">
    <div className="sectionLabel reveal">
      03 / SELECTED WORK
    </div>

    <div className="workGrid">
      <article className="workCard reveal">
        <div className="workNumber">01</div>

        <div>
          <span>MASTER'S DISSERTATION</span>

          <h3>
            CSR × CUSTOMER
            <br />
            SATISFACTION
          </h3>

          <p>
            Research examining the relationship between
            corporate social responsibility and customer
            satisfaction within Costco UK.
          </p>
        </div>
      </article>

      <article className="workCard reveal">
        <div className="workNumber">02</div>

        <div>
          <span>BACHELOR'S DISSERTATION</span>

          <h3>
            CUSTOMER LOYALTY ×
            <br />
            PERFORMANCE
          </h3>

          <p>
            Research investigating customer loyalty and
            organisational performance within Dialog
            Broadband Networks.
          </p>
        </div>
      </article>
    </div>
  </section>

  <section id="capabilities" className="section capabilities">
    <div className="sectionLabel reveal">
      04 / CAPABILITIES
    </div>

    <div className="capabilitiesGrid">
      <h2 className="sectionTitle reveal">
        WHAT I
        <br />
        <span className="accent">BRING.</span>
      </h2>

      <div className="skillsList">
        {skills.map((skill, index) => (
          <div
            className="skillItem reveal"
            key={skill}
          >
            <span>
              {String(index + 1).padStart(2, '0')}
            </span>

            <strong>{skill}</strong>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="education" className="section education">
    <div className="sectionLabel reveal">
      05 / EDUCATION
    </div>

    <div className="educationList">
      {education.map((item, index) => (
        <article
          className="educationItem reveal"
          key={item.school}
        >
          <div className="educationYear">
            {item.year}
          </div>

          <div className="educationMain">
            <h3>{item.degree}</h3>

            <p>{item.school}</p>
          </div>

          <div className="educationNumber">
            {String(index + 1).padStart(2, '0')}
          </div>
        </article>
      ))}
    </div>
  </section>

  <section id="contact" className="section contact">
    <div className="sectionLabel reveal">
      06 / GET IN TOUCH
    </div>

    <h2 className="contactTitle reveal">
      MOHAMED
      <br />
      <span className="accent">IRSHAD.</span>
    </h2>

    <div className="contactLine reveal">
      <a href="mailto:Irshadgck@outlook.com">
        IRSHADGCK@OUTLOOK.COM
      </a>

      <a
        href="https://github.com/irshadgck"
        target="_blank"
        rel="noreferrer"
      >
        GITHUB ↗
      </a>
    </div>

    <footer>
      <span>IRSHAD.</span>

      <span>
        BUSINESS · DIGITAL · EXPERIENCE
      </span>

      <span>© 2026</span>
    </footer>
  </section>
</main>
)
}
