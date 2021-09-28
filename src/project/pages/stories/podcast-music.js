import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/podcast-music';

export default function Page( props ){
  const params = {  };
  params.breadcrumbs = [{name: 'podcasts', url: '/podcasts'}, {name: 'stories', url: '/podcasts/stories'}, {name: 'music'}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}