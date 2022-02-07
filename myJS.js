/*
* Excercise 1
*
*/

var color = document.getElementById('color-block')
var color_name = document.getElementById('color-name')
color.addEventListener("click", changeColor)



/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){

    //Write a condition determine what color it should be changed to
    // console.log(this.style.backgroundColor)
    if(this.style.backgroundColor === 'rgb(240, 128, 128)'){
        //change the background color using JS
        this.style.backgroundColor = '#FF0000'
        //Change the text of the color using the span id color-name
        color_name.innerHTML = '#FF0000'
    }
    else {
        //change the background color using JS
        this.style.backgroundColor = '#F08080'
        //Change the text of the color using the span id color-name
        color_name.innerHTML = '#F08080'

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
var convert = document.getElementById('convertbtn')
convert.addEventListener("click", convertTemp)

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){

    var input = document.getElementById('f-input').value
    //Calculate the temperature here
    //
    // console.log(input)
    var input_num = parseFloat(input)
    // console.log(input_num)
    // console.log(typeof(input_num))
    document.getElementById('c-output').innerHTML = (input_num-32)*5/9
    //Send the calculated temperature to HTML

}


