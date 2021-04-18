import './index.html';
import './style.css';
import './img/yoga-pose.jpg';

import { Header } from './Header/index.js';
import { Intro } from './Intro/index.js';
import { Pose } from './Pose/index.js';

//https://testapi.skosacek.cz/jogini/  - zde jsou data
const appElm = document.querySelector('#app');
fetch('https://testapi.skosacek.cz/jogini/')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    appElm.appendChild(Header(json.header));
    appElm.appendChild(Intro(json.intro));
    appElm.appendChild(Pose(json.pose));
  });
