import {
  Route, BrowserRouter as Router, Routes,
} from 'react-router-dom';

import TOKEN from './TOKEN';

const App = () => (
  <div className="App">
    <header className="App-header">
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
                <a href="/page2">
                  туда
                </a>
              </div>
            )}
            path="/"
          />
        </Routes>
      </Router>
    </header>
  </div>
);

export default App;
