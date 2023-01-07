import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MoviesPage from "./pages/MoviesPage";
import StreamPage from "./pages/StreamPage";
import EventPage from "./pages/EventPage";
import BuzzPage from "./pages/BuzzPage";
import SportPage from "./pages/SportPage";
import ActivityPage from "./pages/ActivityPage";
import PlayPage from "./pages/PlayPage";
import { AuthContextProvider } from "./context/AuthContext";
import UpComingMovies from "./pages/UpComingMovies";
import ListPage from "./pages/ListPage";
import CorporatesPage from "./pages/CorporatesPage";
import MovieDescPage from "./pages/MovieDescPage";
import Timings from "./pages/Timings";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/streams" element={<StreamPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/plays" element={<PlayPage />} />
            <Route path="/activities" element={<ActivityPage />} />
            <Route path="/sports" element={<SportPage />} />
            <Route path="/buzz" element={<BuzzPage />} />
            <Route path="/upcomingmovies" element={<UpComingMovies />} />
            <Route path="/showlist" element={<ListPage />} />
            <Route path="/corporates" element={<CorporatesPage />} />
            <Route path="/movie/:movieid" element={<MovieDescPage />} />
            <Route path="/timings/:id" element={<Timings />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
