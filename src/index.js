/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction(){
  let menu = document.getElementById("menu");
  console.log(menu)
  menu.classList.toggle("hidden")
  // if ( menu.classList.contains(hidden) ) {
  //   console.log("classList")
  //   menu.classList.remove(hidden) =
  //   alert("remove hidden")
  // } else {
  //   menu.classList.add(hidden)
    
  // }
}

function openTab(){
  let elements = document.getElementById("elements");
  // console.log(main)
  elements.classList.toggle("hidden")
}

function closeTab(){
  let forms = document.getElementById("forms")
  forms.classList.toggle("hidden")
}