import { Joke } from "./types";

const api = {
  //se define el return de la funcion despues del parentesis
  fetch: (): Promise<Joke> =>
    fetch(`https://api.chucknorris.io/jokes/random`).then((res) => res.json()),
};

export default api;
