import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="container mx-auto">
      <p>
        Hello <span class="font-bold text-purple-700">{count()}</span>
      </p>
      <div class="flex items-center gap-2 mt-2">
        <button
          class="bg-slate-700 text-white p-1 rounded"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increase
        </button>
        <button
          class="bg-slate-700 text-white p-1 rounded"
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
