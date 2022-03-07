import _ from 'lodash'
import './styles.css'
// import WebpackImage from './assets/images/site-logo.1fcab817090e78435061.svg'
//This fucking way is possible but I didn't find the solution yet.
// import Styles from 'style-loader!css-loader?modules!./styles.css';
import DataJson from './data/example.json'
import Notes from './data.csv'



function component() {
  console.log(DataJson,1)
  console.log(Notes)
  const element = document.createElement('div');

 // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //Add the image to our existing <div className="hello"></div>
  // const myImage = new Image();
  // myImage.src = WebpackImage;
  // element.appendChild(myImage)
  return element;
}

document.body.appendChild(component());
