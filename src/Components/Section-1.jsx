/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Section1({ data, children }) {
  const style = {
    // eslint-disable-next-line react/prop-types

    backgroundPosition: "center",
    backgroundSize: "55%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section id="section1">
      <div className="home-contents">
        <div className="mainHeadings">
          {" "}
          <h1>Strip</h1>
          <h1>Club</h1>
        </div>
        {children}
      </div>
    </section>
  );
}
