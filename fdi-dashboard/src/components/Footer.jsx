function Footer() {
    let year = new Date().getFullYear();

    return (
        <footer>
            <div className='max-w-7xl mx-auto px-6 pt-8 pb-0 flex flex-col gap-2 text-center'>
                <hr className='text-dark-60' />
                <p className='text-dark'>Data sourced from World Bank WDI & Worldwide Governance Indicators (WGI) 2022–2023</p>
                <p className='text-dark-50'>&copy; {year}. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;