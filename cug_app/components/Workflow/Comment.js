import React from 'react';

const Comment = () => {
	return (
		<div className='p-3 rounded-md border-2 w-[600px]'>
			<p className='montserrat-12'>
				Here is my reply to the above question. This will be a modal dialog with
				a text editor through which I can write my reply and can then submit it
				to the asked question
			</p>

			<div className='flex justify-between montserrat-10 '>
				<div className='grid grid-cols-3 gap-6'>
					<p className='montserrat-10 '>Posted by: fhfyeifjr23</p>
					<p>likes</p>
				</div>
				<div>
					<p>today</p>
				</div>
			</div>
		</div>
	);
};

export default Comment;
