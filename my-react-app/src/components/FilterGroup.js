import LABELS, { GROUP_FIELD } from '../data/labels';

// A row of filter chips, e.g. all the "Topic" buttons.
// Used twice on the Work page: <FilterGroup group="topic" ... /> and <FilterGroup group="skill" ... />.
function FilterGroup({ group, title, stories, selected, onSelect }) {
  const field = GROUP_FIELD[group];

  // Count how many stories use each tag, and skip tags nobody uses.
  const options = Object.keys(LABELS[group])
    .map((value) => ({
      value,
      count: stories.filter((s) => s[field].includes(value)).length,
    }))
    .filter((o) => o.count > 0);

  return (
    <div className="filter-group">
      <span className="filter-label">{title}</span>
      <div className="chips" role="group" aria-label={`Filter by ${group}`}>
        {options.map(({ value, count }) => {
          const on = selected === value;
          return (
            <button
              key={value}
              type="button"
              className={`chip${on ? ' is-active' : ''}`}
              aria-pressed={on}
              onClick={() => onSelect(group, value)}
            >
              <span>{LABELS[group][value]}</span>
              <span className="chip-n">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterGroup;
