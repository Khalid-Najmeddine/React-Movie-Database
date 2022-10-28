import { Movies } from "./types";

export const basicFetch = async <returnType>(endpoint: string): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Error!"); //response.statusText is the error message
  }

  const data = await response.json();

  return data;
};

// Fetch Functions for the movie page
export const fetchMovies = async(search="", page=1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
};





  
  

  
