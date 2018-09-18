// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  //checks if element has target class and adds it to results
  var getClassName = function(element) {
    var classes = element.classList;
    //not all elements have classes
    if (classes) {
      //loop through all classes of element
      for (var i = 0; i < classes.length; i++) {
        //check if class matches className
        if (classes[i] === className) {
          //if matches, push the entire element into results array
          result.push(element);
        }
      }
    } 
  };

  //checks if children have target class
  var getChildren = function(element) {
    //creates array of children of element
    var children = element.childNodes;
    //loop through array of children
    for (var i = 0; i < children.length; i++) {
      //checks if children have target class 
      getClassName(children[i]);
      //checks if children's children have target class
      getChildren(children[i]);
    }
  };
  

  // selects body element
  var body = document.body;
  //creates empty array to push matching elements into
  var result = [];
  //check if body has target class
  getClassName(body)
  //check if body's children have target class
  getChildren(body);
  return result;
  



};

//You should use document.body, element.childNodes, and element.classList

//make sure to check element, not just the children
