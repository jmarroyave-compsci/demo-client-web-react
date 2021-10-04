import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/home';
import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getDashboard{ 
    dashboard {
      lastUpdate
      movies
      people
    }
  }`;


export default function Page( props ){
	const params = {  };
  params.breadcrumbs = []
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}