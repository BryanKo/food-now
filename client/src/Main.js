import React, { Component } from "react";
import Category from "./Category";
import Distance from "./Distance";
import Cost from "./Cost";
import Rating from "./Rating";
import Button from "./Button";

class Main extends Component{
    render(){
        return(
            <div className="content">
                <div className="header-title">
                    <div className="title">FOOD.NOW</div>
                    <div className="account">account</div>
                </div>
                    {/* <div className="header">
                        <div className="menu"><NavLink exact to="/">Home</NavLink></div>
                        <div className="menu"><NavLink to="/category">Category</NavLink></div>
                        <div className="menu"><NavLink to="/mealtype">Meal Type</NavLink></div>
                        <div className="menu"><NavLink to="/distance">Distance</NavLink></div>
                        <div className="menu"><NavLink to="/cost">Cost</NavLink></div>
                        <div className="menu"><NavLink to="/rating">Rating</NavLink></div>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/category" component={Category}/>
                        <Route path="/mealtype" component={MealType}/>
                        <Route path="/distance" component={Distance}/>
                        <Route path="/cost" component={Cost}/>
                        <Route path="/rating" component={Rating}/>
                    </div> */}
                    <div id="contentHolder">
                        <Category></Category>
                        <Distance></Distance>
                        <Cost></Cost>
                        <Rating></Rating>
                        <Button></Button>
                    </div>
                    <div id="outputHolder">
                        <div id="outputdiv"></div>
                        <div id="outputName">store name</div>
                        <div id="outputAddress">store address</div>
<<<<<<< HEAD
                        {/* <a id="outputWebsite"></a> */}
                        <span><a id="outputWebsite">Click Here</a> for website</span>
=======
                        <div id="outputWebsite">store website</div>
>>>>>>> 695608e8ee2373d80c8479393ee84f48779d61cf
                        <div id="outputPhone">store phone</div>
                        <button className="button" onClick={this.goback.bind(this)}>Go Back</button>
                    </div>
            </div>
        );
    }
    goback(){
        window.location = '/';
    }
}
export default Main;
