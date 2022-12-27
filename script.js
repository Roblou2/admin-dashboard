let side = document.querySelector(".sidebar")
let dash = document.querySelector(".mdi-view-dashboard")
let sideList = document.querySelectorAll(".sidebar ul li span")

let x = window.matchMedia("(max-width: 700px)")

dash.addEventListener('click', myFunction)


function myFunction() {



    if (x.matches) { 
        side.classList.toggle('invisible');
        for (let i = 0; i < sideList.length; i++) {
            sideList[i].textContent = ""
        }
      }
 
  }
  

  myFunction() 
console.log(sideList)