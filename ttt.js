$(document).ready(function(){
    $(".k").click(function(){
       $("#a").hide();
        $("#b").show();
    });
});


var c1=0,check=0;
$(document).ready(function(){
    $("td").click(function(){
            if(c1%2==0)
                {
                $(this).text('X').css({"color":"red","font-size":"200%"});
                    c1++;
                }
            else
                {
                    $(this).text('0').css({"color":"black","font-size":"200%"});
                    c1++;
                }   
        });
    });
var a=[[1,1,1],[1,1,1],[1,1,1]];
var s1=" ",s2=" ";
function sl(n,m)
{
if(c1%2==0)
{
a[n][m]='X';
}
else
{
a[n][m]='0';
}
for(var i=0;i<3;i++)
{
 s1=" ",s2=" ";
for(var j=0;j<3;j++)
{
  s1+=a[i][j]+"";
  s2+=a[j][i]+"";
}
if(/000/.test(s1)||/XXX/.test(s1)||/000/.test(s2)||/XXX/.test(s2))
{
 check=1;
}
else
{
   s1=" "; s2=" ";
  s1+=a[0][0]+""+a[1][1]+""+a[2][2];
  s2+=a[0][2]+""+a[1][1]+""+a[2][0];
  if(/000/.test(s1)||/XXX/.test(s1)||/000/.test(s2)||/XXX/.test(s2))
{
 check=1;
}
}
}
if(check==1)
 {
    
     if(a[n][m]=='X')
     {
      $("#b").hide();
      $(".s").show();
     }
     else
     {
        $("#b").hide();
        $(".s1").show();
     } 
 }
else if(c1==8)
{
    $("#b").hide();
    $(".s2").show();
    }
}


