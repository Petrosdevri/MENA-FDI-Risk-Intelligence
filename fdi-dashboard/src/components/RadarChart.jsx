import React, { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { countries, groupColors } from '../data/fdiData';
import { ChevronDown } from 'lucide-react';

function CountrySelect({
  value,
  onChange,
  dir,
  lang,
}) {
  const country = countries.find(c => c.iso === value);
  const flagSide  = 'left-2.5';
  const arrowSide = 'right-2';
  const innerPad  = 'pl-9';

  return (
    <div className="flex-1 relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`country-select w-full appearance-none border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${innerPad} cursor-pointer`}
      >
        {countries.map(c => (
          <option key={c.iso} value={c.iso}>
            {c.name}
          </option>
        ))}
      </select>
      <img
        src={`https://flagcdn.com/w40/${country.iso}.png`}
        alt=""
        className={`absolute ${flagSide} top-1/2 -translate-y-1/2 w-4 h-3 rounded-[1px] object-cover`}
      />
      <ChevronDown className={`absolute ${arrowSide} top-1/2 -translate-y-1/2 w-4 h-4 text-dark pointer-events-none`} />
    </div>
  );
}

function CountryRadarChart() {
  const [country1Iso, setCountry1Iso] = useState('ae');
  const [country2Iso, setCountry2Iso] = useState('ma');

  const c1 = countries.find(c => c.iso === country1Iso);
  const c2 = countries.find(c => c.iso === country2Iso);

  const data = [
    { subject: 'Market Size',   A: c1.ms,     B: c2.ms,     fullMark: 100 },
    { subject: 'Resources',    A: c1.nra,    B: c2.nra,    fullMark: 100 },
    { subject: 'Institutions', A: c1.inst,   B: c2.inst,   fullMark: 100 },
    { subject: 'Policy',       A: c1.policy, B: c2.policy, fullMark: 100 },
    { subject: 'Risk',         A: c1.risk,   B: c2.risk,   fullMark: 100 },
  ];

  const color1 = groupColors[c1.group];
  const color2 = groupColors[c2.group];

  const c1Name = c1.name;
  const c2Name = c2.name;

  return (
    <section className='radar-chart-select flex flex-col gap-5 border border-none rounded-xl p-5 shadow-sm text-dark text-start'>
        <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-1 text-headline">Bilateral Comparison</h3>
            <p className="text-xs text-dark">Sub-component breakdown visualization</p>
        </div>
      <div className="w-full flex flex-col h-full">
        <div className="flex items-center justify-between mb-4 gap-4">
          <CountrySelect value={country1Iso} onChange={setCountry1Iso} />
          <span className="text-xs text-dark font-medium uppercase tracking-widest shrink-0">
            VS
          </span>
          <CountrySelect value={country2Iso} onChange={setCountry2Iso} />
        </div>

        <div className="h-65 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: 'var(--text-dark)', fontSize: 11 }}
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--bg-alternate)',
                  borderColor: 'var(--text-dark)',
                  borderRadius: '6px'
                }}
                itemStyle={{ fontWeight: 'bold', fontFamily: 'monospace' }}
                formatter={(value, name) => {
                  if (name === 'A') return [value, c1Name];
                  if (name === 'B') return [value, c2Name];
                  return [value, name];
                }}
              />
              <Radar name="A" dataKey="A" stroke={color1} fill={color1} fillOpacity={0.3} />
              <Radar name="B" dataKey="B" stroke={color2} fill={color2} fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex justify-between px-4 border-t border-border pt-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: color1 }} />
              <span className="text-sm font-medium">{c1Name}</span>
            </div>
            <span className="text-2xl font-mono text-primary mt-1">{c1.fdiScore.toFixed(1)}</span>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: color2 }} />
              <span className="text-sm font-medium">{c2Name}</span>
            </div>
            <span className="text-2xl font-mono text-primary mt-1">{c2.fdiScore.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryRadarChart;