import React from 'react';
import DiceComponent from "./components/DiceComponent";

function App() {
    return (
        <body className="h-screen  overflow-hidden bg-neutral-900 font-body">
        <div className="overflow-hidden">
            <DiceComponent/>
        </div>
        </body>
    );
}

export default App;
