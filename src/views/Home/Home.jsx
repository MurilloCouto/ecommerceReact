import React from "react";
import "./index.scss";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import Search from "../../components/Search/Search";

const Home = ({ data }) => {
  return (
    <section className="home">
      <HeaderMenu />
      <Search />
      <div className="home__products">
        {data.map((product) => (
          <ProductsCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
