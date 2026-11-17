import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

// Files in public/ are served as-is. PUBLIC_URL makes the path work wherever the site is hosted.
const ASSETS = process.env.PUBLIC_URL + '/assets';

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
            Click to find my{' '}
            <a href={`${ASSETS}/alanna-robbert-resume.pdf`} target="_blank" rel="noopener noreferrer">
              resume
            </a>{' '}
            and <Link to="/work">all of my published work</Link>.
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
        <a
          className="project-card"
          href="https://alannafitzrobbert.com/hw-agents/index.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-media">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={`${ASSETS}/house-directory-preview.png`}
              aria-label="Screen recording of the Florida House member directory"
            >
              <source src={`${ASSETS}/house-directory-demo.mp4`} type="video/mp4" />
            </video>
          </div>
          <h3>Florida House of Representatives Member Directory</h3>
          <p>
            Searchable database of the Florida House for the 2024–2026 session. Filter by party, religion,
            city, military service, hobbies and college.
          </p>
          <span className="project-cta">Launch app →</span>
        </a>
      </section>

      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
