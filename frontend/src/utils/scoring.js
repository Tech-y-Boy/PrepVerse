export function calculateResult(answers, careers) {
  // answers = array of selected option objects, each has `tags: []`
  const tagScores = {};

  answers.forEach((option) => {
    option.tags.forEach((tag) => {
      tagScores[tag] = (tagScores[tag] || 0) + 1;
    });
  });

  const scoredCareers = careers.map((career) => {
    const matchCount = career.tags.filter((tag) => tagScores[tag]).length;
    const matchScore = career.tags.reduce((sum, tag) => sum + (tagScores[tag] || 0), 0);
    return { ...career, matchPercent: Math.min(100, Math.round((matchScore / (answers.length || 1)) * 40) + matchCount * 10) };
  });

  scoredCareers.sort((a, b) => b.matchPercent - a.matchPercent);

  const topTags = Object.entries(tagScores).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([tag]) => tag);

  return {
    topCareers: scoredCareers.slice(0, 6),
    topTags,
  };
}