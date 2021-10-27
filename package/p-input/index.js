import PInput from './src/index.vue'

PInput.install = function(app){
    app.component(PInput.name, PInput)
}

export default PInput