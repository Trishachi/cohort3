const cityHelpers = {
  addCityCard: (cityName, node) => {
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = cityName;
    newCard.appendChild(cardHeader);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    newCard.appendChild(cardBody);

    //Input and Controls Section
    let inputDiv = document.createElement("div");
    inputDiv.style.paddingBottom = "15px";
    let inputAmount = document.createElement("input");
    inputDiv.append(inputAmount);
    inputAmount.classList.add("form-control");
    inputAmount.placeholder = "Enter Value";
    cardBody.appendChild(inputDiv);

    let movedInBtn = document.createElement("button");
    movedInBtn.textContent = "Moved In";
    movedInBtn.classList.add("movedIn", "btn", "btn-outline-primary");
    cardBody.appendChild(movedInBtn);
    // node.appendChild(newCard);

    let movedOutBtn = document.createElement("button");
    movedOutBtn.textContent = "Moved Out";
    movedOutBtn.classList.add("movedOut", "btn", "btn-outline-primary");
    cardBody.appendChild(movedOutBtn);
    // node.appendChild(newCard);

    let deleteCard = document.createElement("button");
    deleteCard.textContent = "Delete";
    deleteCard.classList.add("deleteCardBtn", "btn", "btn-outline-danger");
    cardBody.appendChild(deleteCard);

    //Balance Section
    let effectiveBalance = document.createElement("div");
    effectiveBalance.textContent = `Effective Balance: `;
    effectiveBalance.style.paddingTop = "10px";
    cardBody.appendChild(effectiveBalance);

    //Return new card
    node.appendChild(newCard);
    return newCard;
  },
  deleteCityCard: card => {
    card.remove();
  }
};

export default cityHelpers;
