import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CatsList from "./CatsList";

class CatsPage extends React.Component {
  render() {
    return (
      <div id="cats-page">
        <Header />
        <CatsList />
        <Footer />
      </div>
    );
  }
}

export default CatsPage;
