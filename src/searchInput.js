import React from 'react';

const SearchInput = ({updateSearchTerm}) => {
	
	const getNewSearchTerm = (e) => {
		let inputVal = document.getElementById('SearchTerm').value;
		if(inputVal !== '' && inputVal.length <= 64) {
			updateSearchTerm(inputVal);
		} else {
			console.log('fail');
		}
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		getNewSearchTerm();
	}
	
	return (
		<div id='SearchBar'>
			<form id='SearchTermForm' onSubmit={handleSubmit}>
				<input name='SearchTerm'
					id='SearchTerm'
					tabIndex={1}
					type='text'/>
				<button id='SearchTermSubmit' 
					aria-label="Search Button"
					onClick={getNewSearchTerm}
					type='submit' 
					placeholder='Image Search'
					tabIndex={2}
					value='Submit'>Search</button>
			</form>
		</div>
	);
};

export default SearchInput;