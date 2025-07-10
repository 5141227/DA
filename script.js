/* A function is a named action. */
function hello() {

    /* An alert is a text pop-up */
    alert("Hello, world!")
    
} /* Enclose the action in {} */

function hello() {
    alert("Hello, world!")
}

document.addEventListener('click', hello);
/* "document" refers the website, 
   "click" to what you do, 
   "hello" to what JavaScript does. */

   function hello(event) {
    alert(event)
}

document.addEventListener('click', hello(event));

function hello(event) {
  alert(event.pageX)
}

function hello(event) {
  /* Find the element by id */
  const element = document.getElementById("name");
  /* Change the "left" value of the element's style */
  element.style["left"] = event.pageX + "px"; /* x is given in "px" */
  alert(event.pageX + "px"); /* So we can see it */
}

<div style="background:green;" onclick="hello()">
  <div id="name">
      Text
  </div>
</div>

function hello(event) {
    alert(3 * event.pageX / window.innerWidth)
}

function hello(event) {
    /* Find the element by id */
    const element = document.getElementById("pupil");
    /* Find the new "left" value*/
    const new = 3 * event.pageX / window.innerWidth;
    /* Update */
    element.style["left"] = new + "vmin";
}

document.addEventListener('click', hello(event));

function hello(event) {
    /* Find the element by id */
    const element = document.getElementById("pupil");
    /* Find the new "x" value*/
    const x = 3 * event.pageX / window.innerWidth;
    /* Find the new "y" value*/
    const y = 3 * event.pageY / window.innerHeight;
    /* Update */
    element.style["left"] = x + "vmin";
    element.style["top"] = y + "vmin";
}

document.addEventListener('click', hello(event));

function hello() {
    alert("Hello, world!")
}

function hello() {
    alert("Hello, world!")
}

document.addEventListener('click', hello);
/* "document" refers the website, 
   "click" to what you do, 
   "hello" to what JavaScript does. */

   function hello(event) {
    alert(event)
}

document.addEventListener('click', hello(event));

<div style="background:green;" onclick="hello()">
    Text
</div>

function hello(event) {
  alert(event.pageX)
}

function hello(event) {
  /* Find the element by id */
  const element = document.getElementById("name");
  /* Change the "left" value of the element's style */
  element.style["left"] = event.pageX + "px"; /* x is given in "px" */
  alert(event.pageX + "px"); /* So we can see it */
}

<div style="background:green;" onclick="hello()">
  <div id="name">
      Text
  </div>
</div>

function hello(event) {
    alert(3 * event.pageX / window.innerWidth)
}

function hello(event) {
    /* Find the element by id */
    const element = document.getElementById("pupil");
    /* Find the new "left" value*/
    const new = 3 * event.pageX / window.innerWidth;
    /* Update */
    element.style["left"] = new + "vmin";
}

document.addEventListener('click', hello(event));

function hello(event) {
    /* Find the element by id */
    const element = document.getElementById("pupil");
    /* Find the new "x" value*/
    const x = 3 * event.pageX / window.innerWidth;
    /* Find the new "y" value*/
    const y = 3 * event.pageY / window.innerHeight;
    /* Update */
    element.style["left"] = x + "vmin";
    element.style["top"] = y + "vmin";
}

document.addEventListener('click', hello(event));