Webcam.set({
    width: 350,
    height: 300,
    dest_width: 350,
    dest_height: 300,
    crop_width: 350,
    crop_height: 300,
    image_format: 'png',
    png_quality: 100
 });
 live_camera = document.getElementById("live-camera");
 Webcam.attach('#live-camera');
 
 function snap(){
     Webcam.snap(function(data_url){
         document.getElementById("photo").innerHTML = "<img src='"+ data_url + "' width='325' height='275' style='margin-top: 10px;' id='img1'>";
     });
 }
 console.log("ml5 version: " + ml5.version);
brain_find = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/j4BiXmw_s/model.json", check);
function check(){
    console.log("modelLoaded");
}
function identify(){
    imgGiven = document.getElementById("img1");
    brain_find.classify(imgGiven, result);
}
function result(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
       document.getElementById("object").innerHTML = results[0].label;
       document.getElementById("accuracy").innerHTML = (results[0].confidence.toFixed(3)) * 100 + "%"; 

    }


}

