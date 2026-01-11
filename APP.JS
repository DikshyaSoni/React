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
 const parent = React.createElement("div",{id:"parent"}, 

     [React.createElement("div",{id: "child1"},

        [ React.createElement("h1",{},"heyyyyy"),
            React.createElement("h2",{},"heyyyyy hi"),
        ]),
        React.createElement("div",{id: "child2"},

        [ React.createElement("h1",{},"heyyyyy"),
            React.createElement("h2",{},"heyyyyy hi"),
        ]),

    ]);
            const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(parent)
     

    //  THIS REACT CODE WILL REPLACE THE HELLO WORLD FROM INDEX.HTML
//  such a complex code so there exists #JSX
 
 
 
 
//  const heading = React.createElement("h1",{},"Newww");
    //  const root = ReactDOM.createRoot(document.getElementById("root"));
    //  root.render(heading);