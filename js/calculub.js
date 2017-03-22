function AFFICHE(calcul){
	// On déclare les variables
	//var nbrSalarie, text;
	//var pxHtContrat, text;
	var txHoraireSmic, text;	
	//var nbrSalarie = document.getElementById('nbrSalarie').value;
	var pxHtContrat = document.getElementById('pxHtContrat').value;
	var smic = 9.76
	
	//var somme = document.getElementById('somme').value;
	//on remplace la virgule par un point
/*somme = somme.replace(",",".");	
	Si le champ est vide
	if(somme == ''){
		document.getElementById('mon_div').innerHTML = 'On ne va pas aller bien loin sans saisie!'; 
		document.getElementById("somme").style.border = "1px solid red"; 
		return false;
	}
	//On teste si la valeur est de type numérique
	else if (isNaN(somme))
	{
		document.getElementById('mon_div').innerHTML = 'Merci de saisir un chiffre!'; 
		return false;
	}	
	//tout est ok
	else
	// var calcul1 = (1.8*somme);//réponse 1
	//var calcul2 =(5700/2900)*calcul1;//réponse 2
	//var calcul3 = nbrSalarie *2//réponse 3 */
	var ubIn = pxHtContrat / (2000 * smic)//réponse ubIn
	var ubOut = pxHtContrat / (1600* smic)//réponse ub
	//Affiche le résultat dans "mon_div"
	//Math.round() arrondit à l'entier le plus proche
	document.getElementById('mon_div').innerHTML = '<strong>Si la prestation a été effectuée dans <strong>nos</strong> locaux, votre unité bénéficiaire est potentiellement de  :  '+ubIn.toFixed(3)+'</strong></br><strong>Si la prestation a été effectuée dans <strong>vos</strong> locaux, votre unité bénéficiaire est potentiellement de : '+ubOut.toFixed(3)+'</strong>';
	
}


//	document.getElementById('mon_div').innerHTML = 'Saisie utilisateur : '+somme+'<br/>Calcul 1 : '+Math.round(calcul1)+'<br/>Calcul 2 : '+Math.round(calcul2)+'<br/>Calcul 3 : '+Math.round(calcul3)+''; 
