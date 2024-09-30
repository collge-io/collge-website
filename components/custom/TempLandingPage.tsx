import React from 'react'
import styles from "@/styles/TempLandingPage.module.css"
import HyperText from '../magicui/hyper-text'
import { RetroGridDemo } from '../retro-grid-demo'

function TempLandingPage() {
    return (
        <React.Fragment>

            <div style={{ height: "100vh" }}>
                <RetroGridDemo />
            </div>

        </React.Fragment>
    )
}

export default TempLandingPage