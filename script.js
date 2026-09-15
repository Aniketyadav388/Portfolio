AOS.init();

let text="Full Stack Developer | React Enthusiast";
let i=0;

function type(){
  if(i<text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type,80);
  }
}

type();

function toggleDark(){
  document.body.classList.toggle("dark");
}