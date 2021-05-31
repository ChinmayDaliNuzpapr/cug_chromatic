import React from 'react';

const Footer = () => {
	return (
		<div className='bg-blue-200 p-2'>
			<h1 className='text-center	text-align: center text-4xl font-size: 2.25rem+-* m-1.5	margin: 0.375rem'>
				Title 1
			</h1>
			<p className='text-center text-align: center m-4 margin: 1rem'>
				Here are the few categories that you can discuss, ask, answer, recommend
				here
			</p>
			<div className='flex justify-around justify-content: space-around m-8'>
				<div>
					<img src='/favicon.io' />
					<p>Category 1</p>
				</div>
				<div>
					<img src='/favicon.io' />
					<p>Category 2</p>
				</div>
				<div>
					<img src='/favicon.io' />
					<p>Category 3</p>
				</div>
				<div>
					<img src='/favicon.io' />
					<p>Category 4</p>
				</div>
				<div>
					<img src='/favicon.io' />
					<p>Category 5</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
