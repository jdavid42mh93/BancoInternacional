// import empresasPage from '../../../pageobjects/empresas/empresas.page'
// import principalPage from '../../../pageobjects/principal.page'

import empresasPage from "../../../pageobjects/empresas/empresas.page"
import principalPage from "../../../pageobjects/principal.page"

describe('Pagina Banco Internacional', () => {
    it('Creditos - Credito Comercial', async () => {
        await browser.maximizeWindow()
        await principalPage.open()
        await principalPage.clickCookies()
        await principalPage.clickEmpresasOpcion()
        await empresasPage.simulacionCreditoComercial()
      
    })
})