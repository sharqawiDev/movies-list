import "./app.scss";
import { useHomeScreenMovies } from "./api";
import { AppHeader } from "./components/app-header";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const { data: movies, isLoading } = useHomeScreenMovies();
  return (
    <>
      <AppHeader searchText={searchText} setSearchText={setSearchText} />
    </>
  );
}

export default App;
