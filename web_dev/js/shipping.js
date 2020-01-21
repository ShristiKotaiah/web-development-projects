function billingFunction(){
  var check=document.getElementById('same');
  var sname=document.getElementById('shippingName');
  var szip=document.getElementById('shippingZip');
  var bname=document.getElementById('billingName');
  var bzip=document.getElementById('billingZip');
  if(check.checked){
    bname.value=sname.value;
    bzip.value=szip.value;
    }
  else{
    bname.value="";
    bzip.value="";
  }
  
  
}