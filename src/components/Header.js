//isme header logo + title + theme change button code hai 
import React from 'react';
import logo from '../img/logo.png'

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
		<a href="https://munnakumar27.github.io/MunnaPortfolio/"><h1><img src={logo} width="80" height="50"  alt="" /> Pin your Notes here</h1></a>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='theme'
			>
			<i class="bi bi-moon"></i>
			</button>
		</div>
	);
};

export default Header;
