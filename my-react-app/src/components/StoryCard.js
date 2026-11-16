import LABELS from '../data/labels';

// Shows one story. It receives everything it needs as "props":
//   story        – one object from stories.js
//   active       – which topic/skill filters are on, so its tags can light up
//   onTagClick   – a function to call when one of its tags is clicked
// StoryCard doesn't know or care how filtering works. It only displays and reports clicks.
function StoryCard({ story, active, onTagClick }) {
  const tags = [
    ...story.topics.map((value) => ({ group: 'topic', value })),
    ...story.skills.map((value) => ({ group: 'skill', value })),
  ];

  return (
    <article className="item">
      <a className="item-link" href={story.url} target="_blank" rel="noopener noreferrer">
        <p className="item-meta">
          <span className="pub">{story.pub}</span>
          <time dateTime={story.date}>{story.displayDate}</time>
        </p>
        <h3>{story.title}</h3>
        <p className="desc">{story.desc}</p>
      </a>

      <ul className="tags">
        {tags.map(({ group, value }) => {
          const label = LABELS[group][value] || value;
          const isActive = active[group] === value;
          return (
            <li key={group + value}>
              <button
                type="button"
                className={`tag tag-${group}${isActive ? ' is-active' : ''}`}
                aria-label={`Show all ${label} work`}
                onClick={() => onTagClick(group, value)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default StoryCard;
