import { botones } from "../../constants/botones"

class Personas {
    get creditosSelector () {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[1]/ul/li[3]/a/span')
    }

    get creditoHipotecarioSelector() {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[1]/ul/li[3]/ul/li[1]/a')
    }

    get simularBoton(){
        return $(botones.simular)
    }

    get compraCasaOpcion(){
        return $('/html/body/div[4]/main/article/div/div[2]/b/strong/div[1]/div/section[1]/div/div/div/div[4]/a[1]/img')
    }

    get viviendaValor(){
        return $('#vivienda-valor')
    }

    get viviendaFinanciamiento(){
        return $('#vivienda-financiamiento')
    }

    get viviendaTiempo(){
        return $('#vivienda-tiempo')
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