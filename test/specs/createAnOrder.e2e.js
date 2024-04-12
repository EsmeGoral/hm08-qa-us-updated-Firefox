const page = require('../../page');
const helper = require('../../helper')


    //Setting Addresses
describe("Create an order", () => {
    it('Should set address on address tab', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const fromField = await $('#from');
        await fromField.setValue('East 2nd Street, 601'); 
        const toField = await $('#to');
        await toField.setValue('1300 1st St');
        await browser.pause(10000);
        await expect (fromField).toHaveValue('East 2nd Street, 601');  
        await expect (toField).toHaveValue('1300 1st St');

    })
     
    //Selecting the Supportive Plan
    it('should select supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const callATaxiButton = await $(page.callATaxiButton);
        callATaxiButton.click(); 
        const supportivePlanButton = await $(page.supportivePlanButton); 
        await supportivePlanButton.click();
        await supportivePlanButton.waitForDisplayed();
        await browser.pause(10000);
        await expect (supportivePlanButton).toBeDisplayed();
    })


    //Filling the Phone number 
     it('should fill the phone number in the phone number modual', async () => {
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
   await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

})


  //Add credit card and CVV in payment modual 
it('should add credit card and CVV in credit card modual ', async () => {
   await browser.url(`/`)
   await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
   const PaymentButton = await $(page.PaymentButton);
   await PaymentButton.click();
   const AddCardButton = await $(page.AddCardButton);
   await AddCardButton.click();
   const CreditCardNumberField = await $(page.CreditCardNumberField);
   await CreditCardNumberField.setValue(1234667899000000);
   await CreditCardNumberField.waitForDisplayed();
   const CVVCodeField = await $(page.CVVCodeField);
    await CVVCodeField.setValue(5479);
    await CVVCodeField.waitForDisplayed();
    const LinkButton = await $(page.LinkButton);
    await $(page.LinkButton).click()
    const CancelButton = await $(page.CancelButton);
    await $(page.CancelButton).click()
    await expect (PaymentButton).toBeDisplayed('card');


})


 //Adding a message to the driver 
 it('should add a message to the driver in message block ', async () => {
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
   const MessageToDriver = await $(page.MessageToDriver);
   await MessageToDriver.setValue('Hello')
   await expect (MessageToDriver).toBeDisplayed('Hello');

})



 //Ordering a Blanket and handkerchiefs 
 it('should order blanket+handkerchiefs from the order requirments block', async () => {
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const BlanketAndHandkerchiefsButton = await $(page.BlanketAndHandkerchiefsButton);
    await BlanketAndHandkerchiefsButton.click();
    await BlanketAndHandkerchiefsButton.waitForDisplayed();
    await expect (BlanketAndHandkerchiefsButton).toBeExisting();

})



 //Ordering 2 Ice creams
 it('should order 2 Ice creams from the order requirments block', async () => {
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const IceCreamButton = await $(page.IceCreamButton);
    await IceCreamButton.click();
    await IceCreamButton.click();
    await IceCreamButton.waitForDisplayed();
    await expect (IceCreamButton).toBeDisplayed('2');

})


 //The car search modal appears
 it('should appear a car search modal ', async () => {
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const OrderButton = await $(page.OrderButton);
    await OrderButton.waitForDisplayed();
    await OrderButton.click();
    const CarSearchModal = await $(page.CarSearchModal);
    await browser.setupInterceptor();
    await expect (CarSearchModal).toBeExisting();
    await browser.pause(2000);
  
 
})


}) 



 