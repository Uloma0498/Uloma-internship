import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HotCollections = () => {
  const [authors, setAuthors] = useState([])
  
   async function fetchAuthors() {
    const { data } = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections")
    console.log(data)
    setAuthors(data)
  }
  useEffect(() => {
    fetchAuthors();
    }, [])

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
  };

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
          {authors.map((author) => (
            <div className="item col-lg-3 col-md-6 col-sm-6 col-xs-12" key={author.id}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={author.nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={author.authorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{author.title}</h4>
                  </Link>
                  <span>ERC-{author.code}</span>
                </div>
              </div>
            </div>
          ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
