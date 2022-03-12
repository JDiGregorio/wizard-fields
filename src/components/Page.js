import React from "react"

import { TextField, SelectField } from "./FormElements"

export const Page = props => {

    const formSchema = props.fields

    const getFormElement = elementSchema => {
        if (elementSchema.type === "text" || elementSchema.type === "email" || elementSchema.type === "number") {
            return <TextField {...elementSchema} />
        }

        if (elementSchema.type === "select") {
            return <SelectField  {...elementSchema} />
        }
    }

    const reduceForm = formSchema.reduce((accum, fields) => {
        accum[fields.name] = fields

        return accum
    }, {})

    return (
        <div>
            <h2>{props.title}</h2>

            <p>{props.instructions}</p>

            <form>
                {Object.keys(reduceForm).map((key, ind) => {

                    return (
                        <div key={key}>
                            {getFormElement(reduceForm[key])}
                        </div>
                    )
                })}
            </form>
        </div>
    )
}