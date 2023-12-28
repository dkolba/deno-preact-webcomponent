import { render } from "preact";
import "./style.css";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "stop-watch": StopWatchAttributes;
    }
  }
}

interface StopWatchAttributes extends preact.JSX.HTMLAttributes<HTMLElement> {
  kind?: string;
}

export function App() {
  return (
    <div>
      <h1>Get Started building Vite-powered Preact Apps </h1>
      <section>
        <stop-watch kind="timer"></stop-watch>
      </section>
    </div>
  );
}

render(<App />, document.getElementById("app"));
