import React from 'react';
import PropTypes from 'prop-types';
import CoreProxy from 'core/ui/layout/proxy';
import MultiLayout from "layout/multi-layout";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import { fetchData } from './automata';
import Dashboard from './dashboard';

export default function Layout( props ){
	const dispatch = useDispatch();
  	const state = useSelector(( state ) => state[config.automata.name] )
  	
  	if(!state) return <div/>;

	return (
		<CoreProxy 
			xs={
			<MultiLayout
				config={config}
				type={state.params.renderer}
                url={config.page.url(state.params.entity)}
				data={state.data}
				dashboard={(props) => <Dashboard data={state.data} loading={state.loading}/>}
				loading={state.loading}
				params={{...state.params}}
				breadcrumbs={props.breadcrumbs}
			/>}
		/>
	)
}	
