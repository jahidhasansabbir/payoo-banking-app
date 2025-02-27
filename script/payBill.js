document.getElementById("payBill").addEventListener("click", function () {
  const elements = document.querySelectorAll(".hide");
  for (const element of elements) {
    element.style.display = "none";
  }
  document.getElementById("pay-bill").style.display = "block";
  document.getElementById("latest-payment").style.display = "none";
  const styles = document.querySelectorAll(".removeStyle");
  for (const item of styles) {
    item.classList.remove("selected");
  }
  document.getElementById("payBill").classList.add("selected");
});

document
  .getElementById("pay-bill-btn")
  .addEventListener("click", function (ev) {
    ev.preventDefault();
    const balanceText = document.getElementById("balance").innerText;
    const bill = document.getElementById("bill").value;
    const billerAccount = document.getElementById("biller-account").value;
    const pin = document.getElementById("pay-bill-pin").value;
    const amountValue = document.getElementById("pay-bill-amount").value;
    const amount = parseFloat(amountValue);
    const balance = parseFloat(balanceText);

    let d = new Date();
    let h = d.getHours() % 12 || 12;
    let m = String(d.getMinutes()).padStart(2, "0");
    let ap = d.getHours() >= 12 ? "PM" : "AM";
    console.log(`${h}:${m}${ap}`);
    //    button event handler
    if (billerAccount.length === 11) {
      if (pin === "1234") {
        if (balance > amount) {
          const sum = balance - amount;
          document.getElementById("balance").innerText = sum;
        } else alert("Insufficient balance!");
      } else alert("pin wrong");
    } else alert("wrong account number");

    document.getElementById("pay-bill-amount").value = "";
    const parent = document.getElementById("transaction-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="collapse-title text-xl font-medium flex gap-3 bg-white">
                                    <div class="bg-gray-200 rounded-full p-2 flex justify-center items-center">
                                        <img src="assets/wallet1.png" class="w-8 h-8">
                                    </div>
                                    <div>
                                        <h4 class="text-xl">${bill}</h4>
                                        <p class="text-xs text-gray-900 font-normal">Today ${h}:${m} ${ap}</p>
                                    </div>
                                </div>
    
    `;
    div.classList.add('collapse', 'border-base-300', 'bg-base-200' ,'border')
    parent.appendChild(div);
  });
