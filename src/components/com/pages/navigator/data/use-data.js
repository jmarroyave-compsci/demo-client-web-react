import React, { useEffect } from 'react';
import { fetchData, fetchTopic, fetchResults } from './data'
import { useDispatch } from 'react-redux'

export default function useContext( context ){
	const dispatch = useDispatch();

	useEffect( () => {
		if(!context.state) return;

		dispatch( fetchData( { ...context.state.parameters } ) )
	}, [ context?.state?.parameters?.genre, context?.state?.parameters?.decade ])

	useEffect( () => {
		if(!context.state) return;
		if(!context.state.parameters.topic) return;

		dispatch( fetchTopic( { ...context.state.parameters } ) )
		dispatch( fetchResults( { ...context.state.parameters, page: 1 } ) )
	}, [ context?.state?.parameters?.topic ])

	useEffect( () => {
		if(!context.state) return;
		if(!context.state.parameters.topic) return;

		dispatch( fetchResults( { ...context.state.parameters } ) )
	}, [ context?.state?.parameters?.page ])

	return [ {} ]
}