//Vytvořte komponentu Intro vytvářející úvodní text podle následujích props.

export const Intro = (props) => {
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
