import React from 'react';
import type { NextPage } from 'next'
// Fetch hook
import { useFetchMovies } from '../API/fetchHooks';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Spinner from '../components/Spinner/Spinner';

const Home: NextPage = () => {
  const [query, setQuery] = React.useState("");
  const {data, fetchNextPage, isLoading, isFetching, isError} = useFetchMovies(query);
  console.log(data);

  return ( 
    <main className="relative h-screen overflow-y-scroll"> 
      <Header setQuery={setQuery}/>
      {!query && data && data.pages ? (
        <Hero 
          imgUrl={
            data?.pages[0].results[0]?.backdrop_path 
              ? IMAGE_BASE_URL + BACKDROP_SIZE + data.pages[0].results[0].backdrop_path 
              : "/no-image.jpeg"  
          }
          title={data.pages[0].results[0].title}
          text={data.pages[0].results[0].overview}
        />
      ) : null}
      <Grid />
      <Card />
      <Spinner />
    </main>
  )
}

export default Home