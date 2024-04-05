import "./app.scss";
import { useHomeScreenMovies } from "./api";
import { AppHeader } from "./components/app-header";

function App() {
  const { data: movies, isLoading } = useHomeScreenMovies();
  return (
    <>
      <AppHeader />
    </>
  );
}

export default App;
