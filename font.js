function setup(){
    video = createCapture(VIDEO)
    video.size(530, 400)
    video.position(100, 130)
    canvas = createCanvas(530, 400)
    canvas.position(750, 130)
}