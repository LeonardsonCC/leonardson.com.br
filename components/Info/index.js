import React from "react";
import { Info } from "../../themes/styles";

const InfoComponent = () => {
  const getMyAge = () => {
    const birthday = new Date("2000-09-24T00:00:00");
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const yearsOld = getMyAge();
  return (
    <Info id="Info">
      <div className="Photo" />
      <div className="Text">
        <h2>Sobre mim</h2>
        <p>
          Tenho {yearsOld} anos, estou cursando Ciência da Computação na Unisul
          (Universidade do Sul de Santa Catarina) e trabalho com desenvolvimento
          a aproximadamente 1 ano.
          <br /> <br />
          Iniciei na programação aos 13 anos, tentando fazer <i>mods</i> para
          jogos utilizando Java. Aos 16 iniciei um curso Técnico em Informática
          no IFSC (Instituto Federal de Santa Catarina) onde me formei em 2018.
        </p>
      </div>
    </Info>
  );
};

export default InfoComponent;
