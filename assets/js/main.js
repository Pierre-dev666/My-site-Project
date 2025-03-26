    let connectionShape = localStorage.getItem("connection");
    const notConnected = document.getElementById("not-connected");
    const connected = document.getElementById("connected");
    let deconnectedButton = document.getElementById("deconnexion");
    
    if (connectionShape == 1){

        notConnected.style.display = "none";
        connected.style.display = "grid";
        deconnectedButton.style.display = "block";

      }

      const deconnexion = document.getElementById("deco")

      deconnexion.onclick = function () {
        localStorage.setItem("connection", 0);
        notConnected.style.display = "grid";
        connected.style.display = "none";
        deconnectedButton.style.display = "none";
      } 