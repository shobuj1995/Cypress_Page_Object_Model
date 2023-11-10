export class registrationPage{
    weblocators={
        firstName:"input[id='customer.firstName']",
        lastName:"input[id='customer.lastName']",
        address:"input[id='customer.address.street']",
        city:"input[id='customer.address.city']",
        state:"input[id='customer.address.state']",
        zipcode:"input[id='customer.address.zipCode']",
        phone:"input[id='customer.phoneNumber']",
        ssn:"input[id='customer.ssn']",
        userName:"input[id='customer.username']",
        passWord:"input[id='customer.password']",
        confirmPassword:"input[id='repeatedPassword']",
        registrationButton: "input[type=submit][value=Register]"
    }
    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    typeFirstName(Fname){
        cy.get(this.weblocators.firstName).type(Fname)
    }
    typeLastName(Lname){
        cy.get(this.weblocators.lastName).type(Lname)
    }
    typeAddress(Address){
        cy.get(this.weblocators.address).type(Address)
    }
    typeCity(City){
        cy.get(this.weblocators.city).type(City)
    }
    
    typeState(State){
        cy.get(this.weblocators.state).type(State)
    }
    typeZipcode(Zipcode){
        cy.get(this.weblocators.zipcode).type(Zipcode)
    }
    typePhoneNumber(PhoneNumber){
        cy.get(this.weblocators.phone).type(PhoneNumber)
    }
    typeSsn(SSN){
        cy.get(this.weblocators.ssn).type(SSN)
    }
    typeUserName(UserName){
        cy.get(this.weblocators.userName).type(UserName)
    }
    typePassword(Password){
        cy.get(this.weblocators.passWord).type(Password)
    }
    typeConfirmPassword(Cpassword){
        cy.get(this.weblocators.confirmPassword).type(Cpassword)
    }
    clickOnRegisterButton(){
        cy.get(this.weblocators.registrationButton).click()
    }
}