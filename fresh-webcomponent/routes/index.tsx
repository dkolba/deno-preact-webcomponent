import { useSignal } from "@preact/signals";
import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { JSX } from "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "stop-watch": StopWatchAttributes;
    }
  }
}

interface StopWatchAttributes extends JSX.HTMLAttributes<HTMLElement> {
  kind?: string;
}

export default function Home() {
  const count = useSignal(3);

  return (
    <>
      <Head>
        <script type="module" src="/clock.js" />
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
          <p class="my-4">
            Try updating this message in the
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
          <Counter count={count} />
          <stop-watch kind="timer"></stop-watch>
        </div>
      </div>
    </>
  );
}
