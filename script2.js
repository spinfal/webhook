    if (localStorage.getItem('webhook')!=='') {
      var spliturl = localStorage.getItem('webhook').split('/');
      var getToken = spliturl[6];
      document.getElementById('token').value = getToken;
    }

    function reveal() {
      var x = document.getElementById("token");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }

    function updateHook() {
      var hooktoken = document.getElementById('token').value; var channel = document.getElementById('channel').value;

      var update = new XMLHttpRequest();
      update.open("PATCH", hooktoken);

      var upparams = {
        // update params go here, coming soon(tm)
      }

      update.send(JSON.stringify(upparams));
    }

    function tip() {
      alert('https://discord.com/api/webhooks/000000000000000000/charactersHereIsTheToken');
    }