import logo from "../../assets/cabide.png";
import "./index.scss";
import carrinho from "../../assets/carrinho.svg";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div className="headerMenu">
      <img className="headerMenu__logo" src={logo} alt="Logo" />
      <p className="selected">
        <Link to="/home">Home</Link>
      </p>
      <p>Novidades</p>
      <p>Feminino</p>
      <p>Masculino</p>
      <p>Atendimento</p>
      <h6 className="carrinho">
        Meu Carrinho
        <img className="headerMenu__carrinho" src={carrinho} alt="carrinho" />
      </h6>
    </div>
  );
};

export default HeaderMenu;
