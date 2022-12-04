import React from 'react'
// import files from tableconfigData
import Data from "./Components/tablecomponent";
import tableconfigData1 from "./jsonData/tableconfigData1.json"
import tableconfigData2 from "./jsonData/tableconfigData2.json"
import tableconfigData3 from "./jsonData/tableconfigData3.json"
import Maintableconfig from "./jsonData/Maintableconfig.json"




function App() {
  return (
    //  send props
    <div className="App">
    <h1>Table :-</h1>
    <Data tableconfigData = {Maintableconfig}/>
    <h1>Config Table 1 :-</h1>
    <Data tableconfigData = {tableconfigData1} />
    <h1>Config Table 2 :-</h1>
    <Data tableconfigData = {tableconfigData2} />
    <h1>Config Table 3 :-</h1>
    <Data tableconfigData = {tableconfigData3} />
    
    </div>
  );
}

export default App;
