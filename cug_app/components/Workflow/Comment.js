import React from 'react';

const Comment = () => {
	return (
		<div className='p-3 rounded-md border-2 w-[600px]'>
			<p className='montserrat-12 mb-8'>
				Here is my reply to the above question. This will be a modal dialog with
				a text editor through which I can write my reply and can then submit it
				to the asked question
			</p>

			<div className='flex justify-between montserrat-10 '>
				<div className='grid grid-cols-3 gap-6'>
					<div className='montserrat-10 '>Posted by: fhfyeifjr23</div>
					<div className='flex justify-start'>
						<div className='w-[20px] h-[20px]'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
								/>
							</svg>
						</div>
						<div className='margin_auto'>like</div>
					</div>
				</div>
				<div className='flex justify-start'>
					<div>
						<div className='w-[20px] h-[20px]'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9'
								/>
							</svg>
						</div>
					</div>
					<div>today</div>
				</div>
			</div>
		</div>
	);
};

export default Comment;
