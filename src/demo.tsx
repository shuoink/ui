import type {VFC} from 'react';
import {useEffect, useState, StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, Redirect} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {useMountedState} from 'react-use';
import shuoink from './assets/shuoink.svg';
import Hyperlink from './components/navigation/Hyperlink';
import {Heading, Section} from '.';
import './index.css';

type DemoModuleType = {[key: string]: VFC};

const demoModules = import.meta.glob('./**/*.demo.tsx') as {
  [key: string]: () => Promise<DemoModuleType>;
};

const getPath = (demoModuleId: string): string =>
  demoModuleId.slice(1).replace('.demo.tsx', '');

const DemoModule: VFC<{id: string}> = ({id}) => {
  const [module, setModule] = useState<DemoModuleType | null>(null);
  const isMounted = useMountedState();

  useEffect(() => {
    void (async () => {
      const mod = await demoModules[id]();
      if (isMounted()) {
        setModule(mod);
      }
    })();
  }, [id, isMounted]);

  if (module == null) {
    return <>Loading...</>; // TODO: spinner
  }

  return (
    <>
      {Object.entries(module).map(([name, Demo]) => (
        <Section key={name}>
          <Heading>{name}</Heading>
          <Demo />
        </Section>
      ))}
    </>
  );
};

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex gap-4 bg-gray-200 dark:bg-gray-800 min-h-screen">
        <nav className="p-2 border-r">
          <img
            src={shuoink}
            alt="Shuoink Logo"
            className="w-48 filter dark:invert"
          />
          <ul>
            {Object.keys(demoModules).map(id => {
              const path = getPath(id);
              const displayName = path.split('/').pop();
              return (
                <li key={id}>
                  <Hyperlink href={path}>{displayName}</Hyperlink>
                </li>
              );
            })}
          </ul>
        </nav>
        <main className="flex-1 p-2">
          <Switch>
            {Object.keys(demoModules).map(id => (
              <Route
                key={id}
                path={getPath(id)}
                render={() => <DemoModule id={id} />}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </StrictMode>,
  document.querySelector('#root'),
);
