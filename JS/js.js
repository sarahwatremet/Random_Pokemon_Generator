//lines below are to set up the GIF random generator from Giphy's API
let xhr = $.get("https://api.giphy.com/v1/gifs/random?api_key=OiOKipuQjatG66Aa7HT68nzNzvop8KzY&tag=pokemon&rating=g");
xhr.done(function(data) {
    $( "#source" ).attr( "src", data.data.embed_url);
    console.log("success got data", data);
})

//lines below are to handle the GIF refresh 
function buttonClickGET() {
    let xhr = $.get("https://api.giphy.com/v1/gifs/random?api_key=OiOKipuQjatG66Aa7HT68nzNzvop8KzY&tag=pokemon&rating=g");
    xhr.done(function(data) {
        $( "#source" ).attr( "src", data.data.embed_url);
        console.log("success got data", data);
    })
}


