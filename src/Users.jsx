import React from 'react';
import useResource from './createRequest.js';

const Users = ({ resource }) => {
	const resources = useResource(resource);

	return <div>{resources.map(li => <li key={li.id}> {li.name}</li>)}</div>;
};

export default Users;
