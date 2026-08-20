function TopStat(props) {
    return (
        <section className='top-stat border border-none rounded-xl p-5 shadow-sm text-dark text-start'>
            <div className='flex items-center gap-2 mb-3'>
                {props.icon}
                <span className='text-xs font-medium uppercase tracking-wider'>{props.category}</span>
            </div>
            {props.countryName && props.countryCode ? 
                <div className='flex items-center gap-3'>
                    <img className='w-6 h-4 rounded-sm border border-white/10' alt='' src={`https://flagcdn.com/w40/${props.countryCode}.png`} />
                    <div className='text-headline text-2xl font-bold'>{props.countryName}</div>
                </div> :
                <div className='text-3xl text-headline font-mono'>{props.number}</div>
            }
            {props.score == 'orange' ? 
                <div className='text-xs font-mono text-destructive mt-2 orange-score'>{props.stat}</div> :
            props.score == 'green' ? 
                <div className='text-xs font-mono text-destructive mt-2 green-score'>{props.stat}</div> :
            props.score == 'purple' ? 
                <div className='text-xs font-mono text-destructive mt-2 purple-score'>{props.stat}</div> :
            props.score == 'red' ? 
                <div className='text-xs font-mono text-destructive mt-2 red-score'>{props.stat}</div> :
            <div className='text-xs font-mono text-destructive mt-2'>{props.stat}</div>  
            }
        </section>
    )
}

export default TopStat;