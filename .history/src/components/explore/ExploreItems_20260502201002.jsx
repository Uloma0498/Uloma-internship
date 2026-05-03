import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NftItem from "../NftItem";
import Skeleton from "../UI/Skeleton";

const ExploreItems = () => {
  const [explores, setExplores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleNum, setVisibleNum] = useState(8);
  const [filter, setFilter] = useState("");
  

   useEffect(() => {
      const fetchExplores = async () => {
        const apiUrl = filter
         ? `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`
         : "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore";

        const { data } = await axios.get(apiUrl);
        setExplores(data);
        setLoading(false); 
      };
      fetchExplores();
    }, [filter]);

    const loadMoreItems = () => {
      setVisibleNum(prevNum => prevNum + 4);
    };

    const handleFilterChange = (event) => {
      setFilter(event.target.value);
      setVisibleNum(8);
    };

  return (
    <>
      <div>
        <select id="filter-items" onChange={handleFilterChange} defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      <div className="row">
      {loading ? (
        <Skeleton width="100%" height="200px" borderRadius="10px" />
      ) : (explores.slice(0, visibleNum).map((explore) => (
        <div 
          key={explore.id}
          className="col-lg-3 col-md-4 col-sm-6 mb-4"
          style={{ display: "block", backgroundSize: "cover" }}
        >
        <NftItem item={explore} />
        </div>
      ))
      )}
      </div>
      {visibleNum < explores.length && (
      <div className="col-md-12 text-center">
        <Link onClick={loadMoreItems} to="" id="loadmore" className="btn-main lead" data-aos="fade-zoom-in" data-aos-delay="200" data-aos-easing="ease-in-back" data-aos-offset="0">
          Load more
        </Link>
      </div>
      )}
    </>
  );
};

export default ExploreItems;
