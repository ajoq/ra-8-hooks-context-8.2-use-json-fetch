import useJsonFetch from '../hooks/useJsonFetch';

function SuccessfulData() {
    const [data, loading, error] = useJsonFetch(
        `${process.env.REACT_APP_USERS_URL}data`
    );

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {!loading && !error && <div>Data: {JSON.stringify(data)}</div>}
        </>
    );
}

export default SuccessfulData;
