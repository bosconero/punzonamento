function controllo(){
if(document.getElementById('spesspav').value===""){
alert('Inserire lo spessore del pavimento');
document.getElementById('spesspav').focus();
} else{
controllo1();
}

}
function controllo1(){
if(document.getElementById('rck').value===""){
alert('Inserire la Rck del calcestruzzo');
document.getElementById('rck').focus();
} else{
controllo2();
}

}
function controllo2(){
if(document.getElementById('peso').value===""){
alert('Inserire il peso proprio del muletto + il carico max trasportato');
document.getElementById('peso').focus();
} else{
controllo3();
}

}
function controllo3(){
if(document.getElementById('assi').value===""){
alert('Inserire il numero degli assi degli automezzi o muletti che transiteranno il pavimento');
document.getElementById('assi').focus();
} else{
controllo4();
}

}
function controllo4(){
if(document.getElementById('druote').value===""){
alert('Inserire la distanza tra le ruote per asse. Nel caso di ruote gemellate inserire la distanza tra le ruote interne.');
document.getElementById('druote').focus();
} else{
controllo5();
}
}
function controllo5(){
if(document.getElementById('dgem').value===""){
alert('Inserire la distanza tra le ruote gemellate');
document.getElementById('dgem').focus();
} else{
calcoloPunzonamento();
}

}
function calcoloPunzonamento(){
document.getElementById('pinserimento').style.display="none";
document.getElementById('risultati').style.display="block";
document.getElementById('boxalert').style.display="block";
document.getElementById('boxalert1').style.display="block";
document.getElementById('boxalert2').style.display="block";
var kfun=document.getElementById('kwink').value;
var spess=document.getElementById('spesspav').value;
var rcal=document.getElementById('rck').value;
var pmul=document.getElementById('peso').value;
var nassi=document.getElementById('assi').value;
var distr=document.getElementById('druote').value;
var distg=document.getElementById('dgem').value;
var truote=document.getElementById('tiporuote').value;

modelas=5700*Math.sqrt(rcal);
modelast=Math.round(modelas);
var raggiorig= Math.pow(((Math.pow(spess, 3)*modelast)/(11.73*kfun)), 1/4)
var raggior=Math.round(raggiorig*100)/100;
var icar=Math.sqrt((pmul/nassi)/(3.14*truote));
icarico=Math.round(icar*100)/100;
var rfitt=Math.sqrt((1.6*Math.pow(icarico,2))+Math.pow(spess,2))-(0.675*spess);
var raggiofitt=Math.round(rfitt*100)/100;
var tensruotaA=0.316*((pmul/nassi)/Math.pow(spess,2));
var tensruotaB=Math.log10((modelast*Math.pow(spess,3))/(kfun*Math.pow(raggiofitt,4)));
var tensruotax=0.316*((pmul/nassi)/Math.pow(spess, 2))*((Math.log10((modelast*Math.pow(spess, 2))/(kfun*Math.pow(icarico,4)))-0.436));
var tensruota=Math.round((tensruotax)*100)/100;
var xg=(distg/icarico);
if(xg<0.20){
var infgem=0.1921;
}else if (xg>= 0.20 && xg<0.25){
infgem=0.1921;
}else if (xg<0.30 && xg>=0.25){
infgem=0.1738;
}else if (xg<0.35 && xg>=0.30){
infgem=0.1556;
}else if (xg<0.40 && xg>=0.35){
infgem=0.1428;
}else if (xg<0.45 && xg>=0.40){
infgem=0.13;
}else if (xg<0.50 && xg>=0.45){
infgem=0.1212;
}else if (xg<0.55 && xg>=0.50){
infgem=0.1125;
}else if (xg<0.60 && xg>=0.55){
infgem=0.1037;
}else if (xg<0.65 && xg>=0.60){
infgem=0.098;
}else if (xg<0.70 && xg>=0.65){
infgem=0.0891;
}else if (xg<0.75 && xg>=0.70){
infgem=0.0833;
}else if (xg<0.80 && xg>=0.075){
infgem=0.0774;
}else if (xg<0.85 && xg>=0.80){
infgem=0.0716;
}else if (xg<0.90 && xg>=0.85){
infgem=0.0668;
}else if (xg<0.95 && xg>=0.90){
infgem=0.0631;
}else if (xg<1 && xg>=0.95){
infgem=0.0587;
}else if (xg<1.05 && xg>=1){
infgem=0.0545;
}else if (xg>1.05){
infgem=0.05;
}

infruogem=infgem*(0.58*(pmul/nassi)*(6/(Math.pow(spess, 2))));
var xd=distr/raggiofitt;
if(xd<0.20){
var infru=0.1921;
}else if (xd>= 0.20 && xd<0.25){
infru=0.1921;
}else if (xd<0.30 && xd>=0.25){
infru=0.1738;
}else if (xd<0.35 && xd>=0.30){
infru=0.1556;
}else if (xd<0.40 && xd>=0.35){
infru=0.1428;
}else if (xd<0.45 && xd>=0.40){
infru=0.13;
}else if (xd<0.50 && xd>=0.45){
infru=0.1212;
}else if (xd<0.55 && xd>=0.50){
infru=0.1125;
}else if (xd<0.60 && xd>=0.55){
infru=0.1037;
}else if (xd<0.65 && xd>=0.60){
infru=0.098;
}else if (xd<0.70 && xd>=0.65){
infru=0.0891;
}else if (xd<0.75 && xd>=0.70){
infru=0.0833;
}else if (xd<0.80 && xd>=0.075){
infru=0.0774;
}else if (xd<0.85 && xd>=0.80){
infru=0.0716;
}else if (xd<0.90 && xd>=0.85){
infru=0.0668;
}else if (xd<0.95 && xd>=0.90){
infru=0.0631;
}else if (xd<1 && xd>=0.95){
infru=0.0587;
}else if (xd<1.05 && xd>=1){
infru=0.0545;
}else if (xd<1.10 && xd>=1.05){
infru=0.0512;
}else if (xd>1.05){
infru=0.05;
}
var infruota=infru*(0.2*(pmul/nassi)*(6/Math.pow(spess,2)));
var sommaTensioni=infruota+infruogem+tensruota;
var fctm= Math.round((0.32*Math.pow(Math.pow(rcal, 2),1/3))*100)/100;
var carrip=Math.round((0.32*Math.pow(Math.pow(sommaTensioni,2), 1/3))*100)/100;
var margine=Math.round((100-((carrip/fctm)*100))*100)/100;


if(margine<40){
boxalert.innerHTML="La resistenza allo schiacciamento &egrave; pari a  : "+fctm+" N/mm<sup>2</sup>. ";
 boxalert1.innerHTML="La tensione da carico ripetuto &egrave; pari a  : "+carrip+" N/mm<sup>2</sup>";
boxalert2.innerHTML="Margine di sicurezza : "+margine+" % <br /><span style='font-weight:bold;color:#ff0000;'>Tale margine &egrave; inferiore a 40%. ricalcola aumentando spessore e/o Rck</span>";
document.getElementById('boxalert3').style.display="block";


}else{
 boxalert.innerHTML="La resistenza allo schiacciamento &egrave; pari a  : "+fctm+" N/mm<sup>2</sup>. ";
 boxalert1.innerHTML="La tensione da carico ripetuto &egrave; pari a  : "+carrip+" N/mm<sup>2</sup>";
 boxalert2.innerHTML="Margine di sicurezza : "+margine+" %. Tale margine deve essere superiore al 40%.<br /> <span style='font-weight:bold;color:#ff0000;'> Il margine di sicurezza e rispettato</span>";
document.getElementById("boxalert3").style.display="none";
}


}
function init(){
document.getElementById('intro').style.display="block";
document.getElementById('risultati').style.display="none";
document.getElementById('pinserimento').style.display="none";
document.getElementById('boxalert3').style.display="none";
}
function fineintro(){
document.getElementById('intro').style.display="none";
document.getElementById('pinserimento').style.display="block";
}
function esci(){
 navigator.app.exitApp();
}
function ripeti(){
window.location="punzonamento.html";
}
function gocalcolo(){
 window.location = "punzonamento.html";

} 

function variaSpessore(){
document.getElementById("spesspav").value="";
document.getElementById('pinserimento').style.display="block";
document.getElementById('risultati').style.display="none";
document.getElementById("spesspav").focus();
}

