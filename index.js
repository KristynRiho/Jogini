'use strict';

console.log('funguju!');

//komponenta Header, která vytvoří hlavičku stránky. Bude očekávat svoje props v následujícím formátu.
const Header = (props) => {
  const headerElm = document.createElement('header');

  const titleElm = document.createElement('h1');
  titleElm.classList.add('site-title');
  titleElm.textContent = `${props.nadpis}`;
  headerElm.appendChild(titleElm);

  const navElm = document.createElement('nav');

  props.polozkyMenu.forEach((item) => {
    const aElm = document.createElement('a');
    aElm.textContent = item.text;
    aElm.href = item.url;
    navElm.appendChild(aElm);
  });

  headerElm.appendChild(navElm);

  return headerElm;
};

//Vytvořte komponentu Intro vytvářející úvodní text podle následujích props.

const Intro = (props) => {
  const introElm = document.createElement('div');
  introElm.className = 'intro';

  const welcomeElm = document.createElement('h2');
  welcomeElm.textContent = props.nadpis;
  introElm.appendChild(welcomeElm);

  const introTextElm = document.createElement('p');
  introTextElm.textContent = props.odstavec;
  introElm.appendChild(introTextElm);

  return introElm;
};

//Vytvořte komponentu Pose, která vytváří HTML pro úvodní obrázek. Komponenta očekává takovéto props.

const Pose = (props) => {
  const poseElem = document.createElement('img');
  poseElem.className = 'pose';
  poseElem.src = props.cestaKObrazku;

  return poseElem;
};

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
