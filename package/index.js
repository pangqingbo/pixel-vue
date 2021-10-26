import Button from "./Button";
import PInput from "./Input";

const components = [
    Button, PInput
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