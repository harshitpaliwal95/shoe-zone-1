import { v4 as uuid } from "uuid";
// man catagory images
import nike_air_max_270 from "./db-assets/nike-air-max-270.webp";
import nike_air_zoom_AIR from "./db-assets/air-zoom-pegasus-38-air-jordan-moss-mens-road-running-shoes-lq7PZZ.jpg";
import nike_air_max_90 from "./db-assets/Nike Air Max 90.webp";
import nike_blazer_mid_77 from "./db-assets/nike blazer mid77.webp";
import Nike_air_force_107 from "./db-assets/nike air force 107.webp";
import nike_react_miler from "./db-assets/nike react miler 2 shield.webp";
import nike_bassi_jdi from "./db-assets/nike benasi jdi.webp";
import nike_air_max_terrace_cape90 from "./db-assets/nike air max terrascape 90.webp";
// women catagory
// import nike_blazer_low from "./db-assets/nike blazer low platform next nature.webp";
export const products = [
  {
    _id: uuid(),
    productName: "Nike air max 270",
    price: 8999,
    image: nike_air_max_270,
    categoryName: "mens",
  },
  {
    _id: uuid(),
    productName: "Nike Air Zoom 38 A.I.R.",
    price: 9100,
    image: nike_air_zoom_AIR,
    categoryName: "mens",
  },
  {
    _id: uuid(),
    productName: "Nike Air Max 90",
    price: 7000,
    image: nike_air_max_90,
    categoryName: "mens",
  },
  {
    _id: uuid(),
    productName: "Nike Blazer Mid '77",
    price: 6500,
    image: nike_blazer_mid_77,
    categoryName: "mens",
  },
  {
    _id: uuid(),
    productName: "nike air  force 1 07",
    price: 8000,
    image: Nike_air_force_107,
    categoryName: "mens",
  },
  {
    _id: uuid(),
    productName: "nike react miler 2 shiield",
    price: 7599,
    image: nike_react_miler,
    categoryName: "mens",
  },
  {
    _id: uuid(),
    productName: "Nike Bassi JDI",
    price: 1000,
    image: nike_bassi_jdi,
    categoryName: "mens",
  },
  {
    _id: uuid(),
    productName: "Nike Air Max Terrace 90",
    price: 9999,
    image: nike_air_max_terrace_cape90,
    categoryName: "mens",
  },
];
