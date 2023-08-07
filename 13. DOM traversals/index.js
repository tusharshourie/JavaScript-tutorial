/*let element = document.body;
let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen";*/

/*let element = document.querySelector("#vegetables");
let parent = element.parentElement;
parent.style.backgroundColor = "lightgreen";*/


/*let element = document.querySelector("#vegetables");
let sibling = element.nextElementSibling;
sibling.style.backgroundColor = "lightgreen";*/

let element = document.querySelector("#vegetables");
let children = Array.from(element.children);
children.forEach(child=>{

    child.style.backgroundColor = "lightgreen";

});


//.firstElementChild
//.lastElementChild            => will select the script element
//.parentElement               => will select the body of the element as its the parent
//.nextElementSibling          => dessert
//.previousElementSibling      =>fruits
//.children[]                  =>select the children... using index eg carrots
//.Array.from(.children)