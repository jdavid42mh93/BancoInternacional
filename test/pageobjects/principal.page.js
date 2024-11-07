import { $ } from '@wdio/globals'
import { menuOpcion } from '../constants/principal.js';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PrincipalPage extends Page {

    get personasSelector () {
        return $(menuOpcion.personas);
    }

    get cookies(){
        return $('/html/body/div[9]/div/div/p/a[1]')
    }

    get empresasSelector () {
        return $(menuOpcion.empresas);
    }

     async clickPersonasOpcion(){
        await this.personasSelector.click()
     }

     async clickCookies(){
         await this.cookies.click()
     }

     async clickEmpresasOpcion(){
        await this.empresasSelector.click()
     }

    open () {
        return super.open('login');
    }
}

export default new PrincipalPage();
