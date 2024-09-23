import principalPage from '../pageobjects/principal.page'

describe('Pagina Banco Internacional', () => {
    it('Creditos - Credito Hipotecario', async () => {
        await browser.maximizeWindow()
        await principalPage.open()
        await principalPage.personas()
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
        //     expect.stringContaining('You logged into a secure area!'))
    })
})