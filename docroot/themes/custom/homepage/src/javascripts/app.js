"use strict";

import Collapse from 'bootstrap';
import React from 'react';
import Slider from "react-slick";
import ReactDOM from 'react-dom';

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    let _this = this;

    fetch('http://newell.epdemos.com/cortex/navigations/newell?zoom=element:child',
      {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer b16d246d-4745-498e-a3b2-a0729b4dac7e',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

      })
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function (data) {
        var categories = {jsonCategories: []};
        for (var i = 0; i < data._element[1]._child.length; i++) {
          categories.jsonCategories.push(data._element[1]._child[i]["display-name"]);
        }
        console.log(categories);

        let stories = [];
        Object.entries(categories.jsonCategories).forEach(([key, value]) => {
          stories[key] = value;
        });

        _this.setState({
          categories: stories,
        });

      });
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return <Slider {...settings}>
      {
        this.state.categories.map((category, index) => {
          return (
            <article className="col">
              <div className="spacer"></div>
              <div className="circle"><h1><a href="#">{category}</a>
              </h1></div>
            </article>
          )
        })
      }
    </Slider>;


  }
}


class SimpleSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stories: [],
      images: [],
      price: []
    };
  }

  componentDidMount() {
    let _this = this;

    fetch('http://newell.epdemos.com/cortex/searches/newell/keywords/form?followlocation&zoom=element:definition,element:price',
      {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer b16d246d-4745-498e-a3b2-a0729b4dac7e',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({"keywords": "all brands"}),

      })
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function (data) {
        var Products = {data: []};

        //Loop through each product to rebuild a simpler product response
        for (var i = 0; i < data._element.length; i++) {

          //Get Product Name
          var pName = data._element[i]._definition[0]["display-name"];

          // Get Product Link
          var pLink = data.links[i].href;

          // Get Price
          var pPrice = data._element[i]._price[0]["list-price"][0].display;

          // Get image URL
          for (var j = 0; j < data._element[i]._definition[0].details.length; j++) {
            if (data._element[i]._definition[0].details[j]["display-name"] === "Newell Product Images") {
              var pImage = data._element[i]._definition[0].details[j]["display-value"];
            }
          }


          var product = {productName: pName, imageUrl: pImage, link: pLink, price: pPrice,};
          Products.data.push(product);

        }
        console.log(Products);

        let stories = [];
        let images = [];
        let price = [];
        Object.entries(Products.data).forEach(([key, value]) => {
          var arr = value.imageUrl.split(",");
          var fst = arr.pop();

          stories[key] = value.productName;
          images[key] = fst;
          price[key] = value.price;
        });

        _this.setState({
          stories: stories,
          images: images,
          price: price
        });

      });

  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    const options = [];

    return <Slider {...settings}>
      {
        this.state.images.map((image, index) => {
          return (
            <div className="card" key={index + 1}>
              <img className="card-img-top" key={index + 2} src={image} alt="Card image"></img>
              <div className="card-body">
                <h4 className="card-title" key={index + 5}>{this.state.stories[index]}</h4>
                <p className="card-text" key={index + 6}>{this.state.price[index]}</p>
                <a href="#" className="card-btn btn btn-primary">Add to Cart</a>
              </div>
            </div>
          )
        })
      }


    </Slider>;


  }
};

ReactDOM.render(<SimpleSlider/>, document.getElementById('app'));
ReactDOM.render(<Categories/>, document.getElementById('categories'));

console.log('app.js has loaded!');
