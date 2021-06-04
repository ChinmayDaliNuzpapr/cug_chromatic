import React from 'react';

import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css'; // Add css for snow theme

const QuillEditor = () => {
	const { quill, quillRef } = useQuill();
	React.useEffect(() => {
		if (quill) {
			quill.clipboard.dangerouslyPasteHTML(
				'<h1>Enter your response here!</h1>'
			);
		}
	}, [quill]);
	console.log(quill); // undefined > Quill Object
	console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

	return (
		<div style={{ width: 500, height: 300 }}>
			<div ref={quillRef} />
		</div>
	);
};

export default QuillEditor;
