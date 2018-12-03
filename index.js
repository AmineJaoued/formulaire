function verif1(){
    var name = document.getElementById('nom').value;
    var lastName = document.getElementById('Prenom').value;
    var adress = document.getElementById("adresse").value;
    var boitemail = document.getElementById("email").value;
    var pass = document.getElementById("motpass").value;
    var comment = document.getElementById("comments").value;

    console.log("ena bhiim ");
    if (name.length > 0 && lastName.length > 0 && adress.length > 0 && boitemail.length > 0 && pass.length > 0 && comment.length > 0){
        console.log("ena mouch bch natlee3 developpeur");
    }else{
        alert('Veuillez Remplire le formulaire');
        console.log("ena msateek ");
    }
}

function verifname (){
    let name = document.getElementById('nom').value; 
    for (let i = 0 ; i< name.length;i++){
        if (name.toUpperCase().charCodeAt(i)>=65 && name.toUpperCase().charCodeAt(i)<=90 ){
            console.log('Bdiit nethasen ken jebtha men el marra loula');
        }else {
            alert('Veuillez entrer  votre name correcte');
            break;
        }
    }
}

function verifLastname(){
    let Prenom = document.getElementById('Prenom').value; 
    for (let i = 0 ; i< Prenom.length;i++){
        if (Prenom.toUpperCase().charCodeAt(i)>=65 && Prenom.toUpperCase().charCodeAt(i)<=90 ){
            console.log('Bdiit nethasen ken jebtha men el marra loula');
        }else {
            alert('Veuillez entrer  votre last name correcte');
            break;
        }
    }
}

function emails(){
    let boitemail = document.getElementById("email").value;
    var s = 0;
    for ( let i= 0;i<boitemail.length;i++){
        if (boitemail[i]== ' '){
            
            alert("Veuillez entrer  votre mail correcte");
        }else if (boitemail[i] == '@'){s++;}
    }
        if (s > 1 || s< 1 ){
    alert("Veuillez entrer  votre mail correcte");  
}
    let n = boitemail.lastIndexOf('.');
    if  ( n == (boitemail.length)-3 ||  n == (boitemail.length)-4){
        console.log("bdiit netseen ");
    }else{
        alert('Veuillez entrer  votre mail correcte');
            }
        }
    function passeword(){
        var pass = document.getElementById("motpass").value;
        if (pass.length > 8 ){
                console.log("Raani msaateek");
        }else {
            alert('Entrer le bon mot de passe');
        }
    }
function verif(){
    verif1();
    verifname();
    verifLastname();
    emails();
    passeword();
}
