const h1 = document.createElement("h1");
h1.classList.add('subHeaders');
h1.textContent = "Where I hope to be";
document.querySelector(".act2").appendChild(h1);

const p = document.createElement("p");
p.textContent = "I want to learn and get the basics of coding down so I can move into the field and continue to learn and grow my knowledge. I would like to one day work at a vehicle manufacturer and write the code for the computers which control the various sub systems on the vehicle. I would also be very interested in working for a company that designs programs and solutions for other businesses, anything really that would be varied and allow me to grow and develop my skills";
document.querySelector('.act2').appendChild(p);
/*side bar action*/
var arrow = document.querySelector(".arrow");
arrow.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
    })