    function editprofil() {
      document.getElementById("form1").disabled = false;
      document.getElementById("form2").disabled = false;
      document.getElementById("form3").disabled = false;
      document.getElementById("btn-edit").remove("btn-edit");
      document.getElementById("btn-simpan").removeAttribute("style");
    } 
    function back() {
      window.history.back();
    }
    function loadingButton() {
    	document.getElementById("loading").removeAttribute("style");
    }
    function darkMode() {
		var elements = document.getElementsByClassName('card');
			for(var i=0; i<elements.length; i++) { 
			  elements[i].classList.toggle("bg-dark");
			  elements[i].classList.toggle("text-light");
			}
	}
