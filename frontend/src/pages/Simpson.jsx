import { useEffect, useState } from "react";

function Simpson() {
  const [character, setCharacter] = useState({});

  const giveMeAQuote = () => {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => res.json())
      .then((data) => setCharacter(data[0]));
  };

  useEffect(() => giveMeAQuote(), []);

  return (
    <div className="simpson">
      <img
        src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2Fsimpsons.PNG?1497481539770"
        alt=""
      />
      <button type="button" onClick={giveMeAQuote}>
        Give me a quote!
      </button>
      <div className="infos">
        <img src={character.image} alt="" />
        <div className="quote">{character.quote}</div>
        <div className="name">{character.character}</div>
      </div>
    </div>
  );
}

export default Simpson;
