import React, { Component } from "react";
import Category from "./Category";
import Distance from "./Distance";
import Cost from "./Cost";
import Rating from "./Rating";
import Button from "./Button";
import firebase from "./firebase";

class Main extends Component{
    render(){
        return(
            <div className="content">
                <div className="header-title">
                    <div className="title">FOOD.NOW</div>
                        <div className="account">
                            <i className="far fa-user"></i>&nbsp;&nbsp;<span id="name">Account</span>
                            <div></div>
                            <button className="button-sign" onClick={this.SignIn.bind(this)}>SIGN IN</button>
                            <button className="button-sign" onClick={this.SignOut.bind(this)}>SIGN OUT</button>
                        </div>
                        
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
                        <div className="outputWebsite"><a id="outputWebsite">Click Here</a> for website</div>
                        <div id="outputPhone">store phone</div>
                        <button className="button" onClick={this.goback.bind(this)}>Go Back</button>
                    </div>
            </div>
        );
    }
    goback(){
        window.location = '/';
    }
    SignIn(){
        console.log("HERE");
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          document.getElementById("name").innerHTML = "User: " + user.email;
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      }
      SignOut(){
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
        });
        document.getElementById("name").innerHTML = "No one signed in";
      }
}

  


export default Main;
