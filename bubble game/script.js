function start(){
    // variables used in this game
    let score = 0;
    let time = 20;
    let highscore = localStorage.getItem("highscore");
    var randomHt = 0
    var x = document.querySelector("audio")
    // function for making numbers of bubble
    function bubbleMaker() {
        let clutter = ""
        for(var i=1;i<=105;i++){
        let rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.getElementById("bottom").innerHTML = clutter
    }bubbleMaker()
    //function for countdown and stop the game
    function runtime() {
        var timer = setInterval(() => {
            if(time>0){
                time -= 1
                document.getElementById("timer").textContent = time
            }else{
                clearInterval(timer)
                document.getElementById("pbot").innerHTML = `<div class="pbot2">
                <h1>Game over</h1>
                <h3>Your Score <span id="yscore">${score}</span></h3>
                <h3>Highest Score <span id="hscore">${localStorage.getItem("highscore")}</span></h3>
                <button type="button">Play Again</button>
            </div>`
            setTimeout(() => {
                document.querySelector("button").addEventListener("click",function(){
                    location.reload()
                })
            }, 200);
            }
        }, 1000);
    }runtime()
    // function for making random hit value
    function hitvalue() {
        randomHt = Math.floor(Math.random()*10)
        document.getElementById("hit").textContent = randomHt
    }hitvalue() 
    // function for increasing score
    function increaseScore() {
        score +=10
        if(highscore<score){
            localStorage.setItem("highscore", score)
        }
    }
    // function for getting bubble value
    function bubblevalue(){
        let arr = document.querySelectorAll(".bubble")
        arr.forEach(element => {
        element.addEventListener("click",function(){
            if(element.textContent==randomHt){
                var audio = new Audio("bubbleAudio.mpeg")
                audio.play();
                bubbleMaker()
                increaseScore()
                bubblevalue()
                hitvalue()
                document.getElementById("score").textContent = score
            }
        })
    });
}bubblevalue()  
 
document.querySelector("#highScore").textContent = localStorage.getItem("highscore") 
}start()

