let elResult = document.querySelector(".news-result");
let elList = document.querySelector(".news__list");

elResult.textContent = news.length;

for (let reports of news) {
  // CREATE
  let newItem = document.createElement("li");
  let newCard = document.createElement("div");
  let newImage = document.createElement("img");
  let newCardBody = document.createElement("div");
  let newCardTitle = document.createElement("h5");
  let newCardDate = document.createElement("p");
  let newCardText = document.createElement("p");
  let newCardlink = document.createElement("a");

  //   CLASS
  newItem.setAttribute("class", "news__item");
  newCard.setAttribute("class", "card news__card h-100");
  newImage.setAttribute("class", "card-img-top");
  newImage.setAttribute("src", reports.urlToImage);
  newCardBody.setAttribute("class", "card-body d-flex flex-column");
  newCardTitle.setAttribute("class", "card-title");
  newCardlink.setAttribute("class", "btn btn-outline-primary mt-auto");
  newCardlink.setAttribute("href", reports.url);

  //   TEXTCONTENT
  newCardTitle.textContent = reports.title;
  newCardDate.textContent = reports.publishedAt;
  newCardText.textContent = reports.content;
  newCardlink.textContent = "More info";

  //   APPENDCHILD
  elList.appendChild(newItem);
  newItem.appendChild(newCard);
  newCard.appendChild(newImage);
  newCard.appendChild(newCardBody);
  newCardBody.appendChild(newCardTitle);
  newCardBody.appendChild(newCardDate);
  newCardBody.appendChild(newCardText);
  newCardBody.appendChild(newCardlink);
}
