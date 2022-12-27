let side = document.querySelector(".sidebar")
let sideList = document.querySelector(".sidebar ul")
let dash = document.querySelector(".mdi-view-dashboard")
let sideSpan = document.querySelectorAll(".sidebar ul li span")
let listItems = document.querySelectorAll(".sidebar ul li")

let x = window.matchMedia("(max-width: 700px)")

dash.addEventListener('click', myFunction)


function myFunction() {



    if (x.matches) { 
        side.classList.toggle('invisible');
sideList.setAttribute('style', 'flex-flow: row; justify-content: space-evenly; height: max-content;')


        for (let i = 0; i < sideSpan.length; i++) {
            sideSpan[i].textContent = ""
        }

      }
 
  }
  

  myFunction() 
