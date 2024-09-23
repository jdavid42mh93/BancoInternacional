import { $ } from '@wdio/globals'
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
        return $('/html/body/div[4]/main/article/div/section[2]/div/div/div/div/strong/div[2]/div/p/a[1]')
    }

    get compraCasaOpcion(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[1]/div/div/div/div[4]/a[1]/p/strong')
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
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[2]/div/div/div[9]/table/tbody/tr[2]/td[3]/a[1]')
    }

    get continuar(){
        return $('/html/body/div[4]/main/article/div/div[2]/strong/div[1]/div/section[2]/div/div/div[10]/table/tbody/tr/td[2]/a')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async personas () {
        const handles = await browser.getWindowHandles()

        await browser.switchToWindow(handles[0])
        
        await this.personasSelector.click()
        await browser.pause(10000)
        await this.creditosSelector.moveTo()
        await this.creditoHipotecarioSelector.click()

        const creditoAgil = $('/html/body/div[4]/main/article/div/section[2]/div/div/div/div/strong/div[1]/div/p[1]/strong')
        await creditoAgil.scrollIntoView()

        await this.simularBoton.click()

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
