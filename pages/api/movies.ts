// API URLs
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from "../../config";
// Basic fetch function
import { basicFetch } from "../../API/fetchFunctions"; 
// Types
import type { NextApiRequest, NextApiResponse } from "next"; 
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { Movies } from "../../API/types"; 

async function Handler(req:NextApiRequest, res:NextApiResponse<Movies>) { 
  const { page, search } = req.query; 
  //Grab search parameters from the URL query string (e.g. ?search=star&page=1)
  const endpoint = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`; 
  //If search is true, use the search endpoint, otherwise use the popular endpoint (see config.ts) 
  const data = await basicFetch<Movies>(endpoint); 
  //Fetch data from the endpoint and type it as Movies (see API/types.ts)
  res.status(200).json(data); 
  //Return the data to the client side (in this case, the Home component) as JSON data 
}

export default Handler