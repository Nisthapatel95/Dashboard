const user = [
  {
    Item: "Skippy peanut butter 1602",
    Date: "07Nov,8:35pm",
    Type: "Discarded",
    EstCost: "$40.27",
    Last: "18Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "N/a"
  },
  {
    Item: "Skippy peanut butter 1602",
    Date: "05 frb,8:35pm",
    Type: "Want",
    EstCost: "$40.27",
    Last: "18Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "N/a"
  },
  {
    Item: "Skippy peanut butter 1602",
    Date: "08 may,8:35pm",
    Type: "Waiting",
    EstCost: "$40.27",
    Last: "18Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "N/a"
  },
  {
    Item: "Skippy peanut butter 1602",
    Date: "23oct,8:35pm",
    Type: "Cancelled",
    EstCost: "$40.27",
    Last: "18Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "N/a"
  },
  {
    Item: "Skippy peanut butter 1602",
    Date: "23oct,8:35pm",
    Type: "Waiting",
    EstCost: "$40.27",
    Last: "18Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "N/a"
  },
  {
    Item: "Skippy peanut butter 1602",
    Date: "23oct,8:35pm",
    Type: "Want",
    EstCost: "$40.27",
    Last: "18Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "N/a"
  }, {
    Item: "Skippy peanut butter 1602",
    Date: "23oct,8:35pm",
    Type: "Want",
    EstCost: "$40.27",
    Last: "18Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "N/a"
  },

];

getData(user);

function getData(data) {
  const userTableBody = document.querySelector("#user-table-body");
  //   console.log( userTableBody);

  data.forEach((user) => {

    const tableRow = document.createElement('tr');
    // console.log(tableRow);


    for (const item in user) {
      const tablecol = document.createElement('td');
      // console.log(tablecol);
      const value = user[item];
      // console.log(value);

      if (item === "Type") {
        const addcolor = document.createElement("span");
        addcolor.classList.add("badge");
        addcolor.textContent = user[item];

        if (user[item] == "Discarded") {
          addcolor.classList.add("bg-red")
        }
        if (user[item] == "Want") {
          addcolor.classList.add("bg-green")
        }
        if (user[item] == "Waiting") {
          addcolor.classList.add("bg-yellow")
        }
        if (user[item] == "Cancelled") {
          addcolor.classList.add("bg-blue")
        }
        tablecol.appendChild(addcolor);

      }
      else {
        tablecol.textContent = value;
      }

      tableRow.appendChild(tablecol)
    }
    userTableBody.appendChild(tableRow);
  });
}



function filterUser() {
  const userTableBody = document.querySelector('#user-table-body'); /** get user tbody */
  const searchTerm = document.querySelector('#search-box');
  const noRecordDiv = document.querySelector('.no-records');
  const userTable = document.querySelector('#user-table');
  userTableBody.textContent = '';
  let filteredData = [];

  if (searchTerm.value !== '') {
    filteredData = user.filter((item) => {
      return item.Type.toLowerCase().includes(searchTerm.value.toLowerCase());
    });
  } else {
    filteredData = user;
  }

  // filteredData = searchTerm.value !== '' ? user.filter(item => item.name.toLowerCase().includes(searchTerm.value.toLowerCase())) : user;

  if (!filteredData.length) {
    userTableBody.classList.add(['d-none']);
    noRecordDiv.classList.remove(['d-none']);
  } else {
    userTableBody.classList.remove(['d-none']);
    noRecordDiv.classList.add(['d-none']);
  }
  getData(filteredData);
}




