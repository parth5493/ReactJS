import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import Item from "./item";
import "./style.css";
import Mac from './images/mac.png'
import Iphone from './images/iphone.png'
import Ipad from './images/ipad.png'
import AppleWatch from './images/watch.png'
import Airpods from './images/airpod.png'
import AirTag from './images/airtag.png'
import AppleTv from './images/appletv.png'
import HomePod from './images/homepod.png'
import Accessories from './images/accessories.png'
import AppleGiftCard from './images/applegift.png'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 2, itemsToShow: 2 },
  { width: 3, itemsToShow: 3 },
  { width: 4, itemsToShow: 4 },
  { width: 5, itemsToShow: 5 },
  { width: 6, itemsToShow: 6 },
  { width: 7, itemsToShow: 7 },
  { width: 8, itemsToShow: 8 },
];

function App() {
  return (
    <>
      
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <div>
            <Item >
              <img src={Mac} className="image" alt="" />
            </Item>  
            <div className="text-center">
              <Link >Mac</Link>
            </div>       
          </div>
          <div>
            <Item>
              <img src={Iphone} className="image" alt="" />
            </Item>
            <div className="text-center">
              <Link >iPhone</Link>
            </div>    
          </div>
          <div>
            <Item>
              <img src={Ipad} className="image" alt="" />
            </Item>
            <div className="text-center">
              <Link >iPad</Link>
            </div>    
          </div>
          <div>
            <Item>
              <img src={AppleWatch} className="image" alt="" />
            </Item>
            <div className="text-center">
              <Link >Apple Watch</Link>
            </div>    
          </div>
          <div>
            <Item>
              <img src={Airpods} className="image" alt="" />
            </Item>
            <div className="text-center">
              <Link >AirPods</Link>
            </div>    
          </div>
          <div>
            <Item>
              <img src={AirTag} className="image" alt="" />
            </Item>
            <div className="text-center">
              <Link >AirTag</Link>
            </div>    
          </div>
          <div>
            <Item>
              <img src={AppleTv} className="image" alt="" />
            </Item>
            <div className="text-center">
              <Link >Apple TV 4k</Link>
            </div>    
          </div>
          <div>
            <Item>
              <img src={HomePod} className="image" alt="" />
            </Item>
            <div className="text-center">
              <Link >HomePod</Link>
            </div>    
          </div>
          <div>
            <Item>
              <img src={Accessories} className="image" alt="" />
            </Item>
            <div className="text-center">
              <Link >Accessories</Link>
            </div>    
          </div>
          <div>
            <Item>
              <img src={AppleGiftCard} className="image" alt="" />
            </Item>
            <div className="text-center">
              <Link >Apple Gift Card</Link>
            </div>    
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default App;

