document.getElementById("cashOut").addEventListener("click", function () {
  const elements = document.querySelectorAll(".hide");
  for (const element of elements) {
    element.style.display = "none";
  }
  document.getElementById("cash-out").style.display = "block";
  document.getElementById("latest-payment").style.display = "none";
  const styles = document.querySelectorAll(".removeStyle");
  for (const item of styles) {
    item.classList.remove("selected");
  }
  document.getElementById("cashOut").classList.add("selected");
});
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const balanceValue = document.getElementById("balance").innerText;
  const account = document.getElementById("cash-out-account").value;
  const amountValue = document.getElementById("cash-out-amount").value;
  const pin = document.getElementById("cash-out-pin").value;
  const balance = parseFloat(balanceValue);
  const amount = parseFloat(amountValue);
  if (account === "01892674230") {
    if (pin === "1234") {
      if (balance > amount) {
        const sum = balance - amount;
        document.getElementById("balance").innerText = sum;
      } else alert("Insufficient balance!");
    } else alert("Pin wrong");
  } else alert("Wrong account number");
  document.getElementById("cash-out-amount").value = "";
  let d = new Date();
  let h = d.getHours() % 12 || 12;
  let m = String(d.getMinutes()).padStart(2, "0");
  let ap = d.getHours() >= 12 ? "PM" : "AM";
  const parent = document.getElementById("transaction-container");
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="collapse-title text-xl font-medium flex gap-3 bg-red-50">
                                  <div class="bg-gray-200 rounded-full p-2 flex justify-center items-center">
                                      <img src="assets/wallet1.png" class="w-8 h-8">
                                  </div>
                                  <div>
                                      <h4 class="text-xl">Cash out $${amount}</h4>
                                      <p class="text-xs text-gray-900 font-normal">Today ${h}:${m} ${ap}</p>
                                  </div>
                              </div>
  
  `;
  div.classList.add("collapse", "border-base-300", "bg-base-200", "border");
  parent.appendChild(div);
});
