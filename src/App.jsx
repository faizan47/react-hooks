import React, { useState } from 'react';
import List from './List';
import Users from './Users';

const App = () => {
	const [ resource, setResource ] = useState('todos');

	return (
		<div>
			<Users resource={'users'} />
			<button onClick={() => setResource('posts')}>Posts</button>
			<button onClick={() => setResource('todos')}>ToDo</button>
			<List resource={resource} />
		</div>
	);
};

export default App;
