const userInput=document.querySelector(".user_input");
const inputSubmit=document.querySelector("#add_btn");

//--------------------------- SUBMIT Button's default behaviour change-------------------------------------

userInput.addEventListener("submit", (event) => {
    event.preventDefault();
});

//----------------------------Submit button addeventlistner added--------------------------------------------

inputSubmit.addEventListener("click",(event)=>
{
    const error=document.querySelector(".error");

    const inputName=document.querySelector("#input_name");
    const inputMail=document.querySelector("#input_mail");
    const inputPhone=document.querySelector("#input_phone");

    // ----------------------------------if condition for giving error message--------------------------------
    if(inputName.value=="" || inputMail.value=="" || inputPhone.value=="")
    {
        error.innerText="Empty input field (s)";
        error.className="error_text";
        
         // inputName.addEventListener("focus",(event)=>
        // {
        //         error.innerText="";
        // });

        // inputMail.addEventListener("focus",(event)=>
        // {
        //         error.innerText="";
        // });
        // inputPhone.addEventListener("focus",(event)=>
        // {
        //         error.innerText="";
        // });
       
    }

// --------------------------------------else condition if submitted succesfully-------------------------------
    else  {
        const outputList=document.getElementById("output_list");
        //     error.innerText="";
//-------------------------------------Adding output-row and remove-button---------------------------------
        const row=document.createElement("li");
        outputList.appendChild(row);

        const outputName=document.createElement("p");
        outputName.innerText=inputName.value;
        row.appendChild(outputName);

        const outputMail=document.createElement("p");
        outputMail.innerText=inputMail.value;
        row.appendChild(outputMail);

        const outputPhone=document.createElement("p");
        outputPhone.innerText=inputPhone.value;
        row.appendChild(outputPhone);
        
        const removeButton=document.createElement("button");
        removeButton.innerText="Remove";
        row.appendChild(removeButton);
      

// ---------------------------------after submition input and text field must be empty again nd placeholder will be shown

        inputName.value="";
        inputMail.value="";
        inputPhone.value="";
// ---------------------------------for applying css to the output-------------------------------------
        row.className="row_list";
        outputName.className="output_detail";
        outputMail.className="output_detail";
        outputPhone.className="output_detail";
        removeButton.className="button_remove"
        
// ---------------------------------after clicking remove button all will be removed--------------------------- 
        removeButton.addEventListener("click",()=>
        {
            row.remove();
        })
        
}
});