import personasPage from '../../../pageobjects/personas/personas.page'
import principalPage from '../../../pageobjects/principal.page'

describe('Pagina Banco Internacional', () => {
    it('Creditos - Credito Hipotecario', async () => {
        await browser.maximizeWindow()
        await principalPage.open()
        await principalPage.clickCookies()
        await principalPage.clickPersonasOpcion()
        await personasPage.simulacionCreditoHipotecario()
    })
})