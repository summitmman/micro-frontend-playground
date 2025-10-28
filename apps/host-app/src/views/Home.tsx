import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Host React Home Page</h1>
      <h3>Counter Example</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Current Count: {count}</p>
      </div>
    </div>
  );
}

export default Home;
