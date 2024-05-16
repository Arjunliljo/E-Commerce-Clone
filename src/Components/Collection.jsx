/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Collection({ data }) {
  return (
    <div className="collection-container">
      <CollectionItem content={data[5]} />
      <CollectionItem content={data[6]} />
      <CollectionItem content={data[7]} />
    </div>
  );
}
function CollectionItem({ content }) {
  console.log(content);
  const style = { backgroundImage: `url(${content.image})` };
  return (
    <article style={style} className="collection-item">
      <div className="collection-item-content">
        <h3>{content.title.split(" ").slice(0, 2).join(" ")}</h3>
        <button className="main-btn" style={{ color: "black" }}>
          Shop by look
        </button>
      </div>
    </article>
  );
}
