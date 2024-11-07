import { botones } from "../../constants/botones"

class Empresas {
    get creditosSelector () {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[2]/ul/li[3]/a/span')
    }

    get creditoComercial() {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[2]/ul/li[3]/ul/li/a')
    }

    get simularBoton(){
        return $(botones.simEmpresas)
    }

    get simularBoton(){
        return $(botones.paraMi)
    }

    get simularBoton(){
        return $(botones.comercial)
    }

    get simularBoton(){
        return $(botones.capTrabajo)
    }

    get Monto(){
        return $('#Monto')
    }

    get Tiempo(){
        return $('#tiempo')
    }

    
    get siguiente(){
        return $(botones.siguiente)
    }

    get continuar(){
        return $(botones.continuar)
    }

    async simulacionCreditoComercial () {
        await this.creditosSelector.moveTo()
        await this.creditoComercialSelector.click()

        await browser.pause(5000)
        await this.simularBoton.click()
        await browser.pause(5000)
        await this.compraCasaOpcion.click()

        // Ingreso de valores 
        await this.Monto.setValue('100000')
        await this.Tiempo.setValue('60')
       
        await this.siguiente.click()

        await this.continuar.click()

        await browser.pause(10000)

    }
}

export default new Empresas()