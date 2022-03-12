import React from "react"

export const TextField = props => {
    const { name, label, placeholder, ...rest } = props

    return (
        <>
            { label && 
				<label htmlFor={name}>
					{label}
				</label>
			}

            <input type="text" name={name} id={name} placeholder={placeholder || ""} />
        </>
    )
}

export const SelectField = props => {
    const { name, label, options } = props

    return (
        <>
            { label &&
				<label htmlFor={name}>
					{label}
				</label>
			}

            <select id={name} name={name}>
                <option value="" >Seleccionar...</option>
                { options.map((optn, index) => (
					<option value={optn.value} label={optn.label || optn.value} />
				))}
            </select>
        </>
    )
}