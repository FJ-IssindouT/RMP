
var indice_detecteur_mouvement=0;


function add_detecteur_mouvement()
{
if(indice_detecteur_mouvement<6)
{
	
indice_detecteur_mouvement++;	
	
var conf = {"id":"id_section_detecteur_mouvement"+indice_detecteur_mouvement,"js-type":"RMP_Section","label":"SGVhZGVyIHRleHQ=","open":"false","on-open":"Y29uc29sZS5sb2coInNlY3Rpb24gb3BlbmVkIik7","on-close":"Y29uc29sZS5sb2coInNlY3Rpb24gY2xvc2VkIik7"};
id_section= new RMP_Section(conf);
id_section.setLabel("Détecteur de mouvement avec vidéo IRVPI");
id_section_detecteur_mouvement.insertAbove(id_section); 



var conf = {"id":"id_input_detecteur_mouvement"+indice_detecteur_mouvement,"label":{"text":"Numéro du dispositif : "},"variable":[{"name":"variable_input_detecteur_mouvement"+indice_detecteur_mouvement,"value":""}],"js-type":"RMP_TextInput"};
id_input= new RMP_TextInput(conf);
id_section.insertInside(id_input);



var conf = {"id":"id_upload_large_detecteur_mouvement"+indice_detecteur_mouvement,"label":{"text":"Plan large"},"variable":[{"name":"variable_large_detecteur_mouvement"+indice_detecteur_mouvement,"value":""}],"js-type":"RMP_FileUpload","tooltip":"My tooltip",
"action":"file_upload","submit":"Submit","file-exts":[{"ext":"png"},{"ext":"gif"},{"ext":"jpeg"},{"ext":"bmp"},{"ext":"jpg"}],"url":"live/2/entity/0f8406f0-3cb7-11e4-804d-f0bf97e1b068/upload?appli=[[appli_id]]&context=[[context]]&P_mode=TEST&P_version="};
id_upload_large= new RMP_FileUpload(conf);
id_input.insertBelow(id_upload_large);

var conf = {"id":"id_upload_vu_irv_detecteur_mouvement"+indice_detecteur_mouvement,"label":{"text":"Vue de l'IRV"},"variable":[{"name":"variable_vu_irv_detecteur_mouvement"+indice_detecteur_mouvement,"value":""}],"js-type":"RMP_FileUpload","tooltip":"My tooltip",
"action":"file_upload","submit":"Submit","file-exts":[{"ext":"png"},{"ext":"gif"},{"ext":"jpeg"},{"ext":"bmp"},{"ext":"jpg"}],"url":"live/2/entity/0f8406f0-3cb7-11e4-804d-f0bf97e1b068/upload?appli=[[appli_id]]&context=[[context]]&P_mode=TEST&P_version="};
id_upload_vu_irv= new RMP_FileUpload(conf);
id_upload_large.insertBelow(id_upload_vu_irv);


}

}




function supprimer_detecteur_mouvement()
{

var widgetList = RMPWidgets.getAllWidgets();

for( i=0 ; i< widgetList.length ; i++ )
{
if(widgetList[i].getName()=="id_input_detecteur_mouvement"+indice_detecteur_mouvement)
{
widgetList[i].remove();
}
if(widgetList[i].getName()=="id_section_detecteur_mouvement"+indice_detecteur_mouvement)
{
widgetList[i].remove();
}
if(widgetList[i].getName()=="id_upload_vu_irv_detecteur_mouvement"+indice_detecteur_mouvement)
{
widgetList[i].remove();
}
if(widgetList[i].getName()=="id_upload_large_detecteur_mouvement"+indice_detecteur_mouvement)
{
widgetList[i].remove();

indice_detecteur_mouvement=indice_detecteur_mouvement-1;
}
}
}
