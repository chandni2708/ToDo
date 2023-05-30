window.onload = () => {
    const form1 = document.querySelector("#addForm");
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");
    
            let editItem = null;


        form1.addEventListener("submit", addItem);
        items.addEventListener("click", removeItem);
}
         function addItem(e) {
        e.preventDefault();
         debugger;
        if (submit.value != "Submit") {
            console.log("Hello");

          editItem.target.parentNode.childNodes[0].data
                = document.getElementById("item").value;
    
            submit.value = "Submit";
            document.getElementById("item").value = "";

            document.getElementById("lblsuccess").innerHTML
                = "Text edited successfully";
    
            document.getElementById("lblsuccess")
                .style.display = "block";
            
              setTimeout(function() {
                document.getElementById("lblsuccess")
                                .style.display = "none";
            }, 1000);
     return false;
             }
             
             let newItem = document.getElementById("item").value;
        if (newItem.trim() == "" || newItem.trim() == null)
            return false;
        else
            document.getElementById("item").value = "";
    
        let li = document.createElement("li");
             li.className = " btn btn-outline-dark text-center mb-4 fs-5 justify-content-center p-4 d-flex flex-nowrap w-auto";
             
        let editButton = document.createElement("icon");
    
        editButton.className = 
                "mx-2 bi bi-pencil-square fs-4 float-right edit";
             e.innerHTML = '<i class="bi bi-pencil-square"></i>';
             
               let deleteButton = document.createElement("icon");
        
        deleteButton.className = 
            " fs-4 bi bi-trash-fill float-right delete";
    
          e.innerHTML = '  <i class="bi bi-trash-fill"></i>';
        li.appendChild(document.createTextNode(newItem));
        li.appendChild(editButton);    
        li.appendChild(deleteButton);
        
    
        items.appendChild(li);
    }
       function removeItem(e) {
        e.preventDefault();
        if (e.target.classList.contains("delete")) {
            if (confirm("Are you Sure?")) {
                let li = e.target.parentNode;
                items.removeChild(li);
                document.getElementById("lblsuccess").innerHTML
                    = "Text deleted successfully";
    
                document.getElementById("lblsuccess")
                            .style.display = "block";
    
                setTimeout(function() {
                    document.getElementById("lblsuccess")
                            .style.display = "none";
                }, 1000);
            }
           }
           debugger;
        if (e.target.classList.contains("edit")) {
            document.getElementById("item").value =
                e.target.parentNode.childNodes[0].data;
            submit.value = "EDIT";
            editItem = e;
        }
    }
    function toggleButton(ref, btnID) {
        document.getElementById(btnID).disabled = false;
    }