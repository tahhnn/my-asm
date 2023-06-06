import UserLayout from "./components/user-layout";
import productDetail from "./pages/detail";
import homePage from "./pages/home";
import Dashboard from "./pages/admin/dashboard";

import "../style/style.css";
import header from "./components/header";
import footer from "./components/footer";
// console.log(data);
import { router, useState, useEffect, render } from "../lib";
import { scrollToTop } from "../ultilities/lib";
import { notFound } from "./components/notfound";
import addProduct from "./pages/admin/add";
// DOM declaration
const headerBox = document.querySelector("#header");
const app = document.querySelector("#app");
const footerBox = document.querySelector("#footer");

// template string
// const render = function (content) {

//   scrollToTop();
//   headerBox.innerHTML = header();
//   app.innerHTML = content;
//   footerBox.innerHTML = footer();
// };

router.on({
  "/": () => {
    render(homePage, app);
  },
  "/home/sortLow": () => {
    // const dataSort = data.sort(function (a, b) {
    //   return b.list_price - a.list_price;
    // });
    // render(homePage(dataSort));
  },
  "/home/sortHigh": () => {
    // const dataSort = data.sort(function (a, b) {
    //   return a.list_price - b.list_price;
    // });
    // render(homePage(dataSort));
  },
  "/home/sortSeller": () => {
    
    // render(homePage(dataFilter));
  },

  "/prd": () => {
    render(productDetail, app);
  },
  "/prd/:id": ({ data }) => {
    // console.log(data);
    // if (data.hasOwnProperty("id")) {
    render(() => 
      productDetail(data)
    , app);
    // }
    // render(notFound,app);
  },
  "/dashboard": () => {
    render(Dashboard, app);
  },
  "/add/": () => {
    render(addProduct, app);
  }
});
// router.on('/prd/:id', ({ data }) => render(() => productDetail(data), app))
router.notFound = () => {
  render(notFound());
};
router.resolve();
