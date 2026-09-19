// Rough parser: takes "₹6L - ₹40L/yr" style string and builds entry/mid/senior stages
export function getSalaryStages(career) {
  const numbers = career.salaryRange.match(/\d+/g)?.map(Number) || [3, 10, 20];
  const min = numbers[0] || 3;
  const max = numbers[1] || min * 3;
  const mid = Math.round((min + max) / 2);

  return [
    { level: 'Entry', salary: min },
    { level: 'Mid', salary: mid },
    { level: 'Senior', salary: max },
  ];
}