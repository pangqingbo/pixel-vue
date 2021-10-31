import Button from "./Button";
import PInput from "./p-input";
import PCheckbox from "./p-checkbox"
import PCheckboxGroup from "./p-checkbox-group";

const components = [
    Button, PInput, PCheckbox, PCheckboxGroup
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