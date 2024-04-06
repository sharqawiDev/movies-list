import "./app.scss";
import { useHomeScreenMovies } from "./api";
import { AppHeader } from "./components/app-header";
import { useState } from "react";
import { MoviesGrid } from "./components/movies-grid";

function App() {
  const [searchText, setSearchText] = useState("");
  const { data: movies, isLoading } = useHomeScreenMovies(searchText);
  return (
    <>
      <AppHeader searchText={searchText} setSearchText={setSearchText} />
      <MoviesGrid isLoading={isLoading} movies={movies?.results} />
    </>
  );
}

export default App;
