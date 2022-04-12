import React, { useState, useEffect } from 'react';
import ResultSortFilter from './resultSortFilter.js';
import ResultList from './resultList.js';
import ResultPageSelector from './resultPageSelector.js';


const ResultsPage = () => {
	const [status, setStatus] = useState("start");
	const [searchTerm, setSearchTerm] = useState('Puppies');
	const [page, setPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(20);
	const [resultCount, setResultCount] = useState(0);
	const [resultList, setResultList] = useState(new Array());
	const apiUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PUBLIC_KEY}&q=${searchTerm}&page=${page}&per_page=${itemsPerPage}`;
	
	const updateSearchTerm = (newTerm) => {
		if(typeof newTerm !== 'undefined' && typeof newTerm === 'string') {
			setStatus('start');
			setSearchTerm(newTerm);
		}
	}
	
	const updatePageIndex = (pageNumber) => {
		if(typeof page === 'number' && page > 0) {
			setPage(pageNumber);
			setStatus('start');
		}
	}
	
	useEffect(() => {
		if(status === 'start') {
			fetch(apiUrl).then((res) => res.json())
				.then((result) => {
						setStatus('loaded');
						setResultCount(result.total);
						setResultList(result.hits);
					},
					(error) => {
						setStatus('error');
					}
				);
		}
	});
	
	return (
		<main>
			<ResultSortFilter 
				term={searchTerm} 
				count={resultCount}
				page={page}
				itemsPerPage={itemsPerPage}
				updateSearchTerm={updateSearchTerm}></ResultSortFilter>
			<ResultList results={resultList}></ResultList>
			<ResultPageSelector 
				count={resultCount}
				page={page} 
				itemsPerPage={itemsPerPage}
				updatePageIndex={updatePageIndex} 
				displayLimit={7}></ResultPageSelector>
		</main>
	);
}



export default function App() {
	return (
		<ResultsPage></ResultsPage>
	);
}
