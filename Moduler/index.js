// import { getData , postData } from "./common.js";

import postData, {getData} from "./common.js";

// getData();
// postData('shah');


// call back function

function get1(call ) {
    console.log("get 1")
    call();
}


function get2( ) {
    console.log("get 2")
}

function get3( ) {
    console.log("get 3")
}

get1(get3);

get1(
    function ( ) {
    console.log("get 2")
}
);

