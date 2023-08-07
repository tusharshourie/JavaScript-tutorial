// import {PI, getCircumference, getArea} from "./math_util.js";
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);

//  ***** IF THIS ERROR OCCURS FOLLOW THE BELOW MENTIONED STEPS

/*Access to script at 'file:///C:/Users/Win10/Desktop/JavaScipt/10/index.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.
index.html:11     GET file:///C:/Users/Win10/Desktop/JavaScipt/10/index.js net::ERR_FAILED */                               


//install the web server
//   --- npm install -g http-server

//run the webserver
//  --- http-server

// http://localhost:8080/index.html paste this in the web browser and the html file will open
// now the code will work