webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image'
    })


}
console.log('ml5 version:', ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelLoaded)

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak() {
    var synth = window.speechSynthsis;
    speak_data_1 = "The frist prediction is " + prediction_1;
    speak_data_2 = "The second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){if (error) {
    console.error(error);
} 
else{
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML = results[0].label
    document.getElementById("result_gesture_name2").innerHTML = results[1].label
prediction_1=results[0].label;
prediction_2=results[1].label;
}

speak();

if(results[0].label=="best")
{
    document.getElementById("update_hand").innerHTML = "&#127995"
}
if(results[0].label=="not good")
{
    document.getElementById("update_hand").innerHTML = "&#127995"
}
if(results[0].label=="victory")
{
    document.getElementById("update_hand").innerHTML = "&#127996"
}

if(results[1].label=="victory")
{
    document.getElementById("update_hand").innerHTML = "&#127998"
}
if(results[1].label=="best")
{
    document.getElementById("update_hand").innerHTML = "&#127997"
if(results[1].label=="not good")
{
    document.getElementById("update_hand").innerHTML = "&#127997"
}
