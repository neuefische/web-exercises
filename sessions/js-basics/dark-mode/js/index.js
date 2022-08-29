console.clear();

/*
Add some interactivity to this website.
 - if the body has the class "dark", the page is displayed in dark mode
 - query all 3 buttons with the 'data-js' attribute
 - add an event listener to each button:
    - "switch to dark mode" button always adds the class "dark" to the body
    - "switch to light mode" button always remvoes the class "dark" from the body
    - "toggle mode" button toggles the class "dark" on the body
*/

const bodyElement = document.querySelector('[data-js="body"]');
