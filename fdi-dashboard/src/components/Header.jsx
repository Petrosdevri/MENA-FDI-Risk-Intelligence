import { useLocation, Link } from 'react-router';

function Header() {
    const location = useLocation();
    const activeTab = location.pathname === '/methodology' ? 'methodology' : 'dashboard';

    return (
        <div className='header border-none'>
            <div className='max-w-7xl mx-auto px-6 pt-8 pb-0'>
                <div className='header-box flex flex-row justify-between gap-6 pb-6 text-start'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 mb-2 primary'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                            <h5>Petros Devrikis</h5>
                        </div>
                        <h1 className='text-3xl font-bold tracking-tight mb-2 text-foreground'>MENA FDI Risk Intelligence</h1>
                        <p className='text-dark text-sm max-w-2xl leading-relaxed'>Investment attractiveness assessment across Middle East and North Africa. Scores are composite indices derived from macroeconomic stability, institutional quality, and geopolitical risk.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>
                            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Translation coming soon</button>
                        </div>
                        <pre className='formula container-sm border-border p-3 rounded-lg text-xs'>
                            <div className='primary text-[10px] uppercase tracking-wider mb-1'>Scoring Methodology</div>
                            <code>FDI <span className='text-dark'>= α + β₁(MS) + β₂(NRA) + β₃(INST) + β₄(POL) + β₅(RSK)</span></code>
                        </pre>
                    </div>
                </div>
                <div className="flex items-center gap-1 -mb-px">
                    <Link 
                        to='/'
                        className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest border-b-2 transition-colors ${
                            activeTab === 'dashboard' 
                                ? 'border-primary primary' 
                                : 'border-transparent text-muted-foreground hover:text hover:border-border'
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard w-3.5 h-3.5" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
                        Dashboard
                    </Link>
                    <Link 
                        to='/methodology'
                        className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest border-b-2 transition-colors ${
                            activeTab === 'methodology' 
                                ? 'border-primary primary' 
                                : 'border-transparent text-muted-foreground hover:text hover:border-border'
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-3.5 h-3.5" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                        Methodology
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;