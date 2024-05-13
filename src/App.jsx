import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import './App.css'

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 0.1);
    }, 20);
  }, []);

  return (
    <div className=" flex flex-col  items-center gap-10">
      <span className=" text-red-400 text-5xl">Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
}

export default App;