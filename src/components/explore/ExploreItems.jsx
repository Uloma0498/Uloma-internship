import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ItemCard from "../ItemCard.jsx"

const ExploreItems = () => {
  const [explores, setExplores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleNum, setVisibleNum] = useState(8);
  

   useEffect(() => {
      async function fetchExplores() {
        const { data } = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore");
        setExplores(data);
        setLoading(false); 
      }
      fetchExplores();
    }, []);

    const loadMoreItems = () => {
      setVisibleNum(prevNum => prevNum + 4);
    };

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      <div>
      {loading ? (
        <p>Loading...</p>
      ) : (explores.slice(0, visibleNum).map((explore) => (
        <ItemCard key={explore.id} item={explore} />
      ))
      )}
      </div>
      {visibleNum < explores.length && (
      <div className="col-md-12 text-center">
        <Link onClick={loadMoreItems} to="" id="loadmore" className="btn-main lead">
          Load more
        </Link>
      </div>
      )}
    </>
  );
};

export default ExploreItems;
