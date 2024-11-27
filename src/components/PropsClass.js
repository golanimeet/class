import React from "react";

// Props use Class Component

class PropsClass extends React.Component {
    render() {
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default PropsClass;