import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './webPlatform/webSeries.css';

import Cards from './webPlatform/cards'


ReactDOM.render(
  <>
  <h2 className="heading_style" >List of Top Series on Netflix 2020</h2>
    <Cards/>  
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
