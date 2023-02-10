import { Button } from "antd";

import useActions from "@/hooks/useActions";
import { useStore } from "@/stores/store";

import "@/App.scss";

function App() {
  const counter = useStore();
  const { todos } = useActions();
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React + React Query + Zustand + Typescript + Antd</h1>
      <div className="card">
        <Button onClick={counter.increase} type="primary">
          Primary Button {counter.count}
        </Button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <ul>
          {todos.data?.slice(0, 5)?.map((datum) => (
            <li key={datum.id}>{datum.title}</li>
          ))}
        </ul>

        <Button
          disabled={todos.isFetching}
          loading={todos.isFetching}
          onClick={() => todos.refetch()}
          type="primary"
        >
          Click for refetch
        </Button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
