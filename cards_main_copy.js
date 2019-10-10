let buttonToTop = document.querySelector(".tothetop")
// buttonToTop.style.backgroundColor = "red"
const scroller = () => window.scrollTo({ 
    top: 0,
    behavior: 'smooth',
 
})

buttonToTop.addEventListener("click", scroller);


// window.scroll(0, 1503)





// document.body.style.backgroundColor = "blue";


function dissolve(){
    if(document.body.scrollTop > 1300){
        document.body.style.backgroundColor = "blue";
    }
    
}


// let test = document.querySelectorAll(".signup-one h1,.signup-two p,.signup-three" )


let signups = document.querySelectorAll(".signup-one h1,.signup-two p")

let activated = false //Så länge den inte är aktiverad körs inget. 
function showScrollPosition(){
    console.log("Checking scroll pos")
    if(window.scrollY > 1550 && !activated){ // Om scroll posision är mer än 1000 och false är inaktiverad. 
        
        
        // document.body.style.backgroundColor = "blue";
        // document.body.style.backgroundColor = "blue";
    
        for(let element of signups){
            element.style.color = "black"
        }


        // Logiken för att se till at det händer grejer
        console.log("OMGOMGOMGOMG")
        
        
        
        
        activated = true
        window.removeEventListener("scroll", showScrollPosition) // Om eventet körts en gång, tas det bort för sessionen (1) Once). 
    }
    // else if(window.scrollY < 1000){
        //     activated = false
        // } Den här funktionen aktiverar samma sak gång på gång när vi scrollar upp och ned. 
    }
    
    window.addEventListener("scroll", showScrollPosition )