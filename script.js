var button = document.getElementById("testButton");
var text = document.getElementById("input1")

button.addEventListener("mouseenter",function()
{this.style.backgroundColor = getComputedStyle(document.documentElement,null).getPropertyValue('--hoverColour');
 this.style.boxShadow = "2px 2px 10px "+getComputedStyle(document.documentElement,null).getPropertyValue('--fontColour');
 console.log("Mouse is Hovering");
 
});

button.addEventListener("mouseleave",function()
{
    this.style.backgroundColor =  getComputedStyle(document.documentElement,null).getPropertyValue('--backgroundColour');
    this.style.boxShadow = "";
    console.log("Mouse left");
    
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
