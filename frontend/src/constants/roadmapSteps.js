export function getRoadmapSteps(career) {
  return [
    {
      title: 'Choose the right stream',
      description: `Pick ${career.stream} in Class 11-12 to build the right foundation.`,
    },
    {
      title: 'Prepare for entrance exams',
      description: career.entranceExams?.length
        ? `Focus on: ${career.entranceExams.join(', ')}`
        : 'Research relevant entrance exams for this field.',
    },
    {
      title: 'Complete your degree',
      description: `Pursue a relevant undergraduate program aligned with ${career.title}.`,
    },
    {
      title: 'Build core skills',
      description: `Develop: ${career.skills?.join(', ') || 'relevant industry skills'}.`,
    },
    {
      title: 'Get internship experience',
      description: 'Apply for internships in your final year to gain real-world exposure.',
    },
    {
      title: 'Land your first role',
      description: `Start your career as an entry-level ${career.title} and grow from there.`,
    },
  ];
}