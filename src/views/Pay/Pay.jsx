import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./index.scss";

const Pay = ({ data }) => {
  const { payId } = useParams();
  const selectedProduct = data.find((product) => product.id == payId);
  return (
    <section>
      <Header />
      <div className="pay">
        <div className="pay__left">
          <label>Nome:</label>
          <input type="text" placeholder="Nome completo" />

          <label>Endereço de entrega</label>
          <input type="text" placeholder="Endereço de entrega" />

          <label className="labelCheck">Escolha a forma de pagamento: </label>
          <div>
            <input type="checkbox" className="check" />
            <label>Pix</label>
          </div>
          <div>
            <input type="checkbox" className="check" />
            <label>Boleto</label>
          </div>
          <div>
            <input type="checkbox" className="check" />
            <label>Cartão de crédito</label>
          </div>
          <Button text="Enviar pedido" />
        </div>
        <div className="pay__right">
          <h1>Resumo do pedido:</h1>
          <div className="pay__right-value">
            <p>Produtos (1):</p>
            <h2>{selectedProduct.price}</h2>
          </div>
          <div className="pay__right-total">
            <p>Total à pagar: </p>
            <h2>{selectedProduct.price}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pay;
