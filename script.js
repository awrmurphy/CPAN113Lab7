var button = document.getElementById("testButton");

button.addEventListener("mouseenter",function()
{this.style.backgroundColor = getComputedStyle(document.documentElement,null).getPropertyValue('--hoverColour');
 this.style.boxShadow = "2px 2px 10px "+getComputedStyle(document.documentElement,null).getPropertyValue('--fontColour');
});
button.addEventListener("mouseleave",function()
{
    this.style.backgroundColor =  getComputedStyle(document.documentElement,null).getPropertyValue('--backgroundColour');
    this.style.boxShadow = "";
});