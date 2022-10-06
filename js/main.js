// const url = "https://pressa-exem.herokuapp.com/api-49";



let tBody = document.querySelector(".t-body");
let fragment = document.createDocumentFragment();
let selectSorting = document.querySelector(".sortingSelect");

async function renderValute() {
  const response = await fetch("https://pressa-exem.herokuapp.com/api-49");
  const result = await response.json();

  result.data.forEach((element) => {
    let elitem = document.createElement("tr");
    elitem.innerHTML = `
        <th scope="row">${element.Code}</th>
        <td>${element.CcyNm_EN}</td>
        <td>${element.Ccy}</td>
        <td>${element.Diff}</td>
        <td>${element.Date}</td>
        <td><button class="btn btn-success"><i class="fas fa-bookmark fa-2x"></button></i></td>`;
    tBody.appendChild(elitem);
  });
  
  
}
renderValute();
let selectSort = document.querySelector(".sortingSelect");

selectSort.addEventListener("change", (evt) => {
  function sortingName(users) {
    tBody.innerHTML = ""
    if(evt.target.value === '100-10'){
      let sorting = users.sort((a, b)=>a.Diff(b.Diff))
      renderUser(sorting);
    }else if(evt.target.value ==='10-100'){
        let sorting = users.sort((a, b) => b.Diff(abc.Diff))
      renderUser(sorting);
    }else{
      let sorting = users.sort((a,b)=> a.Diff(b.Diff))
      renderUser(sorting);1
    }
  }

  sortingName()

});



