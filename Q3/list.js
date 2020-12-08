function show(){
    var place=["Biratnagar","Lalitpur","Patan","Kathmandu","Pokhara","Palpa"]
    var dispalyText="";
    var i;
    for(i=0;i<place.length;i++){
        dispalyText+=place[i]+"     ";
     }
     
     document.getElementById("list").innerText=dispalyText;
   
}
show();

function remove(){
    var value = "kathmandu"
    var arr=["Biratnagar","Lalitpur","Patan","Kathmandu","Pokhara","Palpa"]
   arr.splice(3,1);
   arr.push("Terhathum","London");
   var text = "";
    var i;
        for (i = 0; i < arr.length; i++) {
        text += arr[i] + "<br>";
        }
document.getElementById("show").innerHTML = text;
document.getElementById("length").innerHTML=arr.length;
}
