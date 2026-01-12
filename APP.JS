import React from "react";
import ReactDom from "react-dom/client";

// react.create element  => object =>HTMLElement(render)

 

// jsx- HTML like or Xml-like syntx
// jsx- is tranpiled before it reaches the js engine -parcel-BABEl
// jsx- babel transpile it to react.createelement=> reactelement(jsobject ) => htmlelement(render)




//ReactElement
const jsxheading = <h1 id="heading" className="head">Namaste react with jsx</h1>;



// React Functional Components

const HeadingComponents =  ()=> {
  return <h1>Namaste R </h1>
};

const HeadComponents = () => <h1>Namaste react </h1>



const Components = () => (
    <div>
        {HeadingComponents()}
    < HeadComponents />
    
<h1 className="heading">Namaste react using functional Components</h1>
</div>
);



const root = ReactDom.createRoot(document.getElementById("root"));



// root.render(jsxheading);
// root.render(<HeadComponents />);
root.render(<Components />);