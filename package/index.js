import PButton from "./p-button";
import PInput from "./p-input";
import PCheckbox from "./p-checkbox"
import PCheckboxGroup from "./p-checkbox-group";
import PDialog from "./p-dialog"

const components = [
    PButton, PInput, PCheckbox, PCheckboxGroup, PDialog
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