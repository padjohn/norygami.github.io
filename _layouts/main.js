jQuery(document).ready(function($){ 
  $('#sub-menu').on('change', function () {
	  var url = $(this).val(); // get selected value
	  if (url) { // require a URL
		  window.location = url; // redirect
	  }
	  return false;
  });
});

/*
const select = document.querySelector(".sub-menu");
const options = document.querySelectorAll(".sub-menu option");

// 1

select.addEventListener("change", function() {
  const url = this.options[this.selectedIndex].dataset.url;
  if(url) {
    localStorage.setItem("url", url);
    location.href = url;
  }
});

// 2

if(localStorage.getItem("url")) {
  for(const option of options) {
    const url = option.dataset.url;
    if(url === localStorage.getItem("url")) {
      option.setAttribute("selected", "");
      break;
    }
  }
}
*/