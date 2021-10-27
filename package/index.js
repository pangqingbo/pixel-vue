import Button from "./Button";
import PInput from "./p-input";
import PCheckbox from "./p-checkbox"

const components = [
    Button, PInput, PCheckbox
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