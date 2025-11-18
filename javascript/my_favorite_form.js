document.addEventListener("DOMContentLoaded",function(){ 
    const titleInput = document.getElementById("title");  
    const titleError = document.getElementById("titleError");
    const value = titleInput.value.trim();
    const startDateInput = document.getElementById("start_date");
    const start_DateError = document.getElementById("start_dateError");
    const genreInput = document.getElementById("genre");
    const genreError = document.getElementById("genreError");
    const typeButtons = document.getElementById("typeButtons");
    const typeError = document.getElementById("typeError");
    const summaryInput = document.getElementById("summary");
    const summaryError = document.getElementById("summaryError");
    const form = document.getElementById("animeform");
    function validateGenre(){
        if (genreInput.value === ""){
            genreError.textContent = "Genre is required.";
            return false;
        }else{
            genreError.textContent = "";
            return true;
        }
    }
    function validateSummary(){
        if (summaryInput.value.trim() ==="") {
        summaryError.textContent = "Summary is required.";
        return false;
       } else {
        summaryError.textContent = "";
        return true;
       }
    }
    function validateTitle(){
        if (value.length > 50){ 
            titleError.textContent = "No more than 50 characters allowed.";
            return false;
        }
        alert("validate title");
        if (titleInput.value.trim()===""){
        titleError.textContent = "Title is required.";
        return false;
        }else{
            titleError.textContent = "";
            return true;
        }
    }
    function validateType(){
        let checkedType = document.querySelector("input[name='type']:checked");
        if (checkedType === null){
            typeError.textContent = "Type is required.";
            return false;
        }else{
            typeError.textContent = "";
            return true;
        }
     }    
    function validateStartDate(){
        if (!startDateInput.validity.valid){
            start_DateError.textContent = "invalid date.";
            return false;
        }
        start_DateError.textContent = "";
        return true;
    }
    form.addEventListener("submit",function(event){
        const isValid = validateTitle();
        if (!isValid){
            //stop submit(stop going to the url if input are wrong)
            event.preventDefault();
        }  
    });
    typeButtons.forEach(radioButton => {
        radioButton.addEventListener('blur',validateType);
    });
    titleInput.addEventListener("blur",validateTitle); 
    startDateInput.addEventListener("blur",validateStartDate);
    genreInput.addEventListener("blur",validateGenre);
    summaryInput.addEventListener("blur",validateSummary);
});
