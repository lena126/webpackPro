import React from "react";
import './src/index.less';
import ReactDom from "react-dom";
const App = () => {
    return (
      <div>
        <p>This is my first webpack project</p>
      </div>
    );
};
export default App;
ReactDom.render(<App />,document.getElementById("app"));
