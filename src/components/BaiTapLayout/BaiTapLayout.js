import React, { Component } from "react";
import BTHeader from "./BTHeader";
import BTSlider from "./BTSlider";
import BTSmartPhoneProductList from "./BTSmartPhoneProductList";
import BTLaptopProductList from ".//BTLaptopProductList";
import BTFooter from "./BTFooter.js";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTSlider />
        <BTSmartPhoneProductList />
        <BTLaptopProductList />
        <BTFooter />
      </div>
    );
  }
}
