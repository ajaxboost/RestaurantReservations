import React from "react";
import TopCusinines from "./top_cuisines_index";
import HowitWorks from "./how_it_works";
import Splash from "./spash";
import Boroughs from "./boroughs";


class HomePage extends React.Component{

  render(){
    return (
      <>
      <Splash />
      <main id="homepage-container">
        <div id="homepage-content">
          <section className="top-cuisines-container">
            <div className="home-subheaders">
              <h2>How does it works</h2>
            </div>
            <HowitWorks />
          </section>
            <section className="top-cities-container">
              <div className="home-subheaders">
                <h2>About this project</h2>
              </div>

              <p className="about-us-content">
                A restaurant (French: [ʁɛstoʁɑ̃] (About this soundlisten)), or an eatery, is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast food restaurants and cafeterias, to mid-priced family restaurants, to high-priced luxury establishments.
              </p>
              <p className="about-us-content">
                In Western countries, most mid-to high-range restaurants serve alcoholic beverages such as beer and wine. Some restaurants serve all the major meals, such as breakfast, lunch, and dinner (e.g., major fast food chains, diners, hotel restaurants, and airport restaurants). Other restaurants may serve only a single meal (for example, a pancake house may only serve breakfast) or they may serve two meals (e.g., lunch and dinner).
              </p>
            </section>
        </div>
      </main>
      </>
    )
  }
}

export default HomePage;
