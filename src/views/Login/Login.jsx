import "./index.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const Login = () => {
  return (
    <section className="login">
      <Header />
      <form className="login__form">
        <h2>Acesse com seu login ou cadastre-se!</h2>
        <h4>você pode entrar com o seu CPF</h4>
        <label htmlFor="cpf">Digite seu CPF:</label>
        <br />
        <input
          type="text"
          placeholder="000.000.000-00"
          id="cpf"
          className="login__input-cpf"
        />
        <label htmlFor="password">Digite sua senha:</label>
        <br />
        <input type="text" placeholder="**********" id="password" />
        <Button text="Entrar" page="/home" />
      </form>
    </section>
  );
};

export default Login;
