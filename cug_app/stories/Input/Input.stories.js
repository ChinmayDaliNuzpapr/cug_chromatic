import React from 'react';
import Input from './Input';

//default export
export default {
	title: 'Input', // "group/Component"   for grouping the components
	component: Input,
};

//named export for variations
export const Small = () => <Input size='small' placeholder='Small size' />;
export const Medium = () => <Input size='medium' placeholder='Medium size' />;
export const Large = () => <Input size='large' placeholder='Large size' />;

Small.storyName = 'Small Input';
