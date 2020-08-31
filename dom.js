//document.all[10].textContent = 'Js,supeer!'
console.log(document.forms);
console.log(document.forms[0]);
var headerTitle = document.getElementById('header-title');
alert(headerTitle.textContent);
var variablePourHeader = document.querySelector('#main-header'); 
variablePourHeader.style.borderBottom = 'solid 10px #cac';
var ElemInput = document.querySelector('input'); 
elemInput.value = 'contenu de la balise input modifié';
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';//

// Commençons par récupérer la liste//
var elemListe = document.querySelector('#items');

//Nous allons sans tarder créer un div avec l'instruction suivante://
 var nvDiv =  document.createElement('div');

/* Changeons la couleur du parent via parentElement*/
elemListe.parentElement.style.backgroundColor = '#f4f4f4';
/*comme pour le précédent, affichons l'arrière grand-parent*/ 
console.log(elemListe.parentElement.parentElement.parentElement);