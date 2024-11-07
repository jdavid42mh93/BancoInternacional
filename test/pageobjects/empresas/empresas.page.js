import { botones } from "../../constants/botones"

class Empresas {
    get creditosSelector () {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[2]/ul/li[3]/a/span')
    }

    get creditoHipotecarioSelector() {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[2]/ul/li[3]/ul/li/a')
    }

    get simularBoton(){
        return $(botones.simular)
    }

    
    get monto(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[2]/div/div/div[11]/div[2]/div[1]/input')
    }

    get viviendaTiempo(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[2]/div/div/div[11]/div[4]/div[1]/input')
    }

    get siguiente(){
        return $(botones.siguienteempresas)
    }

    get continuar(){
        return $(botones.continuarempresas)
    }

    async simulacionCreditoComercial () {
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

export default new Empresas()