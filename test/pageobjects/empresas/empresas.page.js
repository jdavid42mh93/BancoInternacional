import { botones } from "../../constants/botones"

class Empresas {
    get creditosSelector () {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[2]/ul/li[3]/a/span')
    }

    get creditoComercialSelector() {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[2]/ul/li[3]/ul/li/a')
    }

    get simularBoton(){
        return $(botones.simularEmpresas)
    }

    get paraMi(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[1]/div/div/div/div[1]/a[1]')
    }

    get comercial(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[1]/div/div/div/div[2]/a[3]')
    }

    get capitalTrabajo(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[1]/div/div/div/div[5]/a[1]')
    }

    get monto(){
        return $('#empresa-valor')
    }

    get tiempo(){
        return $('#empresa-tiempo')
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