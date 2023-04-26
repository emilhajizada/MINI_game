
const player1_score = document.getElementById("player1_score")
const comp_score = document.getElementById("comp_score")
const player_img = document.getElementById("player_img")
const comp_img = document.getElementById("comp_img")

function getCompPlayMove() {
    const arr = ["das","qayci","kagiz"]
    return arr[Math.floor(Math.random()*3)]
  
}

function getImgURL(move) {
    const arr = ["das","qayci","kagiz"]
    const links = ["https://static.thenounproject.com/png/88661-200.png","https://static.thenounproject.com/png/477922-200.png","https://w7.pngwing.com/pngs/588/310/png-transparent-hand-rock-paper-scissors-computer-icons-hand-angle-text-photography.png"]
    return links[arr.indexOf(move)]
}
function findGameResult(player1,comp) {
    player_img.src= getImgURL(player1)
    comp_img.src= getImgURL(comp)
    if (player1 ===comp) {
        return
    }
    if (player1 ==="kagiz" && comp==="das" || player1 ==="das" && comp==="qayci" || player1 ==="qayci" && comp==="kagiz") {
        player1_score.innerText++
    }
    else  {
        comp_score.innerText++
    }
}


document.addEventListener("keydown", function (e) {
  switch (e.key.toLocaleLowerCase()) {
    case "d":
        findGameResult("das",getCompPlayMove())
      break;
    case "k":
        findGameResult("kagiz",getCompPlayMove())
      break;
    case "q":
        findGameResult("qayci",getCompPlayMove())
      break;
    default:
        alert("duz deyer yaz")
      break;
  }
});
