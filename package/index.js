import Button from "./Button";

const components = [
    Button
]

const install = function(app){
    components.forEach(component => {
        app.component(component.name, component)
    })
}

export default{
    install,
    ...components
}