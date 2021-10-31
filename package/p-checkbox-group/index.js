import PCheckboxGroup from './src/index.vue'

PCheckboxGroup.install = function(app){
    app.component(PCheckboxGroup.name, PCheckboxGroup)
}

export default PCheckboxGroup