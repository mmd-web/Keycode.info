let $ = document;

let boxText = $.getElementById ("box_text");
let eventkeyCode = $.getElementById ("key_code");
let eventKey = $.getElementById ("event_key");
let eventLocation = $.getElementById ("event_location");
let eventWhich = $.getElementById ("event_which");
let eventCode = $.getElementById ("event_code");
let allBox = $.getElementById ("box_event_obj");


document.body.addEventListener ("keydown" , (event) => {
    event.preventDefault();

    boxText.style.display = "none";
    eventkeyCode.style.display = "flex";
    allBox.style.display = "flex";

    let saveValueCode = event.code;
    let saveValueKeyCode = event.keyCode;
    let saveValueKey = event.key;
    let saveValueWhich = event.which;
    let saveValueLocation = event.location;

    eventKey.innerHTML = saveValueKey;
    eventkeyCode.innerHTML = saveValueKeyCode;
    eventLocation.innerHTML = saveValueLocation;
    eventWhich.innerHTML = saveValueWhich;
    eventCode.innerHTML = saveValueCode;

});