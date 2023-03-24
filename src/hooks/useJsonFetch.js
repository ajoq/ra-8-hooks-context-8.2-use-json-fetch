import { useState, useEffect } from 'react';

function useJsonFetch(url, opts = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url, opts)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `${response.status}: ${response.statusText}`
                    );
                }

                return response.json();
            })
            .then((data) => {
                setData(data);
                setError(null);
                setLoading(false);
            })
            .catch((err) => {
                setData(null);
                setError(err);
                setLoading(false);
            });
    }, []);

    return [data, loading, error];
}

export default useJsonFetch;
