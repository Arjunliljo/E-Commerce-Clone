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
      <div
        className="firstBgImg"
        style={{
          ...style,
          backgroundImage: `url(${data[0].image})`,
        }}
      >
        {" "}
      </div>
      <div
        className="secondBgImg"
        style={{
          ...style,
          backgroundImage: `url(${data[1].image})`,
        }}
      ></div>
      <div className="home-contents">
        <div className="flex">
          <div style={{ fontSize: "50px", marginBottom: "2rem" }}>STRIP </div>
          <div style={{ fontWeight: "900", fontSize: "70px" }}>CLUB</div>
        </div>
        {children}
      </div>
    </section>
  );
}
