import React, { Component } from "react";
import axios from 'axios';

class Button extends Component{
    render(){
        return(
            <button className="button" onClick={this.submitAll.bind(this)}>Food Now!</button>
        );
    }

    submitAll() {
      var genres = document.getElementById("foodChoices");
      var termString = sessionStorage.getItem('paramString');
      var mealType = sessionStorage.getItem('mealType');
      console.log("term after category, before meal type: " + termString);
      for(var i = 0; i < genres.children.length; i++){
        // if(genres.children[i].children[1].checked){
        //   console.log('checked');
        // }
        //console.log(genres.children[i].firstChild.children[0].checked);
        if(genres.children[i].firstChild.children[0].checked){
          console.log(genres.children[i].firstChild.firstChild);
          if(termString === 'undefined'){
            termString = genres.children[i].firstChild.innerText;
          }else{
            termString += "_"+genres.children[i].firstChild.innerText;
          }
        }
      }
      termString += "_"+mealType;
      console.log("term after mealtype: " + termString);

        // Compile all parameters into JSON object
        var search = {
          term: termString,
          radius: sessionStorage.getItem('radius'),
          price: sessionStorage.getItem('price')
        };
        console.log(search);

        axios.get('http://localhost:8080/yelpInput', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'applications/json',
          },
          params: {
            term: termString,
            radius: sessionStorage.getItem('radius'),
            price: sessionStorage.getItem('price')
          }
        }).then(function(response) {
            console.log(response.data);
            console.log(response.data.image_url);
            document.getElementById("contentHolder").style.display = "none";
            document.getElementById("outputHolder").style.display = "block";
            document.getElementById("outputdiv").style.backgroundImage = "url('"+response.data.image_url+"')";
            document.getElementById("outputName").innerHTML = response.data.name;
            document.getElementById("outputAddress").innerHTML = ""+response.data.location.address1+", "+response.data.location.city+", "+response.data.location.zip_code+"";
            //document.getElementById("outputWebsite").innerHTML = response.data.url;
            document.getElementById("outputPhone").innerHTML = response.data.phone;
            localStorage.setItem('item', JSON.stringify(response.data));
            sessionStorage.clear();
          }).catch(function(response) {
            console.log('error:');
            console.log(response);
          });
    }
}
export default Button;
