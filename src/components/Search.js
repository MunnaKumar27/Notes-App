// is me search + social icons + infoNotes hai 
import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
	return (
		<>
			<div className='search'>
				<MdSearch className='search-icons' size='1.3em' />
				<input
					onChange={(event) =>
						handleSearchNote(event.target.value)
					}
					type='text'
					placeholder='type to search...'
				/>
			</div>
			<div className="centre">
				<h2>
					<a className="social" href="https://munnakumar27.github.io/MunnaPortfolio/">Munna Kumar</a>
					<a className="social" href="https://www.facebook.com/Munnakumar27" target="_blank" rel="noreferrer"><i class="bi bi-facebook"></i></a>
					<a className="social" href="https://www.linkedin.com/in/munnakumar27/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
					<a className="social" href="https://www.instagram.com/munnakumar_27/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
					<a className="social" href="https://github.com/MunnaKumar27"><i class="bi bi-github" target="_blank"></i></a>
				</h2>
			</div><div className="note0">
				<h5><i class="bi bi-pen"></i> This app uses your localStorage to store your notes. <br /><i class="bi bi-pen"></i>  you can search your notes also through search button <br /><i class="bi bi-pen"></i>  you can also change theme of this app using theme button </h5>
			</div>
		</>
	);
};

export default Search;
