document.getElementById("addMoney").addEventListener("click", function () {
  const elements = document.querySelectorAll(".hide");
  for (const element of elements) {
    element.style.display = "none";
  }
  document.getElementById("add-money").style.display = "block";
  document.getElementById("latest-payment").style.display = "none";
  const styles = document.querySelectorAll(".removeStyle");
  for (const item of styles) {
    item.classList.remove("selected");
  }
  document.getElementById("addMoney").classList.add("selected");
});
document.getElementById("add-btn").addEventListener("click", function (ev) {
  ev.preventDefault();
  const balanceText = document.getElementById("balance").innerText;
  const bank = document.getElementById("bank").value;
  const account = document.getElementById("account").value;
  const pin = document.getElementById("pin").value;
  const amountValue = document.getElementById("amount").value;
  const amount = parseFloat(amountValue);
  const balance = parseFloat(balanceText);
  let d = new Date();
  let h = d.getHours() % 12 || 12;
  let m = String(d.getMinutes()).padStart(2, "0");
  let ap = d.getHours() >= 12 ? "PM" : "AM";
  //    button event handler
  if (account === "01892674230") {
    if (pin === "1234") {
      const sum = balance + amount;
      document.getElementById("balance").innerText = sum;
    } else alert("pin wrong");
  } else alert("wrong account number");

  document.getElementById("amount").value = "";
  const parent = document.getElementById("transaction-container");
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="collapse-title text-xl font-medium flex gap-3 bg-green-50">
                                    <div class="bg-gray-200 rounded-full p-2 flex justify-center items-center">
                                        <img src="assets/wallet1.png" class="w-8 h-8">
                                    </div>
                                    <div>
                                        <h4 class="text-xl">Added $${amount} from ${bank}</h4>
                                        <p class="text-xs text-gray-900 font-normal">Today ${h}:${m} ${ap}</p>
                                    </div>
                                </div>
    
    `;
  div.classList.add("collapse", "border-base-300", "bg-base-200", "border");
  parent.appendChild(div);
});
