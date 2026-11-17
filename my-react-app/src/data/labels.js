// Display names for every tag value used in stories.js.
// Filters only show options that at least one piece uses.
const LABELS = {
  topic: {
    campus: 'Campus & education',
    environment: 'Environment & science',
    politics: 'Politics & government',
    health: 'Health',
    justice: 'Crime & justice',
    community: 'Community & culture',
    arts: 'Arts & entertainment',
    transit: 'Transportation',
    economy: 'Economy',
  },
  skill: {
    data: 'Data analysis',
    viz: 'Data visualization',
    mapping: 'Mapping',
    webdev: 'Web development',
    investigative: 'Investigative',
    features: 'Feature writing',
    news: 'News reporting',
    reviews: 'Reviews',
  },
};

// Each filter group ("topic") maps to a field on a story ("topics").
export const GROUP_FIELD = { topic: 'topics', skill: 'skills' };

export default LABELS;
