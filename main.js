var video;
function setup(){
    var Canvas=createCanvas(320,240);
    Canvas.parent('webcam');
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(370,320)
    video.hide();
    Model=ml5.imageClassifier("https://storage.googleapis.com/tm-model/KA16eL9uT/model.json",modelloaded);
}
function modelloaded(){
    console.log("The Model is loaded");
}
function draw(){
    image(video,0,0,320,240)
    Model.classify(video,check);
}
function check(error,results){
    if(error){
        console.log(error);
    }
    else{
        var accuracy=results[0].confidence;
        accuracy=accuracy*100;
        accuracy=accuracy.toFixed(0) + "%";
        console.log(results);
        document.getElementById("prediction").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=accuracy;
    }
}