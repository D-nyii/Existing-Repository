/* code goes here */


var first = document.getElementById("first");

console.log(first);
console.log(first.firstChild);
console.log(first.firstChild.nextSibling);
console.log(first.parentNode);

var stories = document.getElementById("stories");

for (var i = 0; i < stories.childNodes.length; i++) {
    console.log(
        "child " + i + " = " + stories.childNodes[i] +
        " nodeType=" + stories.childNodes[i].nodeType
    );

    if (stories.childNodes[i].nodeType === 1) {
        stories.childNodes[i].style.backgroundColor = "green";
    }
}
