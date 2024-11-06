import { $ } from '@wdio/globals'
import { botones } from '../constants/botones.js';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PrincipalPage extends Page {
    /**
     * define selectors using getter methods
     */
    get personasSelector () {
        return $('/html/body/div[4]/header[2]/div[1]/nav/div/ul/li[1]/a');
    }

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

    get cookies(){
        return $('/html/body/div[9]/div/div/p/a[1]')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async personas () {
        await this.cookies.click()
        await this.personasSelector.click()
        await browser.pause(10000)
        await this.creditosSelector.moveTo()
        await this.creditoHipotecarioSelector.click()

        // const creditoAgil = $('/html/body/div[4]/main/article/div/section[2]/div/div/div/div/b/strong/div[1]/div/p[1]/strong')
        // await creditoAgil.scrollIntoView()
        await browser.pause(5000)
        await this.simularBoton.click()
        await browser.pause(5000)
        await this.compraCasaOpcion.click()

        await this.viviendaValor.setValue('100000')
        await this.viviendaFinanciamiento.setValue('50')
        await this.viviendaTiempo.setValue('36')

        await this.siguiente.click()

        await this.continuar.click()

        await browser.pause(10000)

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new PrincipalPage();
