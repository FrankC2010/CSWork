function changeBG() {
    var myColor = prompt ("What Color do you want for the Background?");
    document.body.style.backgroundColor = myColor;
}
    
function changetextcolor () {
        var mycolo2 = prompt ("What color do you want the text to be?");
        document.body.style.color = mycolo2;
}
function welcomemessage () 
{ var name = prompt ("what is your name?")
    var message = "<h1>Hello " + name + "&#x263A</h1>"
document.getElementById("line1").innerHTML= message; }

function button1 () {
    var button1 = prompt ("What color do you want the text for Background color button to be?");
    document.getElementById("button1").style.color = button1
}

function button2 () {
    var button2 = prompt ("What color do you want the text for the text color button to be?")
    document.getElementById("button1").style.color = button2
}
