var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txtinput");
var outputDiv = document.querySelector("#txtoutput");

var serverURl = "https://api.funtranslations.com/translate/shakespeare.json"



function getTranslationURL(input) {
    return serverURl + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occurred", error);
    alert("Oh Snap 😬! Its not you its us! Server Down")
}

function clickHandler() {
    var inputText = txtinput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)


};

btntranslate.addEventListener("click", clickHandler)