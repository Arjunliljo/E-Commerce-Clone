/* eslint-disable react/prop-types */
import SliderBox from "./Slider-Box";

export default function Section4({ data }) {
  return (
    <section id="#section4" className="section-4">
      <div className="container" style={{ textAlign: "center" }}>
        <h2>SHOP BY FABRIC</h2>
        <ul>
          <li>Natural Fabrics /</li>
          <li>Recycled Fabrics</li>
        </ul>
        <SliderBox data={data.slice(5, 20)} />
        <button className="sec-btn">Shop dresses</button>
      </div>
    </section>
  );
}
