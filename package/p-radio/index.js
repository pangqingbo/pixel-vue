import PRadio from './src/index.vue'

PRadio.install = function(app){
    app.component(PRadio.name, PRadio)
}

export default PRadio