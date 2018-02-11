import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
//require ('react-responsive-carousel/lib/styles/carousel.css');
import burger from './images/burger.jpg';
import nachos from './images/nachos.jpg';
import chinese from './images/chinese.jpg';
class Category extends Component {
  render() {
    return (
      <div>
        <h2>1. Choose a category! -- add as many as you want!</h2>
        <div class="foodChoice">
          <div class="foodCarousel">
            <Carousel showArrows={true} useKeyboardArrows={true} showThumbs={false} infiniteLoop={true} showIndicators={false} dynamicHeight={true}>
                <div>
                    <img src={burger} alt="burger"/>
                    <p className="legend">American</p>
                </div>
                <div>
                    <img src={chinese} alt="chinese"/>
                    <p className="legend">Chinese</p>
                </div>
                <div>
                    <img src={nachos} alt="nachos"/>
                    <p className="legend">Mexican</p>
                </div>
            </Carousel>
          </div>
          
          <form>
            <input type="text" id="uiCat" placeholder="Search..."/>
            <input type="submit" onClick={this.myfunction.bind(this)} value="Submit"/>
          </form>
        </div>
      </div>
    );
  }

  myfunction () {
    console.log(document.getElementById("uiCat").value);
    // console.log("hello");
  }
}

export default Category;