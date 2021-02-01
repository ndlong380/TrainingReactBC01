import React, { Component } from "react";
import BTLaptopProduct from "./BTLaptopProduct.js";

export default class BTLaptopProductList extends Component {
  render() {
    return (
      <div>
        <section
          id="laptop"
          className="container-fluid pt-5 pb-5 bg-light text-dark"
        >
          <h1 className="text-center">BEST LAPTOP</h1>
          <div className="row">
            <div className="col-3">
              <BTLaptopProduct />
            </div>
            <div className="col-3">
              <BTLaptopProduct />
            </div>
            <div className="col-3">
              <BTLaptopProduct />
            </div>
            <div className="col-3">
              <BTLaptopProduct />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
