import { movieUrl, creditsUrl, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
//Basic fetch
import { basicFetch } from "../API/fetchFunctions";
//Components
import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
// Types
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Movie, Credits, Crew, Cast} from "../API/types";

const Movie: NextPage = () => (
  <main>
    <Header />
    <MovieInfo />
    <Grid>
      <Card />
    </Grid>
  </main>
);

export default Movie;