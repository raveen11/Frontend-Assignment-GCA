function calculate(){
    var amount=document.getElementById("amount").value;
    var tips=document.getElementById("tips").value;
    var tipsAmount= calculateTips(amount,tips);
     var TotalAmount=parseInt(amount)+parseInt(tipsAmount);
     document.getElementById("total").innerHTML=TotalAmount;
     
     document.getElementById("tip").innerHTML=tipsAmount;
    
}

function calculateTips(amt,tip){
    return (tip/100)*amt;
}
