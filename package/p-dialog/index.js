import PDialog from './src/index.vue'

PDialog.install = function(app){
    app.component(PDialog.name, PDialog)
}

export default PDialog