AOS.init();

const dataDoEvento = new Date("dec 12, 2024 19:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual

    const diaEmMS = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minEmMs = 1000 * 60
    

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS)
    const horasAteOEvento =  Math.floor((distanciaAteOEvento % horasEmMs * 24) / (horasEmMs))
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) /
    minEmMs)
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minEmMs) / 1000)


    document.getElementById('contador').innerHTML = `${diasAteOEvento}D ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
    
    if( distanciaAteOEvento < 0){
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = `Evento expirado`
    }
}, 1000)