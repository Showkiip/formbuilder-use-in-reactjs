import $ from "jquery";
import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "formBuilder in React"
  },
  {
    type: "paragraph",
    label: "This is a demonstration of formBuilder running in a React project."
  }
];

/* 
The order of the imports and requires is very important, especially in the online enviornment.
The two jQuery libraries must be imported using Node's require(), and not ES6 import.
Also, these two requires MUST come after setting the global jQuery and $ symbols.

In my Babel/Webpack project, the type and order of the imports is a little less sensitive.
For my project, the following alternative works:

    import $ from 'jquery';
    import React from 'react';
    import ReactDOM from 'react-dom';
    import 'jquery-ui-sortable';

    window.jQuery = $;
    window.$ = $;

    require('formBuilder');
*/

class FormBuilder extends Component {
  fb = createRef();
  componentDidMount() {
    $(this.fb.current).formBuilder({ formData });
  }

  render() {
    return (
      <div className="bg-gray-100 p-4">
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="alert alert-info mb-4">
          This is an example of how to use formBuilder with React. The JSON data for this form was set programmatically.
        </div>
        <div id="fb-editor" ref={this.fb} />
      </div>
    </div>
    )
  }
}

ReactDOM.render(<FormBuilder />, document.getElementById("root"));
