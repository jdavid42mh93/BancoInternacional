import { botones } from "../../constants/botones"

class Empresas {
    get creditosSelector () {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[2]/ul/li[3]/a/span')
    }

    get creditoComercialSelector() {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[2]/ul/li[3]/ul/li/a')
        
    }

    get simularBoton(){
        return $(botones.simularEmpresa)
    }

    get paramiOpcion(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[1]/div/div/div/div[1]/a[1]/img')
    }

    get comercialOpcion(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[1]/div/div/div/div[2]/a[3]/img')
    }

    get capitalTrabajoOpcion(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[1]/div/div/div/div[5]/a[1]/img')
    }

    //get volumenVentas(){
    //    return $('#vivienda-valor')
    //}

    get montoCredito(){
        return $('#empresa-valor')
    }

    get creditoTiempo(){
        return $('#empresa-tiempo')
    }

    get siguiente(){
        return $(botones.siguienteEmpresa)
    }

    get continuar(){
        return $(botones.continuarEmpresa)
    }

    async simulacionCreditoComercial () {
        await this.creditosSelector.moveTo()
        await this.creditoComercialSelector.click()

        await browser.pause(5000)
        await this.simularBoton.click()
        await browser.pause(5000)
        await this.paramiOpcion.click()
        await this.comercialOpcion.click()
        await this.capitalTrabajoOpcion.click()

        // Ingreso de valores 
        //await this.volumenVentas.setValue('100000')
        await this.montoCredito.setValue('80000')
        await this.creditoTiempo.setValue('12')

        await this.siguiente.click()

        await this.continuar.click()

        await browser.pause(10000)

    }
}

export default new Empresas()