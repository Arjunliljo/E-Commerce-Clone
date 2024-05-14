import { useEffect, useState } from "react";
import Section1 from "./Section-1";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //  fetching api data
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=20");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        console.log(data);
      } catch (error) {
        alert(error.message);
        setError(error.message);
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (error) return <Error err={error.message} />;
  if (loading) return <Loader />;

  return (
    <main>
      <Section1 />
    </main>
  );
}

function Loader() {
  return <main className="loading">Loading...</main>;
}
function Error(err) {
  <main className="loading">{err}</main>;
}
