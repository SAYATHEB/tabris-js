import {CheckBox} from 'tabris';

let widget: CheckBox = new CheckBox();

// Properties
let checked: boolean;
let text: string;

checked = widget.checked;
text = widget.text;

widget.checked = checked;
widget.text = text;

// Events

widget.on('change:checked', (event) => {
  let self: CheckBox = event.target;
  let checked: boolean = event.value;
});
