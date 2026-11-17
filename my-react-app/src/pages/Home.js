import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

// Files in public/ are served as-is. PUBLIC_URL makes the path work wherever the site is hosted.
const ASSETS = process.env.PUBLIC_URL + '/assets';

function Home() {
  // The demo GIF only plays while the card is hovered (or focused by keyboard).
  const [playing, setPlaying] = useState(false);

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
          <a
            className="project-card"
            onMouseEnter={() => setPlaying(true)}
            onMouseLeave={() => setPlaying(false)}
            onFocus={() => setPlaying(true)}
            onBlur={() => setPlaying(false)}
            href="https://alannafitzrobbert.com/hw-agents/index.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-media">
              <img
                src={`${ASSETS}/house-directory-${playing ? 'demo.gif' : 'preview.png'}`}
                alt="Screen recording of the Florida House member directory"
                loading="lazy"
              />
            </div>
            <h3>Florida House Member Directory</h3>
            <p>Searchable database of the Florida House. Filter by party, religion, city, military service and college.</p>
            <span className="project-cta">Launch app →</span>
          </a>

          <a
            className="project-card"
            href="https://alannafitzrobbert.com/final/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-media"></div>
            <h3>FL DEP Pollution Incident Dashboard</h3>
            <p>Map, charts and county statistics for incidents in Florida's Pollution Notification Program.</p>
            <span className="project-cta">Launch app →</span>
          </a>

          <Link className="project-card" to="/work">
            <div className="project-media"></div>
            <h3>Published work</h3>
            <p>Stories and data reporting from The Independent Florida Alligator and WUFT.</p>
            <span className="project-cta">See all work →</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
