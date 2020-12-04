/*
msg vars used: weburl, webname, webav, webcontent, webbed
embed vars used: emauth, emtitle, emdesc, emhex
*/

var webbed;
var params;
document.getElementById('remove').disabled = true;

if (localStorage.getItem('webhook')!=="") {
  document.getElementById('remove').disabled = false;
}

// hide fields by default
    document.getElementById('url').value = localStorage.getItem('webhook'); document.getElementById("name").classList.add('hide'); document.getElementById("avatar").classList.add('hide');document.getElementById("tip").classList.add("hide"); document.getElementById("emauth").classList.add("hide"); document.getElementById("emtitle").classList.add("hide"); document.getElementById("emdesc").classList.add("hide"); document.getElementById("emhex").classList.add("hide"); setTimeout(() => {  document.getElementById("main").classList.toggle("main"); }, 1000);
  
// the shit that makes it work lol
    function sendMessage() {
      // set embed values
      var weburl = document.getElementById('url').value; var webname = document.getElementById('name').value; var webav = document.getElementById('avatar').value; var webcontent = document.getElementById('content').value; var emauth = document.getElementById('emauth').value; var emtitle = document.getElementById('emtitle').value; var emdesc = document.getElementById('emdesc').value; var emhex = document.getElementById('emhex').value;

      if (emauth||emtitle||emdesc||emdesc||emhex!=="") {
        webbed = {
        author: {
          name: emauth
        },
      title: emtitle,
      description: emdesc,
      color: hexToDecimal(emhex)
    };
      }
    // -----------------------

      if (weburl==="") {
        document.getElementById('error').innerHTML = '<b>webhook url cannot be blank</b>'; setTimeout(() => {  document.getElementById('error').innerHTML = ""; }, 5000);
      }
      var request = new XMLHttpRequest();
      request.open("POST", weburl);

      request.setRequestHeader('Content-type', 'application/json');

      if (emauth||emtitle||emdesc||emdesc||emhex!=="") {
        params = {
        username: webname,
        avatar_url: webav,
        content: webcontent,
        embeds: [ webbed ]
      };
      } else if (emauth||emtitle||emdesc||emdesc||emhex==="") {
        params = {
        username: webname,
        avatar_url: webav,
        content: webcontent
      };
      }

      request.send(JSON.stringify(params));

      // function that converts a color hex to a valid Discord color
      function hexToDecimal(hex) {
        return parseInt(hex.replace("#",""), 16);
      }
      document.getElementById('send').disabled = true; setTimeout(() => {  document.getElementById('send').disabled = false; }, 700);
    } // end of sendMessage()

// show and hide extra fields
    function extra() {
      document.getElementById("name").classList.toggle("hide"); document.getElementById("avatar").classList.toggle("hide"); document.getElementById("emauth").classList.toggle("hide"); document.getElementById("emtitle").classList.toggle("hide"); document.getElementById("emdesc").classList.toggle("hide"); document.getElementById("tip").classList.toggle("hide"); document.getElementById("emhex").classList.toggle("hide"); document.getElementById("name").value = ""; document.getElementById("avatar").value = ""; document.getElementById("emauth").value = ""; document.getElementById("emtitle").value = ""; document.getElementById("emdesc").value = ""; document.getElementById("emhex").value = ""; document.getElementById('extra').disabled = true;  setTimeout(() => {  document.getElementById('extra').disabled = false; }, 800);
    }

    function save() {
      if (document.getElementById('url').value!=="") {
        localStorage.setItem('webhook', document.getElementById('url').value); document.getElementById('remove').disabled = false; alert('webhook url saved');
      }
    }

    function remove() {
      if (localStorage.getItem('webhook')!=="") {
        localStorage.setItem('webhook', ''); alert('saved webhook removed'); document.getElementById('remove').disabled = true;
      }
    }