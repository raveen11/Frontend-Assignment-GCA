function calculateCircumference(){
    var input=document.getElementById("input").value;
    document.getElementById("show").innerText=calculate(input);
    
    
}
function calculate(val){
    let PI=3.14159;
    return parseInt(2*PI*val);
}