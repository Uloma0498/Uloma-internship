import React, { useEffect, useState } from "react"; 
import EthImage from "../images/ethereum.svg"; 
import { Link, useParams } from "react-router-dom"; 
import AuthorImage from "../images/author_thumbnail.jpg"; 
import nftImage from "../images/nftImage.jpg"; 
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";


const ItemDetails = () => {
  const { nftId } = useParams(); // Getting nftId from the URL
    const [details, setDetails] = useState(null); // Initialize state to hold details
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`);
                console.log(data); // Log the data received from API
                setDetails(data); // Set the details received from API
                setLoading(false); // Set loading to false after data fetch
            } catch (error) {
                console.error("Error fetching item details:", error);
                setLoading(false); // Ensure loading is false even if there's an error
            }
        };

        fetchDetails(); // Call the fetch function
    }, [nftId]); // Dependency array with nftId, so it re-runs if nftId changes

    if (loading) {
        return <Skeleton />; // You can replace this with a skeleton loader
    }
    
    if (!details) {
        return <div>No details found for this item.</div>;
    }
  
  return (
    <div id="wrapper"> 
    <div className="no-bottom no-top" id="content"> 
    <div id="top"></div> 
    <section aria-label="section" className="mt90 sm-mt-0"> 
      <div className="container"> 
        <div className="row">
           <div className="col-md-6 text-center"> 
            <img src={details.nftImage} className="img-fluid img-rounded mb-sm-30 nft-image" alt="" /> 
             </div> 
            <div className="col-md-6"> <div className="item_info"> 
              <h2>{details.title} #{details.tag}</h2> 
              <div className="item_info_counts"> 
                <div className="item_info_views">
                   <i className="fa fa-eye">
                    </i> 
                    {details.views}
                    </div> 
                    <div className="item_info_like">
                       <i className="fa fa-heart">
                        </i>
                         {details.likes}
                    </div> 
                  </div> 
                  <p> {details.description} </p> 
                  <div className="d-flex flex-row"> 
                    <div className="mr40"> 
                      <h6>Owner</h6> 
                    <div className="item_author"> 
                    <div className="author_list_pp"> 
                      <Link to={`/author/${details.ownerId}`}> 
                      <img className="lazy" src={details.ownerImage} alt="" /> <i className="fa fa-check"></i> 
                      </Link>
                    </div> 
                    <div className="author_list_info"> 
                      <Link to={`/author/${details.ownerId}`}>{details.ownerName}</Link> 
                    </div>
                 </div> 
                </div> 
              <div></div> 
              </div> 
              <div className="de_tab tab_simple"> 
                <div className="de_tab_content"> 
                  <h6>Creator</h6> 
                  <div className="item_author"> 
                    <div className="author_list_pp"> 
                      <Link to={`/author/${details.creatorId}`}> <img className="lazy" src={details.creatorImage} alt="" /> 
                      <i className="fa fa-check"></i> 
                      </Link> 
                    </div> 
                    <div className="author_list_info"> 
                    <Link to={`/author/${details.creatorId}`}>{details.creatorName}</Link> 
                    </div> 
                  </div> 
                </div> 
                <div className="spacer-40"></div> 
                <h6>Price</h6> 
                <div className="nft-item-price"> 
                  <img src={EthImage} alt="" /> 
                  <span>{details.price}</span> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </section> 
  </div> 
</div>
);  
}

export default ItemDetails;
