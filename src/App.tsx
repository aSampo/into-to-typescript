import * as React from "react";
import { Joke, Status } from "./types";
import api from "./api";
import "./App.css";

const App = () => {
  //le decimos a nuestro useState de jokes que el tipo de dato que vamos a almacenar ahí va a ser un array de Joke.
  const [jokes, setJokes] = React.useState<Joke[]>([]);

  //vamos a tipar nuestro status para ver como usar un enum.
  const [status, setStatus] = React.useState<Status>(Status.Init);

  function getJoke() {
    setStatus(Status.Pending);
    api
      .fetch()
      .then((joke) => {
        setJokes((jokes) => jokes.concat(joke));
        setStatus(Status.Resolved);
      })
      .catch(() => setStatus(Status.Rejected));
  }

  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>
      {jokes.length ? (
        <ul>
          {jokes.map((joke) => (
            <li key={joke.id}>{joke.value}</li>
          ))}
        </ul>
      ) : (
        <span>No jokes yet</span>
      )}
      <button disabled={status === Status.Pending} onClick={getJoke}>
        Fetch joke
      </button>
    </div>
  );
};

export default App;
