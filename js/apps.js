let $ = document;

let body = $.body;
let boxText = $.getElementById ("box_text");
let keyCode = $.getElementById ("key_code");
let boxsEventKey = $.getElementById ("box_event_key");
let boxsEventLocation = $.getElementById ("box_event_location");
let boxsEventWhich = $.getElementById ("box_event_which");
let boxsEventCode = $.getElementById ("box_event_code");


body.addEventListener ("keydown" , (event) => {
    event.preventDefault();

    let saveValueCode = event.code;
    let saveValueKey = event.key;
    let saveValueWhich = event.keyCode;
    let saveValueLocation = event.location;

    boxsEventKey.innerHTML = '<span id="text_value">'+saveValueKey+'</span>';
    boxsEventLocation.innerHTML = '<span id="text_value">'+saveValueLocation+'</span>';
    boxsEventWhich.innerHTML = '<span id="text_value">'+saveValueWhich+'</span>';
    boxsEventCode.innerHTML = '<span id="text_value">'+saveValueCode+'</span>';

});