const form = document.querySelector("form");
const YourName = document.querySelector("#YourName");
const EmailAddress = document.querySelector("#EmailAddress");
const PhoneNumber = document.querySelector("#PhoneNumber");
const Subject = document.querySelector("#Subject");
const ExampleText = document.querySelector("#ExampleText");

form.addEventListener("submit", formHandler);


function  formHandler(e){
    e.preventDefault();
    
    const forminfo ={
        YourName: YourName.Value,
        EmailAddress:EmailAddress.Value,
        PhoneNumber:PhoneNumber.Value,
        Subject:Subject.Value,
        ExampleText:ExampleText.Value,

    }
    console.log(forminfo);

    YourName.Value ='',
    EmailAddress.Value ='',
    PhoneNumber.Value ='',
    Subject.Value ='',
    ExampleText.Value =''

}
