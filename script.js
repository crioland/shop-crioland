
fetch("https://api.mcsrvstat.us/bedrock/2/195.133.2.175:19132")
.then(r=>r.json())
.then(d=>{
 document.getElementById("online").innerHTML =
 d.online ? `🟢 Онлайн: ${d.players.online} / ${d.players.max}` : "🔴 Сервер оффлайн";
});

function copyIP(){
navigator.clipboard.writeText("195.133.2.175");
}

const observer=new IntersectionObserver(e=>{
e.forEach(x=>x.isIntersecting&&x.target.classList.add("show"))
});
document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));
