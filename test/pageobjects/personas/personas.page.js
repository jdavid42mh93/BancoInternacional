import { botones } from "../../constants/botones"
import { personas } from "../../constants/personas/personas"

class Personas {
    get creditosSelector () {
        return $(personas.creditos)
    }

    get creditoHipotecarioSelector() {
        return $(personas.creditoHipotecario)
    }

    get simularBoton(){
        return $(botones.simular)
    }

    get compraCasaOpcion(){
        return $(personas.compraCasa)
    }

    get viviendaValor(){
        return $(personas.viviendaValor)
    }

    get viviendaFinanciamiento(){
        return $(personas.viviendaFinaciamiento)
    }

    get viviendaTiempo(){
        return $(personas.viviendaTiempo)
    }

    get siguiente(){
        return $(botones.siguiente)
    }

    get continuar(){
        return $(botones.continuar)
    }

    async simulacionCreditoHipotecario () {
        await this.creditosSelector.moveTo()
        await this.creditoHipotecarioSelector.click()

        await browser.pause(5000)
        await this.simularBoton.click()
        await browser.pause(5000)
        await this.compraCasaOpcion.click()

        // Ingreso de valores 
        await this.viviendaValor.setValue('100000')
        await this.viviendaFinanciamiento.setValue('50')
        await this.viviendaTiempo.setValue('36')

        await this.siguiente.click()

        await this.continuar.click()

        await browser.pause(10000)

    }
}

export default new Personas()