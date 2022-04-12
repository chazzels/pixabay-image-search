import React from 'react';
import ResultTitle from './resultTitle.js';
import ResultOverview from './resultOverview.js';
import SearchInput from './searchInput.js';
import ResultPageSelector from './resultPageSelector.js';

const ResultSortFilter = ({ term, count, updateSearchTerm, page, itemsPerPage }) => {
	
	return (
		<section id='ResultSortFilter'>
			<ResultTitle term={term} count={count}></ResultTitle>
			<div className='toolbar-split'></div>
			<SearchInput updateSearchTerm={updateSearchTerm}></SearchInput>
			<div className='toolbar-split'></div>
			<ResultOverview pageNumber={page} itemsPerPage={itemsPerPage} resultCount={count}></ResultOverview>
		</section>
	);
	
}

export default ResultSortFilter;