import Portfolio from "./portfolio";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Portfolio />
      <Analytics />
    </>
  );
}

export default App;
