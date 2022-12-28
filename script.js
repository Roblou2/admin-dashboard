let side = document.querySelector(".sidebar")
let sideList = document.querySelector(".sidebar ul")
let dash = document.querySelector(".mdi-view-dashboard")
let sideSpan = document.querySelectorAll(".sidebar ul li span")
let listItems = document.querySelectorAll(".sidebar ul li")
let x = window.matchMedia("(max-width: 700px)")

let win = window

let menuLower = document.querySelector(".menu-lower")

function remove () {
    if (x.matches) {
        menuLower.classList.add('invisible')
        dash.textContent = ""
        side.classList.add('invisible');
    }

    else {
        menuLower.classList.remove('invisible')
        side.classList.remove('invisible');
     
    }
}

dash.addEventListener('click', myFunction)


function myFunction() {



    if (x.matches) { 
        side.classList.toggle('invisible');
sideList.setAttribute('style', 'flex-flow: row; justify-content: space-evenly; height: max-content;')
dash.textContent = ""

        for (let i = 0; i < sideSpan.length; i++) {
            sideSpan[i].textContent = ""
        }

      }
 
  }
  

  myFunction() 
remove ()
window.onresize = remove