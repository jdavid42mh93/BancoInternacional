import { botones } from "../../constants/botones"

class Empresas {
    get creditosSelector () {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[1]/ul/li[3]/a/span')
    }

    get creditoComercialSelector() {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[2]/ul/li[3]/ul/li/a')
    }

    get simularBoton(){
        return $(botones.simular)
    }

    get parami(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[1]/div/div/div/div[1]/a[1]/img')
    }

    get comercial(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[1]/div/div/div/div[1]/a[1]/img')
    }

    get capitalDeTrabajo(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[1]/div/div/div/div[5]/a[1]/img')
    }

    get monto(){
        return $('#vivienda-tiempo/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[2]/div/div/div[11]/div[2]/div[1]/input')
    }

    get tiempo(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[2]/div/div/div[11]/div[4]/label')
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
        await this.viviendaValor.setValue('100000')
        await this.viviendaFinanciamiento.setValue('50')
        await this.viviendaTiempo.setValue('36')

        await this.siguiente.click()

        await this.continuar.click()

        await browser.pause(10000)

    }
}

export default new Empresas()