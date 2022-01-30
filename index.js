
let emailCollector= document.getElementById("emailCollector")
emailCollector.addEventListener("submit", event =>{
     
    event.preventDefault()
    let ourFormInfo = new FormData(event.target)

    let fname= ourFormInfo.get("firstName")
    let emailId= ourFormInfo.get("emailAddress")

    let updatedInfo =`            
    <h2>Congratulations ${fname} </h2>
    <p>You're are on your way to become a BBQ master! </p>
    <p>You will receive updates on - ${emailId}</p>
   

    <p class="fine-print">We'll never share your information
     without your permission</p>`

    let updateMainContent= document.getElementById("updateMain")
    updateMainContent.innerHTML = updatedInfo

})