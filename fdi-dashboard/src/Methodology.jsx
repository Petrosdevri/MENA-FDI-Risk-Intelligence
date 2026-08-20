import Header from './components/Header'
import './App.css'

function Methodology() {
    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto px-6 py-10 space-y-10 pb-16">
                <section>
                    <div className="flex items-center gap-3 mb-5 primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical w-5 h-5 primary" aria-hidden="true"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
                        <h2 className="text-sm font-bold uppercase tracking-widest primary">Model Overview</h2>
                    </div>
                    <div className="meth-overview bg-card border border-border rounded-xl p-7">
                        <p className="text-sm text-dark leading-relaxed mb-6">This dashboard operationalises the gravity-model framework for FDI determinants, grounded in the empirical literature on MENA-region investment flows. The composite score for each country i at time t is derived from a multi-factor panel regression specification:</p>
                        <div className="bg-background border border-border rounded-lg px-6 py-4 font-mono text-sm text-center text-foreground mb-6 overflow-x-auto" dir="ltr">
                            FDI
                            <sub className="text-xs">it</sub>&nbsp; = &nbsp;α &nbsp;+&nbsp; β₁(MS)
                            <sub className="text-xs">it</sub> &nbsp;+&nbsp; β₂(NRA)
                            <sub className="text-xs">it</sub> &nbsp;+&nbsp; β₃(INST)
                            <sub className="text-xs">it</sub> &nbsp;+&nbsp; β₄(POLICY)
                            <sub className="text-xs">it</sub> &nbsp;+&nbsp; β₅(RISK)
                            <sub className="text-xs">it</sub> &nbsp;+&nbsp; ε
                            <sub className="text-xs">it</sub>
                        </div>
                        <p className="text-sm text-dark leading-relaxed">Each of the five constructs (MS, NRA, INST, POLICY, RISK) is itself a normalised composite of three World Bank indicators, rescaled to a common 0–100 range where higher values always indicate greater FDI attractiveness. Equal weights (β = 0.20) are applied to each construct. The final FDI score is the arithmetic mean of all five sub-scores. Data coverage: 2022–2023, sourced from the World Bank World Development Indicators (WDI) and Worldwide Governance Indicators (WGI).</p>
                    </div>
                </section>
                <section>
                    <div className="flex items-center gap-3 mb-5 primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-5 h-5 primary" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                        <h2 className="text-sm font-bold uppercase tracking-widest primary">Construct Definitions &amp; Indicators</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-blue-400/30 bg-blue-400/5 rounded-xl p-6">
                            <div className="flex flex-wrap items-baseline gap-3 mb-3">
                                <span className="font-mono text-xs font-bold text-blue-400 bg-black/20 px-2 py-0.5 rounded" dir="ltr">β₁(MS)</span>
                                <span className="text-base font-semibold text-blue-400">Market Size</span>
                            </div>
                            <p className="text-sm text-dark leading-relaxed mb-4">Larger, faster-growing economies with open trade regimes offer more opportunities for economies of scale, broader consumer bases, and export-platform strategies — all primary FDI pull factors.</p>
                            <div className="border-t border-white/5 pt-4">
                                <div className="text-[10px] uppercase tracking-widest text-dark mb-2">Indicator Sources</div>
                                <div className="space-y-1.5">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">GDP per capita (current USD)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WDI — NY.GDP.PCAP.CD</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Population growth (annual %)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WDI — SP.POP.GROW</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Trade openness (% of GDP)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WDI — NE.TRD.GNFS.ZS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-amber-400/30 bg-amber-400/5 rounded-xl p-6">
                        <div className="flex flex-wrap items-baseline gap-3 mb-3">
                            <span className="font-mono text-xs font-bold text-amber-400 bg-black/20 px-2 py-0.5 rounded" dir="ltr">β₂(NRA)</span>
                            <span className="text-base font-semibold text-amber-400">Natural Resource Availability</span>
                        </div>
                        <p className="text-sm text-dark leading-relaxed mb-4">Resource endowments attract resource-seeking FDI. In the MENA context, hydrocarbon revenues remain the dominant driver for Gulf states, while mineral exports (phosphates, potash) are relevant for Morocco and Jordan.</p>
                        <div className="border-t border-white/5 pt-4">
                            <div className="text-[10px] uppercase tracking-widest text-dark mb-2">Indicator Sources</div>
                                <div className="space-y-1.5">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Oil rents (% of GDP)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WDI — NY.GDP.PETR.RT.ZS</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Natural gas rents (% of GDP)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WDI — NY.GDP.NGAS.RT.ZS</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Mineral rents (% of GDP)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WDI — NY.GDP.MINR.RT.ZS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-emerald-400/30 bg-emerald-400/5 rounded-xl p-6">
                            <div className="flex flex-wrap items-baseline gap-3 mb-3">
                                <span className="font-mono text-xs font-bold text-emerald-400 bg-black/20 px-2 py-0.5 rounded" dir="ltr">β₃(INST)</span>
                                <span className="text-base font-semibold text-emerald-400">Institutional Factors</span>
                            </div>
                            <p className="text-sm text-dark leading-relaxed mb-4">Strong institutions reduce transaction costs, protect property rights, and enforce contracts — all critical for investor confidence. Weak governance raises the cost of doing business and increases the risk of expropriation.</p>
                            <div className="border-t border-white/5 pt-4">
                                <div className="text-[10px] uppercase tracking-widest text-dark mb-2">Indicator Sources</div>
                                <div className="space-y-1.5">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Control of Corruption (percentile rank)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WGI — CC.PER.RNK</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Rule of Law (percentile rank)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WGI — RL.PER.RNK</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Voice &amp; Accountability (percentile rank)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WGI — VA.PER.RNK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-violet-400/30 bg-violet-400/5 rounded-xl p-6">
                            <div className="flex flex-wrap items-baseline gap-3 mb-3">
                                <span className="font-mono text-xs font-bold text-violet-400 bg-black/20 px-2 py-0.5 rounded" dir="ltr">β₄(POLICY)</span>
                                <span className="text-base font-semibold text-violet-400">Policy Factors</span>
                            </div>
                            <p className="text-sm text-dark leading-relaxed mb-4">Macroeconomic stability signals policy credibility. High or volatile inflation erodes returns, unstable exchange rates introduce repatriation risk, and elevated real interest rates crowd out investment. Pegged-currency Gulf states score favorably on exchange-rate stability.</p>
                            <div className="border-t border-white/5 pt-4">
                                <div className="text-[10px] uppercase tracking-widest text-dark mb-2">Indicator Sources</div>
                                <div className="space-y-1.5">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Inflation, consumer prices (annual %)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WDI — FP.CPI.TOTL.ZG</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Official exchange rate (LCU per USD)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WDI — PA.NUS.FCRF</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Real interest rate (%)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WDI — FR.INR.RINR</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-rose-400/30 bg-rose-400/5 rounded-xl p-6">
                            <div className="flex flex-wrap items-baseline gap-3 mb-3">
                                <span className="font-mono text-xs font-bold text-rose-400 bg-black/20 px-2 py-0.5 rounded" dir="ltr">β₅(RISK)</span>
                                <span className="text-base font-semibold text-rose-400">Political Risk</span>
                            </div>
                            <p className="text-sm text-dark leading-relaxed mb-4">Political instability is the most cited deterrent to FDI in academic literature. Conflict-affected states (Syria, Yemen, Libya) record near-zero scores, making them virtually uninvestable regardless of natural resource endowments.</p>
                            <div className="border-t border-white/5 pt-4">
                                <div className="text-[10px] uppercase tracking-widest text-dark mb-2">Indicator Sources</div>
                                <div className="space-y-1.5">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Political Stability &amp; Absence of Violence (percentile rank)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WGI — PV.PER.RNK</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Absence of Terrorism (percentile rank)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WGI — PV.PER.RNK</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                                        <span className="text-foreground/80 font-medium min-w-0">Government Effectiveness (percentile rank)</span>
                                        <span className="font-mono text-dark-60 text-[10px] shrink-0" dir="ltr">World Bank WGI — GE.PER.RNK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex items-center gap-3 mb-5 primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-5 h-5 primary" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                        <h2 className="text-sm font-bold uppercase tracking-widest primary">Country Classification</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-xl p-5 bg-amber-400/10 border-amber-400/40 text-amber-300">
                            <div className="font-semibold text-sm mb-1">Oil-Producing</div>
                            <div className="font-mono text-xs opacity-70 mb-3">Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman</div>
                            <p className="text-xs opacity-80 leading-relaxed">High NRA scores; FDI driven by sovereign-linked megaprojects and energy sector diversification (Vision 2030, QNV 2030).</p>
                        </div>
                        <div className="border rounded-xl p-5 bg-emerald-400/10 border-emerald-400/40 text-emerald-300">
                            <div className="font-semibold text-sm mb-1">Diversified Economies &amp; Industrial Hubs</div>
                            <div className="font-mono text-xs opacity-70 mb-3">Morocco, Egypt, Jordan</div>
                            <p className="text-xs opacity-80 leading-relaxed">Moderate across all dimensions. FDI attracted by manufacturing, tourism, and proximity to European markets.</p>
                        </div>
                        <div className="border rounded-xl p-5 bg-rose-400/10 border-rose-400/40 text-rose-300">
                            <div className="font-semibold text-sm mb-1">Fragile / Conflict-Affected</div>
                            <div className="font-mono text-xs opacity-70 mb-3">Iraq, Syria, Palestine, Libya, Lebanon, Yemen</div>
                            <p className="text-xs opacity-80 leading-relaxed">Severely depressed INST and RISK scores. Any resource-seeking FDI is structurally constrained by security conditions.</p>
                        </div>
                        <div className="border rounded-xl p-5 bg-violet-400/10 border-violet-400/40 text-violet-300">
                            <div className="font-semibold text-sm mb-1">Macroeconomic Challenges</div>
                            <div className="font-mono text-xs opacity-70 mb-3">Algeria, Tunisia</div>
                            <p className="text-xs opacity-80 leading-relaxed">Policy scores suppressed by currency controls, subsidy distortions, and fiscal pressures. Reform trajectories are the key variable.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex items-center gap-3 mb-5 primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-5 h-5 primary" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                        <h2 className="text-sm font-bold uppercase tracking-widest primary">References</h2>
                    </div>
                    <div className="bg-card border border-border rounded-xl divide-y divide-border">
                        <div className="px-7 py-5" dir="ltr">
                            <div className="flex gap-4">
                                <span className="font-mono text-xs text-dark-50 mt-0.5 shrink-0 select-none">[1]</span>
                                <p className="text-sm text-dark leading-relaxed">Abdelkarim, J., Abid, I., &amp; Guesmi, K. (2012). Determinants effects of foreign direct investment in Middle East and North Africa Region: Panel cointegration analysis. <em>SSRN Electronic Journal.</em>  
                                    <a href="https://doi.org/10.2139/ssrn.2071187" target="_blank" rel="noopener noreferrer" className="primary hover:underline font-mono text-xs break-all">https://doi.org/10.2139/ssrn.2071187</a>
                                </p>
                            </div>
                        </div>
                        <div className="px-7 py-5" dir="ltr">
                            <div className="flex gap-4">
                                <span className="font-mono text-xs text-dark-50 mt-0.5 shrink-0 select-none">[2]</span>
                                <p className="text-sm text-dark leading-relaxed">Chan, K. K., &amp; Gemayel, E. R. (2004). Risk instability and the pattern of foreign direct investment in the Middle East and North Africa region. <em>IMF Working Paper No. 04/139.</em> 
                                    <a href="https://www.imf.org/-/media/websites/imf/imported-full-text-pdf/external/pubs/ft/wp/2004/_wp04139.pdf" target="_blank" rel="noopener noreferrer" className="primary hover:underline font-mono text-xs break-all">https://www.imf.org/-/media/websites/imf/imported-full-text-pdf/external/pubs/ft/wp/2004/_wp04139.pdf</a>
                                </p>
                            </div>
                        </div>
                        <div className="px-7 py-5" dir="ltr">
                            <div className="flex gap-4">
                                <span className="font-mono text-xs text-dark-50 mt-0.5 shrink-0 select-none">[3]</span>
                                <p className="text-sm text-dark leading-relaxed">FDI in the MENA Region: Factors that hinder or favour investments in the region. (n.d.). In <em>www.iemed.org</em>. Retrieved July 19, 2026, from 
                                    <a href="https://www.iemed.org/publication/fdi-in-the-mena-region-factors-that-hinder-or-favour-investments-in-the-region/" target="_blank" rel="noopener noreferrer" className="primary hover:underline font-mono text-xs break-all">https://www.iemed.org/publication/fdi-in-the-mena-region-factors-that-hinder-or-favour-investments-in-the-region/</a>
                                </p>
                            </div>
                        </div>
                        <div className="px-7 py-5" dir="ltr">
                            <div className="flex gap-4">
                                <span className="font-mono text-xs text-dark-50 mt-0.5 shrink-0 select-none">[4]</span>
                                <p className="text-sm text-dark leading-relaxed">Jelili, R. B. (2023). How does political risk matter for foreign direct investment into Arab economies? <em>Middle East Development Journal, 15</em>(2), 291–310. 
                                    <a href="https://doi.org/10.1080/17938120.2023.2254190" target="_blank" rel="noopener noreferrer" className="primary hover:underline font-mono text-xs break-all">https://doi.org/10.1080/17938120.2023.2254190</a>
                                </p>
                            </div>
                        </div>
                        <div className="px-7 py-5" dir="ltr">
                            <div className="flex gap-4">
                                <span className="font-mono text-xs text-dark-50 mt-0.5 shrink-0 select-none">[5]</span>
                                <p className="text-sm text-dark leading-relaxed">Middle East and North Africa Investment Policy Perspectives. (n.d.). Retrieved July 19, 2026, from <em></em>  
                                    <a href="https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/03/middle-east-and-north-africa-investment-policy-perspectives_eed61198/6d84ee94-en.pdf" target="_blank" rel="noopener noreferrer" className="primary hover:underline font-mono text-xs break-all">https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/03/middle-east-and-north-africa-investment-policy-perspectives_eed61198/6d84ee94-en.pdf</a>
                                </p>
                            </div>
                        </div>
                        <div className="px-7 py-5" dir="ltr">
                            <div className="flex gap-4">
                                <span className="font-mono text-xs text-dark-50 mt-0.5 shrink-0 select-none">[6]</span>
                                <p className="text-sm text-dark leading-relaxed">Nazzal, A., Sánchez Rebull, M. V., &amp; Niñerola, A. (2026). Determinants of foreign direct investment in the Middle East and North Africa Region: Evidence from balanced panel data analysis. <em>Sage Open, 16</em>(2). 
                                    <a href="https://doi.org/10.1177/21582440261431268" target="_blank" rel="noopener noreferrer" className="primary hover:underline font-mono text-xs break-all">https://doi.org/10.1177/21582440261431268</a>
                                </p>
                            </div>
                        </div>
                        <div className="px-7 py-4" dir="ltr">
                            <p className="text-xs text-dark italic">Additional data: World Bank World Development Indicators (WDI) &amp; Worldwide Governance Indicators (WGI), 2022–2023. Retrieved from 
                                <a href="https://data.worldbank.org" target="_blank" rel="noopener noreferrer" className="primary hover:underline font-mono">https://data.worldbank.org</a>
                            </p>
                        </div>
                    </div>
                </section>
                <div className="border border-border/40 rounded-xl p-5 bg-card/40">
                    <div className="text-[10px] uppercase tracking-widest text-dark mb-2">Methodological Notes</div>
                    <ul className="text-xs text-dark-50 space-y-1.5 list-disc list-inside">
                        <li>Sub-indicator scores are min-max normalised to 0–100 across the 17-country sample.</li>
                        <li>For POLICY, inflation and real interest rates are inverted before normalisation (lower values = higher score).</li>
                        <li>Equal weights (β = 0.20) reflect the absence of a definitive consensus in the literature on relative factor importance in the MENA context.</li>
                        <li>Syria and Yemen 2023 data are partially estimated due to conflict-related reporting gaps in World Bank databases.</li>
                    </ul>
                </div>
            </main>  
        </>  
    )
}

export default Methodology;