import "./App.css";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
