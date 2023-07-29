let plus= document.getElementsByClassName("plus");
let minus= document.getElementsByClassName("minus");
let value= document.getElementsByName("input").value;

plus.addEventListener("click", function(){
    value=value+1;
});
console.log(value);