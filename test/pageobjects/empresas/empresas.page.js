import { botones } from "../../constants/botones"
import { empresas } from "../../constants/empresas/empresas"

class Empresas {
    get creditosSelector () {
        return $(empresas.creditos)
    }

    get creditoComercialSelector() {
        return $(empresas.creditoComercial)
    }

    get simularBoton(){
        return $(botones.simularEmpresas)
    }

    get paraMi(){
        return $(empresas.paraMi)
    }

    get comercial(){
        return $(empresas.comercial)
    }

    get capitalTrabajo(){
        return $(empresas.capitalTrabajo)
    }

    get monto(){
        return $(empresas.monto)
    }

    get tiempo(){
        return $(empresas.tiempo)
    }

    get siguiente(){
        return $(botones.siguienteEmpresas)
    }

    get continuar(){
        return $(botones.continuarEmpresas)
    }

    async simulacionCreditoComercial () {
        await this.creditosSelector.moveTo()
        await this.creditoComercialSelector.click()

        await browser.pause(5000)
        await this.simularBoton.click()
        
        await browser.pause(5000)
        await this.paraMi.click()

        await browser.pause(5000)
        await this.comercial.click()

        await browser.pause(5000)
        await this.capitalTrabajo.click()

        // Ingreso de valores 
        await this.monto.setValue('100000')
        await this.tiempo.setValue('36')
        // await this.viviendaTiempo.setValue('36')

        await this.siguiente.click()

        await this.continuar.click()

        await browser.pause(5000)

    }
}

export default new Empresas()