function Classifire_audio(){
    navigator.mediaDevices.getUserMedia({audio:true})
    Model = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/glHyWtxfq/model.json', Classify_model)
}
function Classify_model(){
    Model.classify(getResult)
}
function getResult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        window.alert("Reload to stop Recognizer")
        document.getElementById("Out").innerHTML = "Sound Recognised is- "+ result[0].label
        document.getElementById("Acu").innerHTML = "Accurecy is- "+ (result[0].confidence * 100).toFixed()
        color_r = Math.floor(Math.random()*255) + 1
        color_g = Math.floor(Math.random()*255) + 1
        color_b = Math.floor(Math.random()*255) + 1
        document.getElementById("Out").style.color = "rgb("+color_r+","+color_g+","+color_b+")"
        document.getElementById("Acu").style.color = "rgb("+color_r+","+color_g+","+color_b+")"
        
        if(result[0].label == "cat sound"){
            document.getElementById("Imag").src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif"
        }
        else{
            document.getElementById("Imag").src = "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_392/MTc0MjU0ODc2MjYyNDc1NjQ0/drawing-a-cartoon-dog.webp"//put the dog picture in it//
        }
    }
}