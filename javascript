<script>  
var address=  
{  
company:"Javatpoint",  
city:"Noida",  
state:"UP",  
fullAddress:function()  
{  
return this.company+" "+this.city+" "+this.state;  
}  
}; 

var obj={  
    
  lang:"JavaScript",  
  language:function()  
  {  
    document.writeln(this.lang+ " is a popular programming language.");  
  }  
  
document.writeln(emp_address.fullAddress.call(address));   
document.writeln(emp_address.fullAddress.apply(address));</script>  
  
var fetch=address.fullAddress();  
document.writeln(fetch);  
  
</script> 