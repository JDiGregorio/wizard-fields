import React from "react"
import { useWizardPages } from "./Wizard"

import "../css/styles.css"

export const Pages = ({ children }) => {
    const { activePageIndex } = useWizardPages(React.Children.count(children))

    return (
        <div className="wizard__content">
            {React.Children.toArray(children)[activePageIndex]}
        </div>
    )
}