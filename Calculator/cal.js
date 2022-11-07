var buttons=document.getElementsByClassName("buttons");


var display=document.getElementById("display_box");
var x='';
display.textContent=x;
console.log(buttons)

for(let i=0;i<buttons.length;i++)
    buttons[i].addEventListener("click", function()
    {
         var value=this.getAttribute('data-value');
         var text=display.textContent.trim();

         if(value=="ac"){
            x="";
            display.textContent=x;
         }
         else if(value=="+/-")
         {
            x=-1*x;
            display.textContent=x;
         }
         else if(value==".")
         {
            x=x+".";
            display.textContent=x;
         }
         else if(value=="=")
         {
            var res=eval(x);
            display.textContent=res;
         }
         else{
            x+=value;
            display.textContent=x;
         }
    }
    
    );
