import {useRef, useState} from 'react';
import reactLogo from '../shared/assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/index.scss';
import {Button, Checkbox, Input, Typography} from "@/shared/ui-kit";

function App() {
  const [count, setCount] = useState(0);

    const ref = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Typography variant={'head1'} >
        Click on the Vite and React logos to learn more
      </Typography>
        <Button ref={ref} onClick={() => setCount((count) => count + 1)} >
            Primary
        </Button>
        <Button variant={'link'} href={'https://vite.dev'} >
            Primary
        </Button>
        <Input/>
        <Checkbox label={'fewf'}/>
    </>
  );
}

export default App;
