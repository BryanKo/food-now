import React, { Component } from "react";
import{
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import MealType from "./MealType";
import Distance from "./Distance";
import Cost from "./Cost";
import Rating from "./Rating";

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                        <div className="header">
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
                        </div>
                </div>
            </HashRouter>
        );
    }
}
export default Main;