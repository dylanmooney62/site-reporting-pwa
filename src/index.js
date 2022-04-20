/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

import App from './App';
import store from './app/store';
import theme from './theme';
import AddPost from './features/post/AddPost';
import EditPost from './features/post/EditPost';
import Camera from './features/camera/Camera';
import MapGL from './features/map/MapGL';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route exact path="/" element={<MapGL />} />
            <Route path="camera" element={<Camera />} />
            <Route path="post">
              <Route path="new" element={<AddPost />} />
              <Route path="edit/:id" element={<EditPost />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
