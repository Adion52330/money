document.getElementById("gg").style.display = "none";
a = document.getElementById("hh").value;
document.getElementById("mm").style.display = "none";

function validation() {
  a = document.getElementById("txt").value;
  class Car {
    constructor(model, name) {
      this.model = model;
      this.name = name;
    }
  }
  if (a == "") {
    alert("Please enter inside the textbox");
    return false;
  } else {
    document.getElementById("frm").style.display = "none";
    document.getElementById("pro").innerHTML = "Welcome " + a;
    document.getElementById("gg").style.display = "inline";
    document.getElementById("mm").style.display = "inline";
    document.getElementById("mm").innerHTML = "₹1000";
    if (
      a == "Aditya" ||
      a == "adi" ||
      a == "Adi" ||
      a == "Adion" ||
      a == "aditya"
    ) {
      v = new Car("Medcedes", "Lightning");
      document.getElementById("mm").innerHTML = "₹10,00,000";
      document.getElementById("gg").style.display = "inline";
    } else if (a == "Bhanu" || a == "bhanu" || a == "bpg") {
      v = new Car("Wagonr", "Grayer");
      document.getElementById("mm").innerHTML = "₹20,00,000";
      document.getElementById("gg").style.display = "inline";
    } else if (a == "Kashvi" || a == "kashvi" || a == "gaki") {
      v = new Car("Barbie Truck", "barby pro");
      document.getElementById("mm").innerHTML = "₹0";
      document.getElementById("gg").style.display = "inline";
    } else if (a == "Mom" || a == "mom" || a == "suchita" || a == "mammi") {
      document.getElementById("mm").innerHTML = "₹1,00,000";
      document.getElementById("gg").style.display = "inline";
    }
    return false;
  }
}

function oop() {
  window.location.reload();
}
