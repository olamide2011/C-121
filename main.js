function preload() {
    classifier=ml5.imageClassifier('DoodleNet')
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    
}

function clear() {
    background("white")
}

function draw() {
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function classifyCanvas() {
    classifier.classify(canvas,gotResult)
}
function gotResult(error,results) {
    if(error){
     console.error(error);  
    }
    else {
        console.log(results);
        document.getElementById("label").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}