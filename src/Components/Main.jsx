/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Section1 from "./Section-1";
import Section2 from "./Section-2";
import Section3 from "./Section-3";
import Collection from "./Collection";
import Section4 from "./Section-4";

export default function Main() {
  const [error, setError] = useState("");

  const [data, setData] = useState("");

  //  fetching api data
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=20");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        console.log(data);

        setData(data);
      } catch (error) {
        alert(error.message);
        setError(error.message);
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  if (error) return <Error err={error.message} />;
  if (!data) return <Loader />;
  console.log(data);
  return (
    <main>
      <Section1 data={data.slice(0, 2)}>
        <Button>Shop now</Button>
      </Section1>
      <Section2 data={data}>
        <Button>Shop Now</Button>
      </Section2>
      <Section3>
        <Collection data={data} />
      </Section3>
      <Section4 data={data} />
    </main>
  );
}

function Loader() {
  return <main className="loading">Loading...</main>;
}
function Error({ err }) {
  <main className="loading">{err}</main>;
}
function Button({ children }) {
  return <button className="main-btn">{children}</button>;
}
