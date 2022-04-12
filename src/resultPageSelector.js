import React from 'react';

const ResultPageSelector = ({count, page, itemsPerPage, updatePageIndex, displayLimit}) => {
	
	const possiblePageCount = Math.floor(count / itemsPerPage);
	
	if(possiblePageCount < displayLimit) { displayLimit = possiblePageCount; }
	
	const pageLinks = new Array(displayLimit).fill(0);
	
	const handleClick = (e) => {
		updatePageIndex(parseInt(e.target.getAttribute('data-page'), 10));
	}
	
	return (
		<section id='ResultPageSelector'>
			{ page < 2 ? null : <PageLink text='Prev' page={page-1} pageMax={possiblePageCount} handleClick={handleClick}></PageLink> }
			{ pageLinks.map((e, i) => ( <PageLink key={page+i} text={page+i} page={page+i} pageMax={possiblePageCount} handleClick={handleClick}></PageLink> )) }
			{ displayLimit < 1 ? null : <PageLink text='Next' page={page+1} pageMax={possiblePageCount} handleClick={handleClick}></PageLink> }
		</section>
	);
	
}

const PageLink = ({text, page, pageMax, handleClick, displayLimit}) => {
	const targetPage = parseInt(page, 10);
	const ariaLabel = `Go to Page ${targetPage}`;
	const pageLink = page <= pageMax ? <a className='result-page-link' onClick={handleClick} data-page={targetPage} aria-label={ariaLabel}>{text}</a> : null;
	return pageLink;
}

export default ResultPageSelector;