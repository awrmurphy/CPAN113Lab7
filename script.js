
var button = document.getElementById("testButton");
var text = document.getElementById("input1");
var submitButton = document.getElementById("submitButton");
var resetButton = document.getElementById("resetButton");

button.addEventListener("mouseenter",function()
{this.style.backgroundColor = getComputedStyle(document.documentElement,null).getPropertyValue('--hoverColour');
 this.style.boxShadow = "2px 2px 10px "+getComputedStyle(document.documentElement,null).getPropertyValue('--fontColour');
 console.log("Mouse is hovering testButton");
 
});

button.addEventListener("mouseleave",function()
{
    this.style.backgroundColor =  getComputedStyle(document.documentElement,null).getPropertyValue('--backgroundColour');
    this.style.boxShadow = "";
    console.log("Mouse left");
    
});

button.addEventListener("click", function(){
    document.getElementById("testButtonMessage").innerHTML ="You Clicked!"
});

text.addEventListener("focus",function(){
    this.style.backgroundColor = "lightyellow";
    this.style.color = "black";
    console.log("Focus is on text1");
    
});

text.addEventListener("blur",function(){
    this.style.backgroundColor = getComputedStyle(document.documentElement,null).getPropertyValue('--hoverColour');
    this.style.color = getComputedStyle(document.documentElement,null).getPropertyValue('--fontColour');
    console.log("Focus has left text1");
    document.getElementById("message").innerHTML = "Goodbye!"
});

text.addEventListener("keyup",function(){
    document.getElementById("message").innerHTML = text.value;
    console.log(text.value);
});

submitButton.addEventListener("mouseenter",function()
{this.style.backgroundColor = getComputedStyle(document.documentElement,null).getPropertyValue('--hoverColour');
 this.style.boxShadow = "2px 2px 10px "+getComputedStyle(document.documentElement,null).getPropertyValue('--fontColour');
 console.log("Mouse is hovering Submit");
 
});

submitButton.addEventListener("mouseleave",function()
{
    this.style.backgroundColor =  getComputedStyle(document.documentElement,null).getPropertyValue('--backgroundColour');
    this.style.boxShadow = "";
    console.log("Mouse left");
    
});

submitButton.addEventListener("click", function(){
    alert("Can't Login right now, try again later!");
    event.preventDefault();
});

resetButton.addEventListener("mouseenter",function()
{this.style.backgroundColor = getComputedStyle(document.documentElement,null).getPropertyValue('--hoverColour');
 this.style.boxShadow = "2px 2px 10px "+getComputedStyle(document.documentElement,null).getPropertyValue('--fontColour');
 console.log("Mouse is hovering Reset");
 
});

resetButton.addEventListener("mouseleave",function()
{
    this.style.backgroundColor =  getComputedStyle(document.documentElement,null).getPropertyValue('--backgroundColour');
    this.style.boxShadow = "";
    console.log("Mouse left");
    
});

const login = document.querySelectorAll("input.login");
login.forEach(element =>{
    element.addEventListener("focus", function(){
    this.style.backgroundColor = "lightyellow";
    this.style.color = "black";
    console.log("Focus is on Login Form"); 
});

element.addEventListener("blur", function(){
    this.style.backgroundColor = getComputedStyle(document.documentElement,null).getPropertyValue('--hoverColour');
    this.style.color = getComputedStyle(document.documentElement,null).getPropertyValue('--fontColour');
    console.log("Focus has left Login Form");
});
});
const buttonList = document.querySelectorAll("button.listButton");
console.log(buttonList);

buttonList.forEach(element =>{
    if(element.className === "listButton"){
    element.addEventListener("mouseenter",function(){
    this.style.backgroundColor = getComputedStyle(document.documentElement,null).getPropertyValue('--hoverColour');
    this.style.boxShadow = "2px 2px 10px "+getComputedStyle(document.documentElement,null).getPropertyValue('--fontColour');
    console.log("Mouse is hovering a button");
});
    element.addEventListener("mouseleave",function(){
    this.style.backgroundColor =  getComputedStyle(document.documentElement,null).getPropertyValue('--backgroundColour');
    this.style.boxShadow = "";
    console.log("Mouse left");
});
    
    element.addEventListener("click",function(event){
        
    if(event.target.tagName === "BUTTON"){
        switch(this.id){
            case "button1":
                document.getElementById("buttonMessage").innerHTML ="Not this one!";
                break;
            case "button2":
                document.getElementById("buttonMessage").innerHTML ="Try Again!";
                break;
            case "button3":
                document.getElementById("buttonMessage").innerHTML ="Getting Close!";
                break;
            case "button4":
                document.getElementById("buttonMessage").innerHTML ="You are a winrar!";
                break;
            case "button5":
                document.getElementById("buttonMessage").innerHTML ="Too far go back!";
                break;
            case "button6":
                document.getElementById("buttonMessage").innerHTML ="How'd you get all the way down here?";
                break;
            
        }
    }
});
    }
});
