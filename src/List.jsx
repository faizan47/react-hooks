import React from 'react';
import useResource from './createRequest.js';

const List = ({ resource }) => {
	const resources = useResource(resource);

	return <div>{resources.map(li => <li key={li.id}> {li.title}</li>)}</div>;
};

export default List;
