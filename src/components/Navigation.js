import React from "react"
import { useWizardButtons } from "./Wizard"

import "../css/styles.css"

export const Navigation = () => {
    const { activePageIndex, goNextPage, goPrevPage, steps } = useWizardButtons()

    // console.log({ activePageIndex, steps })

    return (
        <div className="wizard__buttons">
			{ activePageIndex > 0 ? (
				<button onClick={goPrevPage} className="wizard__buttons-left">
					Anterior
				</button>
			) : (null)}

			{ activePageIndex < steps - 1 ? (
				<button onClick={goNextPage} className="wizard__buttons-right">
					Siguiente
				</button>
			) : (null)}
        </div>
    )
}