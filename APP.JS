{/* <div id="parent">
    <div id="child1">
     <h1>heyyyyyy</h1>
     <h2>heyyyyy hi <h2>
     </div>
    <div id="child2">
     <h1>heyyyyyy</h1>
     <h2>heyyyyy hi <h2>
     </div>
    </div>
  */}
//  EPISODE1

import React from "react";
import ReactDOM from "react-dom/client";
 const parent = React.createElement("div",{id:"parent"}, 

     [React.createElement("div",{id: "child1", key: "child1" },

        [ React.createElement("h1",{},"heyyyyy"),
            React.createElement("h2",{},"heyyyyyaaaaaa hi"),
        ]),
        React.createElement("div",{id: "child2", key: "child2" },

        [ React.createElement("h1",{},"heyyyyyjjjjjjjjjjkkkkk"),
            React.createElement("h2",{},"heyyyyy vdgdgfhi"),
        ]),

    ]);
            const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(parent)
     

    //  THIS REACT CODE WILL REPLACE THE HELLO WORLD FROM INDEX.HTML
//  such a complex code so there exists #JSX
 
 
 
 
//  const heading = React.createElement("h1",{},"Newww");
    //  const root = ReactDOM.createRoot(document.getElementById("root"));
    //  root.render(heading);