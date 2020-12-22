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
         document.getElementById("photo").innerHTML = "<img src='"+ data_url + "' width='325' height='275' style='margin-top: 10px;'>";
     });
 }
 console.log("ml5 version: " + ml5.version);
brain_find = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/epyhIeZyZ/model.json", check);
function check(){
    console.log("modelLoaded");
}