import React from 'react';
import type { NextPage } from 'next'
// Fetch hook
import { useFetchMovies } from '../API/fetchHooks';
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
      <Header />
      <Hero />
      <Grid />
      <Card />
      <Spinner />
    </main>
  )
}

export default Home