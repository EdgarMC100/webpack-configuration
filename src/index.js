import _ from 'lodash'
import './styles.css'
import WebpackImage from './assets/images/site-logo.1fcab817090e78435061.svg'
//This fucking way is possible but I didn't find the solution yet.
// import Styles from 'style-loader!css-loader?modules!./styles.css';
import data from './data'

function component() {
  console.log(data)
  const element = document.createElement('div');

 // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //Addthe image to our existing div.
  const myImage = new Image();
  myImage.src = WebpackImage;
  return element;
}

document.body.appendChild(component());
