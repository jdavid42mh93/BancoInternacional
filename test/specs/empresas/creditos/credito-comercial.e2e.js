// --import personasPage from '../../../pageobjects/personas/personas.page'
// import principalPage from '../../../pageobjects/principal.page'

import empresasPage from "../../../pageobjects/empresas/empresas.page"

describe('Pagina Banco Internacional', () => {
    it('Creditos - Credito Comercial', async () => {
        await browser.maximizeWindow()
        await principalPage.open()
        await principalPage.clickCookies()
        await principalPage.clickEmpresasOpcion()
        await empresasPage.simulacionCreditoComercial()
    })
})