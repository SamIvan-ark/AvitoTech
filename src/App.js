import {
  Route, BrowserRouter as Router, Routes,
} from 'react-router-dom';

import SearchPage from './pages/SearchPage';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route
          element={(
            <div>
              <h1>Hello World</h1>
            </div>
            )}
          path="/page2"
        />
        <Route
          element={(
            <div>
              <SearchPage />
              <a href="/page2">
                туда
              </a>
            </div>
            )}
          path="/"
        />
      </Routes>
    </Router>
  </div>
);

export default App;
