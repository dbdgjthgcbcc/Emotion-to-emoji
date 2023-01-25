prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '">';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DC_gEk7tW/')
function modelLoaded() {
    console.log('modle Loaded')
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is..." + prediction_1;
    speak_data_2 = "The second prediction is..." + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + spaek_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}

function check()
{
    img-document.getElementById('captured_image');
    calssifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        comnsole.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML= results[0].label;
        document.getElementById("result_emotion_name2").innerHTML= results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label =="happy")
        {
            document.getElementById("update_emoji").innerHTML="&#128515;"
        }
        if(results[0].label =="sad")
        {
            document.getElementById("update_emoji").innerHTML="&#128531;"
        }
        if(results[0].label =="angry")
        {
            document.getElementById("update_emoji").innerHTML="&#128544;"
        }
        if(results[0].label =="crying")
        {
            document.getElementById("update_emoji").innerHTML="&#128557;"
        }
        if(results[0].label =="raging")
        {
            document.getElementById("update_emoji").innerHTML="&#129324;"
        }
        if(results[0].label =="surprised")
        {
            document.getElementById("update_emoji").innerHTML="&#129327;"
        }

        if(results[1].label =="happy")
        {
            document.getElementById("update_emoji2").innerHTML="&#128515;"
        }
        if(results[1].label =="sad")
        {
            document.getElementById("update_emoji2").innerHTML="&#128531;"
        }
        if(results[1].label =="angry")
        {
            document.getElementById("update_emoji2").innerHTML="&#128544;"
        }
        if(results[1].label =="crying")
        {
            document.getElementById("update_emoji2").innerHTML="&#128557;"
        }
        if(results[1].label =="raging")
        {
            document.getElementById("update_emoji2").innerHTML="&#129324;"
        }
        if(results[1].label =="surprised")
        {
            document.getElementById("update_emoji2").innerHTML="&#129327;"
        }
    }
}