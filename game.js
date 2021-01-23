var player = document.getElementById("character");
var block = document.getElementById("block");
function start() {
    block.classList.add("blockAnimation");
}
function jump() {
    player.classList.add("playerAmination");
    setTimeout(function(){
        player.classList.remove("playerAmination");
    }, 500);
}
function pause() {
    block.classList.remove("blockAnimation");
}
var checkDead = setInterval(function(){
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 & playerTop >= 130) {
        alert("you lose");
        block.style.display = "none";
        block.style.animation = "none";
    }
}, 10);