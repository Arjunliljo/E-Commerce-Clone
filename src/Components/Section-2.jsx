/* eslint-disable react/prop-types */
import SliderBox from "./Slider-Box";

export default function Section2({ data }) {
  return (
    <section id="section2">
      <div className="container">
        <h2>SHOP BY CATEGORY</h2>
        <ul>
          <li>Dresses /</li>
          <li>Top Wear /</li>
          <li>Bottom Wear /</li>
          <li>Co-Ords /</li>
        </ul>
        <SliderBox data={data} />
      </div>
    </section>
  );
}
