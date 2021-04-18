//Vytvořte komponentu Pose, která vytváří HTML pro úvodní obrázek. Komponenta očekává takovéto props.

export const Pose = (props) => {
  const poseElem = document.createElement('img');
  poseElem.className = 'pose';
  poseElem.src = props.cestaKObrazku;

  return poseElem;
};
