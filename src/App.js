import React from "react"

import Wizard from "./components/Wizard"
import { Progress } from "./components/Progress"
import { Navigation } from "./components/Navigation"
import { Pages } from "./components/Pages"
import { Page } from "./components/Page"

import "./css/styles.css"

const plantilla = require('./Plantilla.json')

const initialState = {
    activePageIndex: 0
}

const App = () => {
    return (
        <Wizard initialState={initialState}>
            <Progress plantilla={plantilla.version} />

            <Navigation />

            <Pages>
                { plantilla.pages.map((page, index) => (
                    <Page key={index} title={page.title} instructions={page.instructions} fields={page.fields} />
                ))} 
            </Pages>
        </Wizard>
    )
}

export default App