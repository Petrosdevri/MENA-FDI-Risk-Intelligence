import { countries, groupColors } from "../../data/fdiData";

function FullStanding() {
    return (
        <section className='full-standing flex flex-col'>
            <div className='text-start'>
                <h1 className="font-medium tracking-wider mb-1 text-headline">Bilateral Comparison</h1>
                <p className="text-xs text-dark">Sub-component breakdown visualization</p>
            </div>
            <div className='overflow-x-auto'>
                <table className="standing-table w-full text-sm text-start">
                    <thead className="standing-head text-xs text-dark uppercase border-b border-border">
                        <tr>
                            <th className="px-4 py-3 font-medium w-12 text-center">Rnk</th>
                            <th className="px-4 py-3 font-medium">Country</th>
                            <th className="px-4 py-3 font-medium w-40">Group</th>
                            <th className="px-4 py-3 font-medium w-48">FDI Score</th>
                            <th className="px-4 py-3 font-medium">
                                <div className="flex items-center justify-between text-[10px] space-x-1">
                                    <span className="w-8 text-center" title="Market Size">MS</span>
                                    <span className="w-8 text-center" title="Natural Resources">NRA</span>
                                    <span className="w-8 text-center" title="Institutions">INST</span>
                                    <span className="w-8 text-center" title="Policy">POL</span>
                                    <span className="w-8 text-center" title="Political Risk">RSK</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country, idx) => {
                            const rank = idx + 1;
                            const groupColor = groupColors[country.group] || '#6b7280';

                            const renderMetric = (value) => {
                                const height = Math.min(Math.max(value, 0), 100);
                                return (
                                    <div className="w-full h-8 bg-secondary rounded-sm flex items-end justify-center pb-px relative overflow-hidden">
                                        <div className="w-full absolute bottom-0 left-0 right-0 opacity-70" style={{ height: `${height}%`, backgroundColor: groupColor }} />
                                        <span className="relative z-10 text-[9px] font-mono text-white mix-blend-difference leading-none mb-1">
                                            {value}
                                        </span>
                                    </div>
                                );
                            };

                            return (
                                <tr className='standing d-flex text-center' key={country.iso} style={{ borderLeft: `3px solid ${groupColor}`, backgroundColor: `${groupColor}08` }}>
                                    <td className="px-4 py-3 text-center font-mono text-muted-foreground">{rank}</td>
                                    <td className='px-4 py-3'>
                                        <div className="flex items-center space-x-3">
                                            <img src={`https://flagcdn.com/w40/${country.iso}.png`} alt="" className='w-6 h-4 object-cover rounded-xs shadow-sm border border-white/10' loading="lazy" />
                                            <div className='text-headline'>{country.name}</div>
                                        </div>
                                    </td>
                                    <td className='px-4 py-3'>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border" style={{ backgroundColor: `${groupColor}15`, color: groupColor, borderColor: `${groupColor}30` }}>{country.groupLabel}</span>
                                    </td>
                                    <td className='px-4 py-3'>{country.fdiScore.toFixed(1)}
                                        <div className="flex items-center space-x-3">
                                            <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                                                <div className="h-full rounded-full" style={{
                                                    width: `${country.fdiScore}%`,
                                                    backgroundColor: groupColor
                                                }}/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-between space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                        {[
                                            { val: country.ms,     label: 'MS'   },
                                            { val: country.nra,    label: 'NRA'  },
                                            { val: country.inst,   label: 'INST' },
                                            { val: country.policy, label: 'POL'  },
                                            { val: country.risk,   label: 'RSK'  }
                                        ].map((sub, i) => (
                                            <div key={i} className="flex flex-col items-center w-8 group/tt relative">
                                                <div className="w-full h-8 bg-secondary rounded-sm flex items-end justify-center pb-px relative overflow-hidden">
                                                    <div
                                                    className="w-full absolute bottom-0 left-0 right-0 opacity-70"
                                                    style={{
                                                        height: `${sub.val}%`,
                                                        backgroundColor: groupColor
                                                    }}
                                                    />
                                                    <span className="relative z-10 text-[9px] font-mono text-white mix-blend-difference leading-none mb-1">
                                                        {sub.val}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                    </td>
                                </tr> 
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default FullStanding;