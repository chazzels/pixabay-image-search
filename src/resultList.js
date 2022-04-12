import React from 'react';

const ResultList = ({results}) => {
	return (
		<section>
			<ul className='card-list'>
				{results.map(result => {
					return <ImgResult key={result.id} result={result}></ImgResult>
				})}
			</ul>
			{ results.length < 1 ? <h3 className='result-message'>No Result Found</h3> : null }
		</section>
	);
}

const ImgResult = ({result}) => {
	return (
		<li className='card-item'>
			<div className='card-item-img'>
				<img src={result.previewURL} />
			</div>
		</li>
	);
}

export default ResultList;