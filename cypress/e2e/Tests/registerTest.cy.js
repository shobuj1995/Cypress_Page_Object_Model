import { registrationPage } from "../../../Pages/registrationPage"
const registrationPageobj= new registrationPage();
import RegistrationData from "../../fixtures/RegistrationData.json"
describe("Registarion Test Suite",()=>{
    it("User Registration",()=>{
        registrationPageobj.openURL();
        registrationPageobj.typeFirstName(RegistrationData.firstName);
        registrationPageobj.typeLastName(RegistrationData.lastName);
        registrationPageobj.typeAddress(RegistrationData.address);
        registrationPageobj.typeCity(RegistrationData.city);
        registrationPageobj.typeState(RegistrationData.state);
        registrationPageobj.typeZipcode(RegistrationData.zipcode);
        registrationPageobj.typePhoneNumber(RegistrationData.phone);
        registrationPageobj.typeSsn(RegistrationData.ssn);
        registrationPageobj.typeUserName(RegistrationData.userName);
        registrationPageobj.typePassword(RegistrationData.passWord);
        registrationPageobj.typeConfirmPassword(RegistrationData.confirmPassword);
        registrationPageobj.clickOnRegisterButton();

        cy.get('#rightPanel > p').should("contain","Your account was created successfully.")

    })
 

})