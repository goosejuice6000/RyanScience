// Auto year
document.getElementById('year').textContent = new Date().getFullYear();

// Particle background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i=0;i<50;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    dx:(Math.random()-0.5)*0.3,
    dy:(Math.random()-0.5)*0.3
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(255,255,255,0.7)";
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

// Fun facts rotator
const facts = [
  "Water can boil and freeze at the same time (triple point).",
  "Bananas are berries, but strawberries are not.",
  "A teaspoon of neutron star material weighs about 6 billion tons.",
  "Sharks existed before trees.",
  "Your body has more bacterial cells than human cells."
];
let factIndex = 0;
function showFact(){
  document.getElementById("fact").textContent
