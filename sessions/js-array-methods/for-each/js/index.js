const colors = [
	"#343434",
	"#7FB5B5",
	"#633A34",
	"#354D73",
	"#F3A505",
	"#2A6478",
	"#CC0605",
	"#497E76",
	"#D36E70",
	"#FF2301",
	"#4C514A",
	"#2E3A23",
	"#5D9B9B",
	"#474A51",
	"#EFA94A",
	"#4D5645",
	"#606E8C",
	"#A5A5A5",
];

/*
1: The goal of this exercise is to create colored boxes from the array of hex codes. For that you will need to use the forEach method!
  1.1: Create an anonymous array function inside the forEach function call which receives one input, namely the colorCode.
  1.2: inside this arrow function do the following:
    - create a new div with the document.createElement method.
    - add the class 'color-box' to it.
    - set the background color of the box by using the .style.backgroundColor property.
    - append the box to the document.body.
*/

colors.forEach("???");

/*
Instead of writing the callback function directly inside the function call, we can use a function reference as well.
  1.3: Create a new function called renderColorBox which has one input parameter called colorCode.
  1.4: Copy and paste your code from the arrow function into this renderColorBox
  1.5: Call the forEach method on th colors array and pass to it the reference to renderColorBox.
*/
