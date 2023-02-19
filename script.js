function check() {
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;
  var giorno = Number(document.getElementById("giorno").value);
  var mese = Number(document.getElementById("mese").value);
  var anno = Number(document.getElementById("anno").value);

  //console.log(`${tNome} + ${tNome.typeof}`);

  //console.log(tNome + 99 + tNome.typeof);

  const date = new Date();
  var giornoOggi = date.getDate();
  var meseOggi = date.getMonth() + 1;
  var annoOggi = date.getFullYear();

  //Esegui il check di quando del if sotto. CORREGGI
  if (
    nome === undefined ||
    cognome === undefined ||
    giorno === undefined ||
    mese === undefined ||
    anno === undefined
  ) {
    document.getElementById("titolo").innerText = "";
    document.getElementById("titolo").innerText = "INSERISCI I DATI !";
  } else {
    if (meseOggi === mese && giornoOggi === giorno) {
      auguri(nome, cognome);
    } else {
      if (
        annoOggi - anno > 18 ||
        (meseOggi - mese >= 0 && giornoOggi - giorno > 0)
      ) {
        maggiorenne();
      } else {
        minorenne();
      }
    }
  }
}

function reset() {
  document.getElementById("nome").value = "";
  document.getElementById("cognome").value = "";
  document.getElementById("giorno").value = "";
  document.getElementById("mese").value = "";
  document.getElementById("anno").value = "";
  document.getElementById("body").classList = "";
  document.getElementById("body").classList.add("normale");
  document.getElementById("titolo").innerText = "";
  document.getElementById("titolo").innerText = "ISCRIZIONE";
}

function auguri(nome, cognome) {
  document.getElementById("body").classList.remove("normale");
  document.getElementById("body").classList.add("festa");
  document.getElementById("titolo").innerText = "";
  document.getElementById("titolo").innerText = `AUGURI ${nome} ${cognome} 🎂`;
}

function minorenne() {
  document.getElementById("body").classList.remove("normale");
  document.getElementById("body").classList.remove("magiorenne");
  document.getElementById("body").classList.remove("festa");
  document.getElementById("body").classList.add("minorenne");
  document.getElementById("titolo").innerText = "";
  document.getElementById("titolo").innerText = "VIETATA L'ISCRIZIONE";
}

function maggiorenne() {
  document.getElementById("body").classList.remove("normale");
  document.getElementById("body").classList.remove("minorenne");
  document.getElementById("body").classList.remove("festa");
  document.getElementById("body").classList.add("magiorenne");
  document.getElementById("titolo").innerText = "";
  document.getElementById("titolo").innerText = "PUOI PROCEDERE";
}
