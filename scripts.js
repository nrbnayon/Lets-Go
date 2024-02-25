const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count += 1;

    const location = e.target.parentNode.childNodes[1].innerText;
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    const newPrice = parseInt(price);
    const budget = getElementById("budget");
    const newBudget = parseInt(budget.innerText - newPrice);
    if (newBudget >= 0) {
      setInnerText("budget", newBudget);
    } else {
      alert("sorry your budget is over");
      return;
    }
    const selectAContainer = getElementById("selected-place-container");
    const createLi = document.createElement("li");
    createLi.innerText = location + " " + "-" + " " + newPrice;
    selectAContainer.append(createLi);

    e.target.setAttribute("disabled", true);
    e.target.parentNode.parentNode.style.backgroundColor = "gray";
    // const totalCost = getElementById("total-cost");
    // const newTotalCost = totalCost.innerText;
    // const updatedCost = parseInt(newTotalCost) + newPrice;
    // totalCost.innerText = updatedCost;

    //  const grandTotalCost = getElementById("grand-total");
    //  const updatedGrandCost = parseInt(grandTotalCost.innerText) + newPrice;

    totalCosts("total-cost", newPrice);
    grandTotal();
    // totalCosts("grand-total", newPrice);
    setInnerText("cart-count", count);
    // setInnerText("total-cost", updatedCost);
  });
}

function totalCosts(elementId, value) {
  const totalCost = getElementById(elementId);
  const updatedTotalCost = parseInt(totalCost.innerText) + value;
  setInnerText(elementId, updatedTotalCost);
}

function grandTotal(category) {
  const totalCost = getElementById("total-cost");
  const updatedTotalCost = parseInt(totalCost.innerText);
  if (category === "bus") {
    setInnerText("grand-total", updatedTotalCost + 100);
  } else if (category === "train") {
    setInnerText("grand-total", updatedTotalCost - 200);
  } else if (category === "flight") {
    setInnerText("grand-total", updatedTotalCost + 500);
  } else {
    setInnerText("grand-total", updatedTotalCost);
  }
}

function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

function getElementById(elementId) {
  const element = document.getElementById(elementId);
  return element;
}
