import Portfolio from "./portfolio";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <Portfolio />
      <Analytics />
    </div>
  );
}

export default App;
