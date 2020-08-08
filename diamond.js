cwidth = 640
cheight = 480
csquare = cheight > cwidth ? cwidth : cheight
fillcircle = 1
fillsquare = 254
fillstep = 10
crcle = [cwidth / 2, cheight / 2, csquare / 2]
sqr = [cwidth / 2 - csquare / 8, cheight / 2 - csquare / 8, csquare / 4, csquare / 4]

function setup() {
    frameRate(60)
    createCanvas(cwidth, cheight)

}

function draw() {
    noStroke()
    if (fillcircle >= 255 || fillcircle <= 0) {
        fillstep = -fillstep
    }
    fillcircle += fillstep
    fillsquare -= fillstep
    fill(fillcircle)
    ellipse(crcle[0], crcle[1], crcle[2])
    fill(fillsquare)
    beginShape(QUADS);
    vertex(sqr[0], sqr[1])
    vertex(sqr[0] + sqr[2], sqr[1])
    vertex(sqr[0] + sqr[2], sqr[1] + sqr[3])
    //stroke(255)
    vertex(sqr[0], sqr[1] + sqr[3])
    endShape(CLOSE)
}