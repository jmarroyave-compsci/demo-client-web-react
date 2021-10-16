import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'components/stories/movies';
import { fetchData } from 'components/stories/movies/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {
    dispatch(setPage({
      breadcrumbs: [{name: "movies"}],
    }));    

    dispatch( fetchData( {
      renderer: "grid",
    } ) )

  }, [])

  return (
      <Layout/> 
  )
}

export default Page;


