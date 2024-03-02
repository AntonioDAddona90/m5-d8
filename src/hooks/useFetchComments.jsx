import React, { useEffect, useState } from "react";

const useFetchComments = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getCommentsFromApi = async () => {
    setLoading(true);
    try {
      const data = await fetch(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDkzY2I4YmQ1NDljMzAwMTQ2YzM4OTYiLCJpYXQiOjE2ODg0OTY0OTEsImV4cCI6MTY4OTcwNjA5MX0.YkZXvUxurcX2zkth0PQ28hA-HjVbGUKkkDqNgkh5cBk",
        },
      });
      const response = await data.json();
      setData(response);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getCommentsFromApi();
  }, [endpoint]);
  return { loading, data, error };
};

export default useFetchComments;