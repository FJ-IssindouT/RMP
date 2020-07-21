//Detecteur mouvement
function detecteur_mouvement()
{
var variables = JSON.parse(RMPApplication.getAllApplicationVariables());
var a=[];
var b=[];
 
var c=[]; 
 
var e="[";

for( i=0 ; i< variables.length ; i++ )
{
if(variables[i].includes("variable_input_detecteur_mouvement"))
{
a.push(variables[i]);
}
if(variables[i].includes("variable_large_detecteur_mouvement"))
{
b.push(variables[i]);
}
if(variables[i].includes("variable_vu_irv_detecteur_mouvement"))
{
c.push(variables[i]);
}
}




var j=1;
for( i=0 ; i< b.length && i< a.length && i< c.length;i++)
{
var dispositif="Détecteur de mouvement avec vidéo IRVPI  - Numéro du dispositif : "+RMPApplication.get(a[i])
var id=JSON.parse(RMPApplication.get(b[i]))[0].id;
var name=JSON.parse(RMPApplication.get(b[i]))[0].name;

var id_vu_irv=JSON.parse(RMPApplication.get(c[i]))[0].id;
var name_vu_irv=JSON.parse(RMPApplication.get(c[i]))[0].name;

var url = "https://live.runmyprocess.com/pub/112501470993352978/upload/"+id+"/"+name+"?method=GET";
var url_vu_irv = "https://live.runmyprocess.com/pub/112501470993352978/upload/"+id_vu_irv+"/"+name_vu_irv+"?method=GET";

e=e+"{"+'"dispositif"'+":"+'"'+dispositif+'"'+","+'"url"'+":"+'"'+url+'"'+","+'"url_vu_irv"'+":"+'"'+url_vu_irv+'"'+"}"+",";

j++;
}

e = e.substring(0,e.length-1);
e=e+"]";
if(e=="]")
{
e='""';
RMPApplication.set("images_detecteur_mouvement",e);
}
else
{
RMPApplication.set("images_detecteur_mouvement",e);
}
}