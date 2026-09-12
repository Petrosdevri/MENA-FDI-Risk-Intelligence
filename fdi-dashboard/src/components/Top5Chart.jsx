import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { countries, groupColors } from '../data/fdiData';

const FlagTick = ({ x, y, payload }) => {
  const country = countries.find((c) => c.name === payload.value);

  const FLAG_X = -170;
  const FLAG_W = 22;
  const FLAG_H = 16;
  const GAP = 8;
  const TEXT_X = FLAG_X + FLAG_W + GAP;

  return (
    <g transform={`translate(${x},${y})`}>
      <image
        href={`https://flagcdn.com/w40/${country?.iso}.png`}
        x={FLAG_X}
        y={-FLAG_H / 2}
        width={FLAG_W}
        height={FLAG_H}
        preserveAspectRatio="xMidYMid slice"
      />
      <text
        x={TEXT_X}
        y={4}
        textAnchor="start"
        fill="var(--text-dark)"
        fontSize={12}
      >
        {payload.value}
      </text>
    </g>
  );
};

function Top5Chart() {
  const data = countries.slice(0, 5).map((c) => ({
    ...c,
    fill: groupColors[c.group],
  }));

  const legendItems = [
    { label: 'Oil-Producing',       color: groupColors.oil },
    { label: 'Diversified Economy', color: groupColors.diversified },
    { label: 'Macro Challenges',    color: groupColors['macro-challenged'] },
    { label: 'Fragile',             color: groupColors.fragile },
  ];

  return (
    <section className="top-stats flex flex-col gap-5 border border-none rounded-xl p-5 shadow-sm text-dark text-start">
      <div>
        <h3 className="text-sm font-medium uppercase tracking-wider mb-1 text-headline">
          Top 5 Destinations
        </h3>
        <p className="text-xs text-dark">Highest composite FDI attractiveness</p>
      </div>

      <div className="w-full h-full flex flex-col">
        <div className="h-75 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" barSize={20}>
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="var(--text-dark)"
              />
              <XAxis
                type="number"
                domain={[0, 100]}
                stroke="var(--text-dark)"
                fontSize={12}
                tickFormatter={(v) => `${v}`}
              />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                width={180}
                tick={<FlagTick />}
              />
              <Tooltip
                cursor={{ fill: 'var(--text-dark)', opacity: 0.4 }}
                contentStyle={{
                  backgroundColor: 'var(--bg-alternate)',
                  borderColor: 'var(--text-dark)',
                  borderRadius: '6px',
                  color: 'var(--text)',
                }}
                itemStyle={{ color: 'var(--text)', fontWeight: 'bold' }}
                formatter={(value) => [
                  <span className="font-mono">{value.toFixed(1)}</span>,
                ]}
              />
              <Bar
                dataKey="fdiScore"
                radius={[0, 4, 4, 0]}
                animationDuration={1500}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Top5Chart;