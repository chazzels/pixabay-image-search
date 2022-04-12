import React from "react";

const ResultOverview = ({ pageNumber, itemsPerPage, resultCount }) => {
	
	let startNumber = Math.max( ((pageNumber-1)*itemsPerPage+1), 1),
		endNumber = startNumber + itemsPerPage - 1;
	
	if(startNumber > resultCount) {
		startNumber = resultCount;
	}
	
	if(endNumber > resultCount) {
		endNumber = resultCount;
	}
	
	return (
		<div id='ResultOverview'>
			{startNumber !== 0 && endNumber !== 0 ? <span>{startNumber}-{endNumber} of {resultCount}</span> : null }
		</div>
	);
}

export default ResultOverview;