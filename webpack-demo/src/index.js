import _ from 'lodash';
import './style.css';


function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 

    // Add the image to our existing div.
    return element;
  }
  
  document.body.appendChild(component());
  index.html