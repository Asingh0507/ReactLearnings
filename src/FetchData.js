import React, { useEffect, useState } from 'react';

async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  return response.json();
}

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return <div>{data ? data.message : 'Loading...'}</div>;
}

export default FetchData;
export { fetchData };
