import React from 'react';
import { Small } from './Input/Input.stories';
import { Primary } from './Button.stories';

export default {
	title: 'Form',
};

export const PrimaryForm = () => (
	<>
		<Small />
		<Primary>Primary</Primary>
	</>
);
