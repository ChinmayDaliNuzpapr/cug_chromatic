import React from 'react';
import Button from '../Button/Button';
const Trending = () => {
	return (
		<div className='text-center w-[200px]  '>
			<div className='my-2 '>
				<Button width='w-100' />
			</div>
			<div className='grid grid-cols-1'>
				<div className='py-2 bg-blue-500 rounded-sm text-white'>Trending</div>
				<div className='py-2 border-2'>Question 1 is here</div>
				<div className=' py-2 border-2'>Question 1 is here</div>
				<div className=' py-2 border-2'>Question 1 is here</div>
				<div className='py-2 border-2'>Question 1 is here</div>
				<div className='py-2 border-2'>Question 1 is here</div>
				<div className='py-2 border-2'>Question 1 is here</div>
				<div className='py-2 border-2'>Question 1 is here</div>
			</div>
		</div>
	);
};

export default Trending;
