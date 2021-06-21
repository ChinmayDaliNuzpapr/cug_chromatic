import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import QuestionComponent from '../../components/Workflow/Question';
import Comment from '../../components/Workflow/Comment';
import { ExtraTrendingBox } from '../../components/Workflow/Trending';
import Sidebar from '../../components/Workflow/Sidebar';
import Unanswered from '../../components/Workflow/Unanswered';
import Button from '../../components/Button/Button';
import axios from 'axios';

/*export async function getStaticProps(context) {
	const id = context.params.id;
	

	get it from  local storage
	const token = localStorage.getItem('jwt_token');
	let response = await fetch(url, {
		method 'POST',
		headers new Headers({
			Authorization 'Bearer' + token,
			'Content-Type' 'applicationx-www-form-urlencoded',
		}),
	});

	response = await response.json();

	console.log('The response is', response);
	return {
		props { response },  will be passed to the page component as props
	};
}

export async function getStaticPaths() {
	 We'll pre-render only these paths at build time.
	return {
		paths [{ params { id '1' } }, { params { id '2' } }],
		fallback true, If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
	};
}*/

function Question() {
	const router = useRouter();

	const [question, setQuestions] = useState();
	const [answer, setAnswer] = useState();

	//process.env.DEVELOPMENT is undefined

	useEffect(async () => {
		if (router.asPath !== router.route) {
			const { id } = router.query;

			console.log('ROUTER QUERY', router.query);
			console.log('ID IS', id);

			const url = `http://localhost:3000/api/question/${id}`;
			console.log('URL IS ', url);
			const token = localStorage.getItem('jwt_token');

			console.log('TOKEN IS ', token);
			try {
				const response = await axios.get(url, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				const data = response.data;
				setQuestions(data.question);
				setAnswer(data.answer);
			} catch (err) {
				console.log(err);
			}
		}
	}, [router]);

	return (
		<div>
			{/* For now flex seems only option , otherwise custom css is to be written  */}
			<div className='flex'>
				<div className='w-2/8'>SIDEBAR IS TO BE ADDED</div>
				<div class='w-4/8'>
					<div className='text-center mb-8 '>QUESTION COMPONENT HERE</div>
					<div className='mb-2 flex justify-between'>
						{answer && answer.length == 0 && (
							<div>
								<Unanswered />
							</div>
						)}

						{answer && answer.length != 0 && (
							<div>{answer && answer.length} answers</div>
						)}

						<div className='flex items-center'>
							<Button content={'Add Anwser'} />
						</div>
					</div>
					<div>
						{answer && (
							<div>
								{answer.map((item, index) => {
									return <Comment key={index} answer={item} />;
								})}
							</div>
						)}
					</div>
				</div>
				<div class='w-2/8'>
					<ExtraTrendingBox />
				</div>
			</div>
		</div>
	);
}

export default Question;
