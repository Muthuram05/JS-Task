import React, { useState } from 'react';

const Get = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const newController = new AbortController();
      setController(newController);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/', { signal: newController.signal });
      const data = await response.json();
      setData(data);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch operation aborted.');
      } else {
        setError(err.message);
        setLoading(false);
      }
    }
  };

  const abortFetch = () => {
    if (controller) {
      controller.abort();
      setController(null);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Get</h1>
      {loading ? (
        <div>
          <p>Loading...</p>
          <button onClick={abortFetch}>Abort</button>
        </div>
      ) : (
        <button onClick={fetchData}>Fetch Data</button>
      )}

      {error && <div>Error: {error}</div>}

      {data && (
        <div>
          {/* Render your fetched data here */}
        </div>
      )}
    </div>
  );
};

export default Get;
