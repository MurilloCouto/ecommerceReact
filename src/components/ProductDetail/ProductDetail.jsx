import "./index.scss";
import Button from "../Button/Button";

const ProductDetail = ({ data }) => {
  return (
    <section className="productDetail">
      <div className="productDetail__description">
        <img src={`https://ecommerce-react-lilac-three.vercel.app/product-${data.id}.png`} alt={data.title} />
        <p>{data.title}</p>
        <h3>Descrição</h3>
        <h6>{data.title}</h6>
      </div>
      <div className="productDetail__pay">
        <h5>Informações Sobre o Produto</h5>
        <h3>{data.price}</h3>
        <p>
          Cores: {""}
          {data.colors.length === 1
            ? data.colors.map((color, index) => (
                <span key={index}>{color}</span>
              ))
            : data.colors.map((color, index) =>
                index + 1 === data.colors.length ? (
                  <span key={index}>{color}</span>
                ) : (
                  <span key={index}>{color}, </span>
                )
              )}
        </p>
        <div className="productDetail__cube-colors">
          {data.colors.map((color) => (
            <div
              style={{
                width: "60px",
                height: "60px",
                marginRight: "2rem",
                borderRadius: "10px",
                border: "1px solid black",
                backgroundColor: color,
              }}
            ></div>
          ))}
        </div>
        <p>Tamanhos:</p>
        <div className="productDetail__cube-size">
          {data.sizes.map((size) => (
            <div
              style={{
                width: "70px",
                height: "60px",
                borderRadius: "10px",
                border: "1px solid black",
                marginRight: "1rem",
              }}
            >
              <p>{size}</p>
            </div>
          ))}
        </div>

        <Button text="Finalizar compra" page={`/pay/${data.id}`} />
      </div>
    </section>
  );
};

export default ProductDetail;
