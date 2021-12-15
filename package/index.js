import PButton from "./p-button";
import PInput from "./p-input";
import PCheckbox from "./p-checkbox"
import PCheckboxGroup from "./p-checkbox-group";
import PDialog from "./p-dialog"
import PRadio from "./p-radio"

const components = [
    PButton, PInput, PCheckbox, PCheckboxGroup, PDialog, PRadio
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