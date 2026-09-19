import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import { getSalaryStages } from '../../constants/salaryStages';

function SalaryChart({ career }) {
  const data = getSalaryStages(career);

  return (
    <div>
      <h3 className="font-semibold dark:text-white mb-4">Salary Progression (₹ Lakhs/yr)</h3>
      <div className="w-full h-56 bg-gray-50 dark:bg-surface-darkAlt rounded-xl p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#94a3b833" vertical={false} />
            <XAxis dataKey="level" tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: 8, border: 'none', fontSize: 13 }}
              formatter={(value) => [`₹${value}L`, 'Salary']}
            />
            <Bar dataKey="salary" fill="#7C5CFC" radius={[6, 6, 0, 0]} maxBarSize={60} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalaryChart;