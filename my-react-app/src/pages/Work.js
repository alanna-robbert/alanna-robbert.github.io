import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import stories from '../data/stories';
import LABELS, { GROUP_FIELD } from '../data/labels';
import StoryCard from '../components/StoryCard';
import FilterGroup from '../components/FilterGroup';
import Footer from '../components/Footer';

// Text a search can match: title, publication, description and tag names.
function searchText(story) {
  const tagNames = [
    ...story.topics.map((v) => LABELS.topic[v] || v),
    ...story.skills.map((v) => LABELS.skill[v] || v),
  ];
  return [story.title, story.pub, story.displayDate, story.desc, ...tagNames].join(' ').toLowerCase();
}

function Work() {
  // "State" is data that can change while the page is open. When it changes,
  // React re-runs this function and updates the screen to match.
  // Here the state lives in the address bar (?q=...&topic=...&skill=...),
  // so a filtered view can still be shared as a link.
  const [params, setParams] = useSearchParams();
  const workRef = useRef(null);

  const q = params.get('q') || '';
  const active = {
    topic: LABELS.topic[params.get('topic')] ? params.get('topic') : null,
    skill: LABELS.skill[params.get('skill')] ? params.get('skill') : null,
  };

  useEffect(() => {
    document.title = 'Alanna Robbert';
  }, []);

  function update(changes) {
    const next = new URLSearchParams(params);
    Object.entries(changes).forEach(([key, value]) => {
      if (value) next.set(key, value);
      else next.delete(key);
    });
    setParams(next, { replace: true });
  }

  // Clicking the chip that's already on turns it off.
  function toggleFilter(group, value) {
    update({ [group]: active[group] === value ? null : value });
  }

  function clearAll() {
    update({ q: null, topic: null, skill: null });
  }

  // Work out which stories to show. Nothing is hidden or shown by hand.
  // We describe the list we want, and React draws it.
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  const shown = stories.filter(
    (story) =>
      ['topic', 'skill'].every((g) => !active[g] || story[GROUP_FIELD[g]].includes(active[g])) &&
      terms.every((t) => searchText(story).includes(t))
  );

  const filtering = Boolean(q || active.topic || active.skill);

  return (
    <>
      {/* With HashRouter, href="#work" would be read as a page address,
          so this link moves keyboard focus to the list itself. */}
      <a
        className="skip-link"
        href="#work"
        onClick={(e) => {
          e.preventDefault();
          workRef.current.focus();
        }}
      >
        Skip to work
      </a>

      <nav className="topbar wrap" aria-label="Site">
        <span className="topbar-name">Alanna Robbert</span>
        <Link className="topbar-home" to="/" aria-label="Home">
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>
      </nav>

      <main id="work" className="wrap" ref={workRef} tabIndex={-1}>
        <div className="work-head">
          <h1>Work</h1>
          <p className="result-count" aria-live="polite">
            {filtering ? `Showing ${shown.length} of ${stories.length}` : `${stories.length} pieces`}
          </p>
        </div>

        <div className="controls">
          <label className="search">
            <span className="visually-hidden">Search work</span>
            <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18">
              <circle cx="8.5" cy="8.5" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M13 13l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="Search stories, topics, publications…"
              autoComplete="off"
              value={q}
              onChange={(e) => update({ q: e.target.value })}
            />
          </label>

          <FilterGroup group="topic" title="Topic" stories={stories} selected={active.topic} onSelect={toggleFilter} />
          <FilterGroup group="skill" title="Skill" stories={stories} selected={active.skill} onSelect={toggleFilter} />

          {filtering && (
            <button type="button" className="clear" onClick={clearAll}>Clear filters</button>
          )}
        </div>

        <section className="item-list" aria-label="Stories">
          {shown.map((story) => (
            <StoryCard
              key={story.url}
              story={story}
              active={active}
              onTagClick={(group, value) => {
                toggleFilter(group, value);
                workRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          ))}
        </section>

        {shown.length === 0 && (
          <div className="empty">
            <p>Nothing matches those filters.</p>
            <button type="button" className="clear" onClick={clearAll}>Clear filters</button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Work;
