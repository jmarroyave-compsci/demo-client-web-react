import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( id ) => fetch( GET_DATA, { id: id } , (resp) => { return { ...resp, data: resp.data.movieFestival } } )

const GET_DATA = gql`
  query GetData($id: String!)
  {
    tvShow(id: $id) {
    id
    title
    country
    type
    genre
    duration
    rating {
      averageRating
      name
      votes
    }
    releasedDate
    classification
    streamBy {
      name
      yearAdded
    }
    director{
      id
    }
    cast {
      id
    }
    awards {
      category
      name
      won
      year
    }
    references {
      imdb
    }
    image {
      poster
    }
    boxOffice
    production
    language
    plot
    }
  }
`