document.getElementById("transaction").addEventListener("click", function () {
    const elements = document.querySelectorAll(".hide");
    for (const element of elements) {
      element.style.display = "none";
    }
    document.getElementById("transaction-details").style.display = "block";
    document.getElementById("latest-payment").style.display = "none";
    const styles = document.querySelectorAll('.removeStyle')
    for(const item of styles){
        item.classList.remove('selected');
    }
    document.getElementById("transaction").classList.add("selected");
    
  });

 