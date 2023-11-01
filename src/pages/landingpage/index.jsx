import React from "react";
import header_img from "../../assets/header.png";
import logo from "../../assets/logo.png";

const ListItem = ({ title, icon }) => {
  return (
    <div className="text-orange-500 px-3 py-4 shadow- w-max flex flex-col items-center gap-y-4">
      <i className={`bi bi-${icon} text-4xl lg:text-5xl`}></i>
      <p className="text-xs lg:text-xl font-semibold">{title}</p>
    </div>
  );
};

const Landingpage = () => {
  return (
    <section className="px-4 lg:px-20 py-7">
      <div className="flex items-center">
        <img src={logo} className="w-20 h-20" alt="Logo" />
        <h1 className="text-2xl font-bold text-orange-400">Rees' Kitchen</h1>
      </div>

      <article className="flex flex-col lg:flex-row items-center justify-between gap-6 my-7 pt-11 lg:pt-0">
        <div>
          <h2 className="text-4xl lg:text-6xl font-bold text-orange-400">
            Delicious taste at your doorstep
          </h2>
          <p className="my-6 text-base lg:text-sm text-gray-400">
          Indulge in the exquisite flavors of our culinary creations, meticulously prepared and delivered to your doorstep. From gourmet meals to mouthwatering treats, experience a world of delicious taste without stepping outside. Elevate your dining experience with the convenience of doorstep delivery, making every meal a delightful adventure for your taste buds.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <a
              href='https://download1649.mediafire.com/gbwysck69jfg6pXrR5STT5G2pb_HM-43Q41uXM-UZrQcAB3zh9ZtUhUR1W2NqdWK0r5Wtq4m6QmDi2teBFJMv8HCTRhiYIs-ObXyagY2YFr28PhcASh3kFub4Mt-uQNsPO1XyYPkrJoENsB6vui3rqKrNIquvH7auRljhJSB2mDp-nOx/ud26cptjv81co3a/Ree%5C%27s_Kitchen.apk'
              className="bg-orange-400 text-white text-center rounded-xl font-medium px-4 py-2"
              download
            >
              Download for Android
            </a>
            <a
              href=""
              className="border-2 border-orange-400 text-orange-400 text-center rounded-xl px-4 py-2"
            >
              Download For iOS
            </a>
          </div>
        </div>
        <img
          src={header_img}
          alt="Header"
          className="h-max lg:h-[500px] mix-blend-difference"
        />
      </article>

      <article className="py-20">
        <h2 className="text-2xl lg:text-4xl text-center font-bold text-orange-400">
          Delicious taste at your doorstep
        </h2>
        <p className="my-4 text-center text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between place-items-center py-9">
          <ListItem title="Fresh Food" icon="egg-fried" />
          <ListItem title="Easy to place an order" icon="bag-check" />
          <ListItem title="Discount and offers" icon="percent" />
          <ListItem title="Fast Delivery" icon="truck" />
        </div>
      </article>
    </section>
  );
};

export default Landingpage;
