//komponenta Header, která vytvoří hlavičku stránky. Bude očekávat svoje props v následujícím formátu.
export const Header = (props) => {
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
