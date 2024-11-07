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

    get empresasSelector(){
        return$('')
    }

    get cookies(){
        return $('/html/body/div[9]/div/div/p/a[1]')
    }




     async clickPersonasOpcion(){
        await this.personasSelector.click()
     }

     async clickEmpresasOpcion(){
        await this.personasSelector.click()
     }
     async clickCookies(){
         await this.cookies.click()
     }

    open () {
        return super.open('login');
    }
}

export default new PrincipalPage();
