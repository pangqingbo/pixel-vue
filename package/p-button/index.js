import PButton from './src/index.vue'

PButton.install = function(app){
    app.component(PButton.name, PButton)
}

export default PButton