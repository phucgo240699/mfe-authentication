import ReactDOM from 'react-dom/client';
import { MfeAppProps } from './exposed/mfe';

interface MountOptions {
  tokenCallback?: (accessToken: string) => void;
}

// Export this micro frontend to the global micro frontends world
export const mount = (el: Element, options?: MountOptions) => {
  const root = ReactDOM.createRoot(el);

  import('./exposed/mfe').then(({ default: MfeComponent }) => {
    const MFE: React.FC<MfeAppProps> = MfeComponent;
    root.render(<MFE tokenCallback={options?.tokenCallback} />);
  });
};

// Isolation: Run this micro frontend in isolation
const el = document.querySelector('#authentication-root');
if (el) {
  import('./exposed/main').then(({ default: Main }) => {
    const root = ReactDOM.createRoot(el);
    root.render(<Main />);
  });
}
