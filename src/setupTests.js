// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

/* 
https://i.ibb.co/q99L6nk/po4.jpg
https://i.ibb.co/MZ7Lvpb/po3.jpg
https://i.ibb.co/WnmhMZN/po2.jpg
https://i.ibb.co/q99L6nk/po4.jpg
*/
// PRODUCTS JSON
// const products = [
//   {
//     img: "https://i.ibb.co/VSjhsr1/p1.webp",
//     title: "Olpe",
//     price: 30.0,
//     desc: "A combination of floral and animal designs arranged in four registers decorates the body of this Corinthian black-figure olpe, or pitcher",
//     status: "Pending"
//   },
//   {
//     img: "https://i.ibb.co/q99L6nk/po4.jpg",
//     title: "Tall Vase Aqua Barley",
//     price: 13.0,
//     desc: "Tall Vase Aqua Barley Matte on the outside and glossy on the inside, a soft gradient of Aqua and Barley plays with color and perspective both up close and afar",
//     status: "Pending"
//   },
//   {
//     img: "https://i.ibb.co/ydD09q4/p18.webp",
//     title: "Tall Vase Red Barley",
//     price: 13.0,
//     desc: "Tall Vase Aqua Barley Matte on the outside and glossy on the inside, a soft gradient of Aqua and Barley plays with color and perspective both up close and afar",
//     status: "Pending"
//   },
//   {
//     img: "https://i.ibb.co/MZ7Lvpb/po3.jpg",
//     title: "Night And White Opaque",
//     price: 15.0,
//     desc: "Midnight over Opaque White creates a starry night feel. Layered in every sense, each vessel’s glaze pattern is unique. ",
//     status: "Pending"
//   },
//   {
//     img: "https://i.ibb.co/WnmhMZN/po2.jpg",
//     title: "Large Ceramic Cup",
//     price: 35.0,
//     desc: "Honey Moisture Mask with Propolis Extract Designed in 2003, the Large Mug has quickly become one of our best sellers and a firm favorite with tea and coffee drinkers. ",
//     status: "Pending"
//   },
//   {
//     img: "https://i.ibb.co/VgffwnX/p13.jpg",
//     title: "Large Ceramic Cup",
//     price: 40.0,
//     desc: "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     status: "Pending"
//   },
//   {
//     img: "https://i.ibb.co/j5js032/p3.jpg",
//     title: "Large Ceramic Cup",
//     price: 19.0,
//     desc: "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     status: "Pending"
//   },
//   {
//     img: "https://i.ibb.co/TkYCfcX/p9.jpg",
//     title: "Glazed pot",
//     price: 14.0,
//     desc: "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     status: "Pending"
//   },
//   {
//     img: "https://i.ibb.co/tXc5tTv/po5.jpg",
//     title: "Black mug",
//     price: 14.0,
//     desc: "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     status: "Pending"
//   },
//   {
//     img: "https://i.ibb.co/hsnkrQv/po8.jpg",
//     title: "Black pottery",
//     price: 14.0,
//     desc: "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     status: "Pending"
//   },
//   {
//     img: "https://i.ibb.co/8XnYtJZ/po9.jpg",
//     title: "Glazed pot",
//     price: 14.0,
//     desc: "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     status: "Pending"
//   },
//   {
//     img: "https://i.ibb.co/0rRtBjW/po10.jpg",
//     title: "Glazed Vas",
//     price: 14.0,
//     desc: "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     status: "Pending"
//   }
// ]




// json
// [
//   {
//     "img": "https://i.ibb.co/VSjhsr1/p1.webp",
//     "title": "Olpe",
//     "price": 30,
//     "desc": "A combination of floral and animal designs arranged in four registers decorates the body of this Corinthian black-figure olpe, or pitcher",
//     "status": "Pending"
//   },
//   {
//     "img": "https://i.ibb.co/q99L6nk/po4.jpg",
//     "title": "Tall Vase Aqua Barley",
//     "price": 13,
//     "desc": "Tall Vase Aqua Barley Matte on the outside and glossy on the inside, a soft gradient of Aqua and Barley plays with color and perspective both up close and afar",
//     "status": "Pending"
//   },
//   {
//     "img": "https://i.ibb.co/ydD09q4/p18.webp",
//     "title": "Tall Vase Red Barley",
//     "price": 13,
//     "desc": "Tall Vase Aqua Barley Matte on the outside and glossy on the inside, a soft gradient of Aqua and Barley plays with color and perspective both up close and afar",
//     "status": "Pending"
//   },
//   {
//     "img": "https://i.ibb.co/MZ7Lvpb/po3.jpg",
//     "title": "Night And White Opaque",
//     "price": 15,
//     "desc": "Midnight over Opaque White creates a starry night feel. Layered in every sense, each vessel’s glaze pattern is unique. ",
//     "status": "Pending"
//   },
//   {
//     "img": "https://i.ibb.co/WnmhMZN/po2.jpg",
//     "title": "Large Ceramic Cup",
//     "price": 35,
//     "desc": "Honey Moisture Mask with Propolis Extract Designed in 2003, the Large Mug has quickly become one of our best sellers and a firm favorite with tea and coffee drinkers. ",
//     "status": "Pending"
//   },
//   {
//     "img": "https://i.ibb.co/VgffwnX/p13.jpg",
//     "title": "Large Ceramic Cup",
//     "price": 40,
//     "desc": "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     "status": "Pending"
//   },
//   {
//     "img": "https://i.ibb.co/j5js032/p3.jpg",
//     "title": "Large Ceramic Cup",
//     "price": 19,
//     "desc": "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     "status": "Pending"
//   },
//   {
//     "img": "https://i.ibb.co/TkYCfcX/p9.jpg",
//     "title": "Glazed pot",
//     "price": 14,
//     "desc": "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     "status": "Pending"
//   },
//   {
//     "img": "https://i.ibb.co/tXc5tTv/po5.jpg",
//     "title": "Black mug",
//     "price": 14,
//     "desc": "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     "status": "Pending"
//   },
//   {
//     "img": "https://i.ibb.co/hsnkrQv/po8.jpg",
//     "title": "Black pottery",
//     "price": 14,
//     "desc": "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     "status": "Pending"
//   },
//   {
//     "img": "https://i.ibb.co/8XnYtJZ/po9.jpg",
//     "title": "Glazed pot",
//     "price": 14,
//     "desc": "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     "status": "Pending"
//   },
//   {
//     "img": "https://i.ibb.co/0rRtBjW/po10.jpg",
//     "title": "Glazed Vas",
//     "price": 14,
//     "desc": "A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea .",
//     "status": "Pending"
//   }
// ]