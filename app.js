//app.js

document.addEventListener("DOMContentLoaded", () => {
  const igniteBtn = document.getElementById("igniteBtn");
  const sparksContainer = document.querySelector(".sparks-container");
  const companion = document.getElementById("companion");
  const cards = document.getElementById("cards");
  const container = document.getElementById("card-container");

function openCard(name) {

  fetch(cards/${name}.html)  
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
    })
    .catch(err => {
      container.innerHTML = "<p>Card failed to load</p>";
      console.error(err);
    });

}
  function createSparks(count=20) {
    for(let i=0;i<count;i++){
      const spark=document.createElement("div");
      spark.className="spark";
      const x=Math.random()*window.innerWidth;
      const y=Math.random()*window.innerHeight;
      spark.style.left = ${x}px;
      spark.style.top = ${y}px;
      sparksContainer.appendChild(spark);
      spark.addEventListener("animationend", ()=>spark.remove());
    }
  }

  igniteBtn.addEventListener("click", ()=>{
    document.body.classList.add("ignited");
    createSparks(30);

    // Companion pulse flash
    companion.style.transform = "scale(1.4)";
    setTimeout(()=> companion.style.transform="scale(1)",500);

    setTimeout(()=>document.body.classList.remove("ignited"),1000);

  // Reveal cards after ignition
  setTimeout(()=>{
    cards.classList.remove("hidden");
  },600);
});

  // Auto pulse companion on load
  setInterval(()=>{
    companion.style.transform = "scale(1.1)";
    setTimeout(()=> companion.style.transform="scale(1)",1000);
  }, 3000);
});
