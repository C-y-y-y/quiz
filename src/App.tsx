import React from "react";
import {Board} from "./components/Board";
import {EndBanner, StartBanner} from "./components/Banner";

export const App: React.FC = () => {
    return (
        <main>
            <StartBanner/>
            <Board/>
            <EndBanner/>
        </main>
    )
}