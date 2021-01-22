import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';

const Navbar = () => {
	const [size, setSize] = useState(window.innerWidth);

	const [styleHeight, setStyleHeight] = useState(0);
	const checkSize = () => {
		setSize(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', checkSize);
		return () => {
			window.removeEventListener('resize', checkSize);
		};
	});

	const toggleLinks = () => {
		if (styleHeight === 0) {
			setStyleHeight(200);
		}
		if (styleHeight === 200) {
			setStyleHeight(0);
		}
	};

	if (size > 800) {
		return (
			<nav>
				<div className='nav-center'>
					<div className='nav-header'>
						<img
							src='https://raw.githubusercontent.com/john-smilga/react-projects/7e7153d91eeaba5e060d76cf32e64b1a6835ca57/11-navbar/setup/src/logo.svg'
							className='logo'
							alt='logo'
						/>
					</div>
					<div className='links-container'>
						<ul className='links'>
							{links.map((link) => (
								<li key={link.id}>
									<a href={link.url}>{link.text}</a>
								</li>
							))}
						</ul>
					</div>
					<ul className='social-icons'>
						{social.map((site) => (
							<li key={site.id}>
								<a href={site.url} target='blank'>
									{site.icon}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		);
	}
	if (size < 800) {
		return (
			<nav>
				<div className='nav-center'>
					<div className='nav-header'>
						<img
							src='https://raw.githubusercontent.com/john-smilga/react-projects/7e7153d91eeaba5e060d76cf32e64b1a6835ca57/11-navbar/setup/src/logo.svg'
							className='logo'
							alt='logo'
						/>
						<button
							className='nav-toggle'
							type='button'
							onClick={toggleLinks}
						>
							<FaBars />
						</button>
					</div>
					<div
						className='links-container'
						style={{ height: styleHeight }}
					>
						<ul className='links'>
							{links.map((link) => (
								<li key={link.id}>
									<a href={link.url}>{link.text}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
