import _ from 'lodash';
import printMe from './print.js';
function component() {

  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());


//This is useful when the page is not reloaded usin webpak-hot-middleare,
//https://github.com/webpack-contrib/webpack-hot-middleware/issues/293
//the only bad thing is the old changes are visibles in the view
// module.hot.accept((err) => {
//   console.log("reloading self");
//   window.location.reload();
// })

// if (import.meta.webpackHot) {
//   import.meta.webpackHot.accept();
// }

//This is used when we enabling Hot Module Replacement
// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printMe module!');
//     printMe();
//   })
// }