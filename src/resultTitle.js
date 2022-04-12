import React from 'react';

const ResultTitle = ({term, count}) => {
	let searchTerm = term ? term : '';
	let resultCount = count ? count : 0;
	
	return (
		<section id='ResultTitle'>
			<h2 className='search-term'>{searchTerm}</h2>
			{ resultCount > 0 ? <span className='search-term-count'>({resultCount})</span> : null }
		</section>
	);
	
}

export default ResultTitle;