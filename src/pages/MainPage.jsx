import React from "react";
import CardComponent from "../components/CardComponent";

const MainPage = () => {
  return (
    <section className="mainSection fondo">
      <div className="container">
        <h1 className="text-center my-5">Bienvenido al Mundo de Dragon Ball</h1>
        <CardComponent />
      </div>
    </section>
  );
};

export default MainPage;
