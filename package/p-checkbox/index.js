import PCheckbox from './src/index.vue'

PCheckbox.install = function(app){
    app.component(PCheckbox.name, PCheckbox)
}

export default PCheckbox