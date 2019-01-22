import * as React from 'react'
import * as ReactDOM from 'react-dom'

export default class hello extends React.Component {
    render() {
        console.log("Hello, console!")
        return(
            <div><h1>Hello, React / Go world!</h1></div>
        )
    }
}
