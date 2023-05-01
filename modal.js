function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

//Recupéré les champs des formulaires
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationTournament = document.getElementsByName("location");    
const condition = document.getElementById("checkbox1");


//Const pour la verification
const firstTest = document.getElementById("firstTest");
const lastTest = document.getElementById("lastTest");
const emailTest = document.getElementById("emailTest");
const birthdateTest = document.getElementById("birthdateTest");
const quantityTest = document.getElementById("quantityTest");
const locationTest = document.getElementById("locationTest");
const conditionTest = document.getElementById("conditionTest");

// ----- Ouvrir ou fermer le Formulaire -----


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form 
modalClose.addEventListener("click", function() {          // Évènement au click
  modalbg.style.display = "none";                             // Pour fermer la modal avec le bouton close
});



// Création des RegEx
// Une expression rationnelle qui prends en condition des lettres en Maj et Min entre 2 à 20 lettres

let regExName = new RegExp('^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$');       

 // Une expression rationnelle qui prends en condition pour les emails
 let regExEmail = new RegExp( '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');  

/*  var regExDate = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/; */





 function validate(input,regEx,msg,label,border) {    // Paramètres

  let testValid = regEx.test(input.value);                    // Un test du RegEx en récupérant la valeur

   if(testValid) {
    label.innerHTML = "Champs Valide";
    label.classList.remove('text-danger');
    label.classList.add('text-succes');
    border.classList.remove('border-danger');
    border.classList.add('border-succes');
    return true;
   }else {
    label.innerHTML = msg;
    label.classList.remove('text-succes');
    label.classList.add('text-danger');
    border.classList.remove('border-succes');
    border.classList.add('border-danger');
    return false;
   }
}

 //Verification Prenom/Nom/EMAIL
 first.addEventListener('change', function() {
  validate(this,regExName,"Veuillez entrer 2 caractères ou plus pour le champ du Prénom.", firstTest, this);
});

last.addEventListener('change', function() {
  validate(this,regExName,"Veuillez entrer 2 caractères ou plus pour le champ du Nom.", lastTest, this);
});

email.addEventListener('change', function() {
  validate(this,regExEmail,"Veuillez entrer un adresse email valide", emailTest, this);
});
/*  //Verification date aniversaire

birthdate.addEventListener('change', function() {
  validate(this,regExDate,"Veuillez entrer une date de naissance valide",birthdateTest, this);
}); */


// ----- ANNIVERSAIRE-----




const validDate = function() {

  if(! birthdate) {
    birthdateTest.innerHTML = "Veuillez entrer une date de naissance valide";
    birthdateTest.classList.remove('text-succes');
    birthdateTest.classList.add('text-danger');
    birthdate.classList.remove('border-succes');
    birthdate.classList.add('border-danger');
    return false;
  }else {
    birthdateTest.innerHTML = "Champs Valide";
    birthdateTest.classList.remove('text-danger');
    birthdateTest.classList.add('text-succes');
    birthdate.classList.remove('border-danger');
    birthdate.classList.add('border-succes');
    return true;
  }
};

birthdate.addEventListener('change', function() {
  validDate(this);
});


// ----- Verification TOURNOIS -----

const validQuantity = function() {
  if(quantity.value === 0 || quantity.value < 0) {       // Si la valeur est égale à 0 ou si la valeur est supérieure à 0
    quantityTest.innerHTML = "Merci d'indiquer le nombre de tournois";
    quantityTest.classList.remove('text-succes');
    quantityTest.classList.add('text-danger');
    quantity.classList.remove('border-succes');
    quantity.classList.add('border-danger');
    return false;
  }else if(quantity.value > 50) {
    quantityTest.innerHTML = "Nous n'avons pas organisé autant de tournois !";
    quantityTest.classList.remove('text-succes');
    quantityTest.classList.add('text-danger');
    quantity.classList.remove('border-succes');
    quantity.classList.add('border-danger');
    return false;
  }else {
    quantityTest.innerHTML = "Champs Valide";
    quantityTest.classList.remove('text-danger');
    quantityTest.classList.add('text-succes');
    quantity.classList.remove('border-danger');
    quantity.classList.add('border-succes');
    return true;
  }
};

quantity.addEventListener('change', function() {
  validQuantity(this);
});


// -----Verification  VILLES -----

// Fonctions pour les lieux de tournois si d'autres villes sont ajoutés dans le futur
function verifLocationTournament() {
  let locTournamentCheck = false; 
  for(let i = 0; i < locationTournament.length; i++) {
    const isCheck = locationTournament[i].checked;
    if(isCheck) {
      locTournamentCheck = true;
      return true;
    }
  }
  return false;
}

locationTournament.forEach((checkedBoxInput) => checkedBoxInput.addEventListener('change', function() {
  validLocationTournament(); 
}));

function validLocationTournament() {
  if(! verifLocationTournament()) {
      locationTest.innerHTML = "Merci de cocher une ville";
      locationTest.classList.remove('text-succes');
      locationTest.classList.add('text-danger');
      return false;
  } else {
      locationTest.innerHTML = "Champs valide";
      locationTest.classList.remove('text-danger');
      locationTest.classList.add('text-succes');
      return true;
  }
}


// ----- CONDITIONS -----

const validCondition = function() {
  if(condition.checked == false ) {                  
    conditionTest.innerHTML = "Merci d'accepter les conditions d'utilisations";
    conditionTest.classList.remove('text-succes');
    conditionTest.classList.add('text-danger');
    return false;
  }else {
    conditionTest.innerHTML = "Champs Valide";
    conditionTest.classList.remove('text-danger');
    conditionTest.classList.add('text-succes');
    return true;
  }
};
condition.addEventListener('change', function() {
  validCondition(this); 
});