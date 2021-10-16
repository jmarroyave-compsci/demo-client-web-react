import React from 'react';
import Link from 'core/ui/link';

function LinkComponent( params ) {
	const { id, entity, children } = params;
	return (
		<Link border={false} to={`/movies/festivals/${id}`}>{children}</Link>
	);
}

export default LinkComponent;
