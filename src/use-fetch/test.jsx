import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <h3>Use Fetch Hook</h3>
      {loading ? <h3>Loading ! Please wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productsItem) => (
            <p key={productsItem.key}>{productsItem.title}</p>
          ))
        : null}
    </div>
  );
}
