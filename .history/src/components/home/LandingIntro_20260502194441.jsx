import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init(
    {
        duration: 1000,
        easing: "ease-in-out",
        once: true
    }
);

const LandingIntro = () => {
  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row" data-aos="fade-zoom-in" data-aos-delay="300">
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_wallet"></i>
              <div className="text">
                <h4 className="" data-aos="fade-up" data-aos-delay="600">
                  Set up your wallet
                </h4>
                <p data-aos="fade-up" data-aos-delay="800">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_wallet"></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_cloud-upload_alt"></i>
              <div className="text">
                <h4 className="" data-aos="fade-up" data-aos-delay="600">
                  Add your NFT's
                </h4>
                <p data-aos="fade-up" data-aos-delay="800">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_cloud-upload_alt"></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_tags_alt"></i>
              <div className="text">
                <h4 className="" data-aos="fade-up" data-aos-delay="600">
                  Sell your NFT's
                </h4>
                <p data-aos="fade-up" data-aos-delay="800">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_tags_alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
