import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

// Files in public/ are served as-is. PUBLIC_URL makes the path work wherever the site is hosted.
const ASSETS = process.env.PUBLIC_URL + '/assets';

// A featured-work card. If it has a GIF, the GIF only plays while the card is
// hovered (or focused by keyboard); otherwise the still image is shown.
function ProjectCard({ href, still, gif, alt, title, cta, children }) {
  const [playing, setPlaying] = useState(false);

  return (
    <a
      className="project-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setPlaying(true)}
      onMouseLeave={() => setPlaying(false)}
      onFocus={() => setPlaying(true)}
      onBlur={() => setPlaying(false)}
    >
      <div className="project-media">
        {still && <img src={playing ? gif : still} alt={alt} loading="lazy" />}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
      <span className="project-cta">{cta}</span>
    </a>
  );
}

function Home() {
  return (
    <>
      <header className="intro wrap">
        <div className="intro-text">
          <h1>Alanna Robbert</h1>
          <p className="bio">
            I'm a journalism graduate from the University of Florida, where I specialized in data reporting,
            statistics and mapping. I combine coding and traditional reporting to tell stories through
            interactives and visualizations. My work has appeared in The Independent Florida Alligator and WUFT.
          </p>
          <p>
            Click to find my{' '}
            <a href={`${ASSETS}/alanna-robbert-resume.pdf`} target="_blank" rel="noopener noreferrer">
              resume
            </a>{' '}
            and all of my <Link to="/work">published work</Link>.
          </p>
          <SocialLinks />
        </div>
        <img
          className="headshot"
          src={`${ASSETS}/robbert-alanna-headshot.png`}
          alt="Headshot of Alanna Robbert by Noah Lantor"
          width="280"
          height="280"
        />
      </header>

      <section className="featured wrap">
        <h2>Featured work</h2>
        <div className="project-grid">
          <ProjectCard
            href="https://alanna-robbert.github.io/FL-house-reps-directory/"
            still={`${ASSETS}/house-directory-preview.png`}
            gif={`${ASSETS}/house-directory-demo.gif`}
            alt="Screen recording of the Florida House member directory"
            title="Florida House Member Directory"
            cta="Launch app →"
          >
            Searchable database of the Florida House. Filter by party, religion, city, military service and college.
          </ProjectCard>

          <ProjectCard
            href="https://alanna-robbert.github.io/FDEP-pollution-incident-dashboard/"
            still={`${ASSETS}/pollution-dashboard-preview.png`}
            gif={`${ASSETS}/pollution-dashboard-demo.gif`}
            alt="Screen recording of the FL DEP pollution incident dashboard"
            title="FL DEP Pollution Incident Dashboard"
            cta="Launch app →"
          >
            Map, charts and county statistics for incidents in Florida's Pollution Notification Program.
          </ProjectCard>

          <ProjectCard
            href="https://www.wuft.org/2026-04-29/the-global-paraquat-trail"
            title="The Global Paraquat Trail"
            cta="Read story →"
          >
            China and South Korea both ban the herbicide paraquat but export it to the U.S. This story follows its international supply chain.
          </ProjectCard>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
