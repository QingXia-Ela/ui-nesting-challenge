import { useState } from 'react';

export default function Counter({
  startValue = 0,
}) {
  const [count, setCount] = useState(startValue);

  return (
    <div>
      <p>This is a counter from React</p>
      <p>
        You clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
