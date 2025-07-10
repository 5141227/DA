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