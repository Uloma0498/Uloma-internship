import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";
import Skeleton from "../UI/Skeleton";
import NftItem from "../NftItem";

const NewItems = () => {
  const [newItems, setNewItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchNewItems() {
      const { data } = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems");
      setNewItems(data);
      setLoading(false); 
    }
    fetchNewItems();
  }, []);

  const options = {
    loop: true,
    margin: 10,
    dots : false,
    nav: true,
    responsive: {
    0:    { items: 1 },
    576:  { items: 2 },
    992:  { items: 3 },
    1200: { items: 4 },
  },
  };

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 data-aos="fade-zoom-in" data-aos-delay="100" data-aos-easing="ease-in-back" data-aos-offset="0">New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {loading ? (
            <Skeleton width="100%" height="200px" borderRadius="10px" />
          ) : (
          <OwlCarousel className="owl-theme" {...options}>
           {newItems.map((item) => (
            <div className="item" key={item.id}>
              <NftItem item={item} />
              </div>
           ))}
          </OwlCarousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
