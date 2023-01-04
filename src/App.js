import "./App.css";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesPage from "./pages/MoviesPage";
import StreamPage from "./pages/StreamPage";
import EventPage from "./pages/EventPage";
import BuzzPage from "./pages/BuzzPage";
import SportPage from "./pages/SportPage";
import ActivityPage from "./pages/ActivityPage";
import PlayPage from "./pages/PlayPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage/>}/>
          <Route path="/streams" element={<StreamPage/>}/>
          <Route path="/events" element={<EventPage/>}/>
          <Route path="/plays" element={<PlayPage/>}/>
          <Route path="/activities" element={<ActivityPage/>}/>
          <Route path="/sports" element={<SportPage/>}/>
          <Route path="/buzz" element={<BuzzPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
