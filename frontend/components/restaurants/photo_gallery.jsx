import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PhotoGallery extends React.Component {
  componentDidMount(){
    const rightScroll = document.querySelector(".scroll-right");
    const cuisinesList = document.querySelector(".cuisines-list");
    if (cuisinesList.offsetWidth === cuisinesList.scrollWidth) {
      rightScroll.style.display = "none"
    }
  }

  handleScroll(e) {
    const cuisinesList = document.querySelector(".cuisines-list");
    const leftScroll = document.querySelector(".scroll-left");
    const rightScroll = document.querySelector(".scroll-right");
    if (cuisinesList.scrollLeft === 0) {
      leftScroll.style.display = "none"
    } else {
      leftScroll.style.display = "block"
    }

    if (cuisinesList.offsetWidth === cuisinesList.scrollWidth) {
      rightScroll.style.display = "none"
    }

    const leftPos = cuisinesList.scrollLeft;
    const ulWidth = cuisinesList.offsetWidth;
    var scrollwidth = cuisinesList.scrollWidth;
    if (leftPos === scrollwidth - ulWidth) {
      rightScroll.style.display = "none"
    } else {
      rightScroll.style.display = "block"
    }
  }

  handleScrollClick(btn){
    return e => {
      e.preventDefault();
      const cuisinesList = document.querySelector(".cuisines-list");
      btn === "right" ? cuisinesList.scrollLeft += 40 : cuisinesList.scrollLeft -= 40
    }
  }

  handleResize(){
    const rightScroll = document.querySelector(".scroll-right");
    const cuisinesList = document.querySelector(".cuisines-list");
    if (cuisinesList.offsetWidth === cuisinesList.scrollWidth) {
      rightScroll.style.display = "none"
    } else {
      rightScroll.style.display = "block"
    }
  }

  render(){
    window.addEventListener('resize', this.handleResize)
    return (
      <div className="photo-container">
        <div className="cuisines-list" onScroll={this.handleScroll}>
          <div className="scroll-left" onClick={this.handleScrollClick("left")}>
            <div className="scroll-icons" >
              <FontAwesomeIcon icon="angle-left" />
            </div>
          </div>

          {this.props.photos.map(
            (imageUrl, idx) => <div key={idx} className="image-container"><img src={imageUrl}/></div>
          )}

          <div className="scroll-right" onClick={this.handleScrollClick("right")}>
            <div className="scroll-icons" >
              <FontAwesomeIcon icon="angle-right" />
            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default PhotoGallery;
