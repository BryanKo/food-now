import React, { Component } from "react";
//import { Carousel } from 'react-responsive-carousel';
//require ('react-responsive-carousel/lib/styles/carousel.css');
// import burger from './images/burger.jpg';
// import nachos from './images/nachos.jpg';
// import chinese from './images/chinese.jpg';
import axios from 'axios';
class Category extends Component {
  render() {
    return (
      <div>
        <h2>1. Choose a category! -- add as many as you want!</h2>
        <div className="foodChoice">
          {/* <div className="foodCarousel">
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
          </div> */}
          <div className="foodChoices" id="foodChoices">
            <div className="genre" id="chinese"><span className="imageTitle">Chinese<input type="checkbox" value="chinese" /></span></div>
            <div className="genre" id="mexican"><span className="imageTitle">Mexican<input type="checkbox" value="mexican" /></span></div>
            <div className="genre" id="italian"><span className="imageTitle">Italian<input type="checkbox" value="italian" /></span></div>
            <div className="genre" id="japanese"><span className="imageTitle">Japanese<input type="checkbox" value="japanese" /></span></div>
            <div className="genre" id="american"><span className="imageTitle">American<input type="checkbox" value="american" /></span></div>
          </div>
          
          <div className="distance-content">
            <label>Breakfast<input type="radio" onClick={setTerm} id="breakfast" value="Breakfast" name="mealType"/></label>
            <label>Lunch<input type="radio" onClick={setTerm} id="lunch" value="Lunch" name="mealType"/></label>
            <label>Dinner<input type="radio" onClick={setTerm} id="dinner" value="Dinner" name="mealType"/></label>
          </div>
          <form>
            <span className="icon"><i className="fa fa-search"></i></span>
            <input type="text" id="uiCat" placeholder="Add new item"/>
            <button type="button" id="addbutton" onClick={addItem}>Add</button>
            {/* <input type="submit" value="submit"/> */}
	    {/* <NavLink to="/Mealtype">
              <input type="submit" id="next" onClick={this.myfunction.bind(this)} value="Submit"/>
	    </NavLink> */}
          </form>

        </div>

      </div>
    );
  }

  // yelp () {
  //   var term = document.getElementById("uiCat").value;
  //   console.log(term);
  //   // console.log("hello");
  //   axios.get('http://localhost:8080/yelpInput', {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'applications/json',
  //     },
  //     params: {
  //       term: term
  //     }
  //   })
  //     .then(function(response) {
  //       console.log(response.data);
  //       localStorage.setItem('item', JSON.stringify(response.data));
  //       console.log("=== " + localStorage.getItem('item'));
  //     }).catch(function(response) {
  //       console.log('error:');
  //       console.log(response);
  //     });
  // }
}
var paramString;
sessionStorage.setItem('paramString', paramString);
paramString = sessionStorage.getItem('paramString');
// Sets user's term parameter
function setTerm(radio) {
  console.log(radio.target.id);
  sessionStorage.setItem('mealType', radio.target.id);
}
function addItem(button){
  // var temp = localStorage.getItem('term');
  // console.log(temp+"+"+document.getElementById("uiCat").value);
  // temp+"+"+document.getElementById("uiCat").value;
  // localStorage.setItem('term', temp);
  if(paramString === "undefined"){
    console.log('no string');
    paramString = document.getElementById("uiCat").value;
  }else{
    paramString += "+"+document.getElementById("uiCat").value;
  }
  sessionStorage.setItem('paramString', paramString);
}
// function setCheck(checkbox){
//   var genres = document.getElementById("foodChoices");
//   console.log(genres.children);
//   for(var i = 0; i < genres.children.length; i++){
//     // if(genres.children[i].children[1].checked){
//     //   console.log('checked');
//     // }
//     console.log(genres.children[i].firstChild.children.checked);
//   } 
// }

export default Category;
