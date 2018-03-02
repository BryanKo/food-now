import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
//require ('react-responsive-carousel/lib/styles/carousel.css');
import burger from './images/burger.jpg';
import nachos from './images/nachos.jpg';
import chinese from './images/chinese.jpg';
import axios from 'axios';
class Category extends Component {
  render() {
    return (
      <div>
        <h2>1. Choose a category! -- add as many as you want!</h2>
        <div className="foodChoice">
          <div className="foodCarousel">
            <Carousel showArrows={true} useKeyboardArrows={true} showThumbs={false} infiniteLoop={true} showIndicators={false} dynamicHeight={true} onClickItem={select}>
                <div>
                    <img src={burger} alt="American"/>
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
          <div className="distance-content">
            <label>Breakfast<input type="radio" onClick={breakfast} id="breakfast" value="Breakfast" name="mealType"/></label>
            <label>Lunch<input type="radio" onClick={lunch} id="breakfast" value="Breakfast" name="mealType"/></label>
            <label>Dinner<input type="radio" onClick={dinner} id="breakfast" value="Breakfast" name="mealType"/></label>
          </div>
          <form onSubmit={this.yelp.bind(this)}>
            <input type="text" id="uiCat" placeholder="Search..."/>
            <input type="submit" value="submit"/>
	    {/* <NavLink to="/Mealtype">
              <input type="submit" id="next" onClick={this.myfunction.bind(this)} value="Submit"/>
	    </NavLink> */}
          </form>
          
        </div>
        
      </div>
    );
  }

  yelp () {
    var term = document.getElementById("uiCat").value;
    console.log(term);
    // console.log("hello");
    axios.get('http://localhost:8080/yelpInput', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'applications/json',
      },
      params: {
        term: term
      }
    })
      .then(function(response) {
        console.log(response.data);
        localStorage.setItem('item', JSON.stringify(response.data));
        console.log("=== " + localStorage.getItem('item'));
      }).catch(function(response) {
        console.log('error:');
        console.log(response);
      });
  }
}
function select(){
  console.log("test");
}
function breakfast(){
  console.log("'term':'breakfast'");
}
function lunch(){
  console.log("'term':'lunch'");
}
function dinner(){
  console.log("'term':'dinner'");
}

export default Category;
