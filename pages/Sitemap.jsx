import React, { useState } from "react";
import { IMG } from "../assets/img";

const Sitemap = () => {
  const lists = new Array(4).fill([
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ]);

  return (
    <div className="boot-container">
      <SitemapBanner />
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {lists.map((list, index) => (
            <ul key={index} className="text-left">
              <li className="font-bold text-xl">{list[0]}</li>
              {list.slice(1).map((item, i) => (
                <li key={i} className="text-xl">
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;

const SitemapBanner = () => (
  <section style={{ backgroundImage: `url(${IMG.ContactBanner})` }}>
    <div className="boot-container contact-banner">
      <p data-aos="fade-down">Contact Us</p>
      <h2 data-aos="zoom-in-up">Talk to Our Sales Executive</h2>
    </div>
  </section>
);
