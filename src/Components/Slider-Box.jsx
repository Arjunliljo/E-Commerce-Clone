/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export default function SliderBox({ data }) {
  return (
    <div className="slider-container">
      {data.map((content) => (
        <SliderItems content={content} key={content.id} />
      ))}
    </div>
  );
}
function SliderItems({ content }) {
  const title = (str) => str.split(" ").slice(0, 2).join(" ");
  const desc = (str) => str.split("").slice(0, 30).concat(".".repeat(3));

  return (
    <article className="slider-box">
      <div className="img-box">
        <img src={content.image} alt="shop" />
      </div>
      <h3>{title(content.title)}</h3>
      <p>{desc(content.description)}</p>
      <span>{content.price} $</span>
    </article>
  );
}
