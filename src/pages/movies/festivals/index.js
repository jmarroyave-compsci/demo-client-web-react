import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'com/pages/movies-festivals';
import { fetchData } from 'com/pages/movies-festivals/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {
    if(!router.isReady) return;

    var { page }  = (router.query) ? router.query : {}; 
    page = (page) ? parseInt(page) : 1;

    dispatch(setPage({
      breadcrumbs: [{name: "movies", url: '/movies'}, {name: "festivals"}],
    }));    

    dispatch( fetchData( {
      renderer: "list",
      page: page
    } ) )

  }, [router.isReady])

  return (
      <Layout/> 
  )
}

export default Page;


