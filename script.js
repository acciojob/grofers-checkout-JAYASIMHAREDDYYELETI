const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const allPrices = document.querySelectorAll(".price")
  function getSum(){
    console.log(allPrices)
    let totalSum = 0
    for (let price of allPrices){
      totalSum += parseInt(price.innerText)
    }
    const newRow = document.createElement("tr")
    const newData = document.createElement("td")
    newData.colSpan = 2;
    newData.innerText = `Total Amount ${totalSum}`
    newRow.appendChild(newData)
    table.appendChild(newRow)
  }
  getSum();
};

getSumBtn.addEventListener("click", getSum);

