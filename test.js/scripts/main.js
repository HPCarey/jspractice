alert('Hello, World!')
// 1. Get a reference to the button element
let myButton = document.getElementById('button1');
// 2. Define some behaviour that should happen when the button is clicked
function handleClick() {
    // 2.1 Get a reference to the h1 element
    console.log('The button has been clicked');
    let myHeading = document.getElementById('page-heading');
    // 2.2 Change the text within the h1 element
    console.log('Before:', myHeading.textContent); 
    myHeading.textContent = 'Now I am Dynamic!!!';
    // 2.3 Change the element's background colour
    console.log('After:', myHeading.textContent);
    myHeading.style.backgroundColor = '#586e75';

}
// 3. Link the behaviour defined in handleClick to "clicks" on the button
myButton.addEventListener('click', handleClick);