import React from 'react';
import Constants from 'config/constants'
import Footer from 'shared/globals/footer';

const FooterComponent = ( { params } ) => {	
	return (
		<Footer version={params.version} footerLinks={params.links} socialNetworksLinks={params.socialNetworks}/>
	)
}

export default FooterComponent