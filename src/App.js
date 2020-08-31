import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Header from "./components/Header";
import routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store ={store}>
        <HashRouter>
          <Header />
           {routes}
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
