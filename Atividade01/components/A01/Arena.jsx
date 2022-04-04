import React from "react"

const Arena = (props) => {
    return <div>
        <h3>
            Arena: {props.arena}
        </h3>
        {React.Children.map(props.children, hero => {
            return React.cloneElement(hero, {...props})
        })}
    </div>
}

export default Arena