//Exercise 1 : Calendar

//Instructions

// 1. Create a function called createCalendar(year, month)

// 2. The function should create a calendar for the given year/month.

// 3. The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on until Sunday.
//For instance, createCalendar(2012, 9) should generate the following calendar:

//Hint: There shouldn’t be any code in the HTML file. The table should be created from the JS file using the DOM.

document.addEventListener("DOMContentLoaded", function () {
  function createCalendar(year, month) {
    // zero-based index (0 = January, 11 = December)
    month = month - 1;

    let firstDay = new Date(year, month, 1).getDay();
    let adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

    let lastDate = new Date(year, month + 1, 0).getDate();

    // Weekday names
    let weekdayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // This is for the table element
    let table = document.createElement("table");

    // This is for the table header
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    for (let day of weekdayNames) {
      let th = document.createElement("th");
      th.textContent = day;
      headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // This is for the table body
    let tbody = document.createElement("tbody");
    let row = document.createElement("tr");

    //this part of the code is for the little dots on the days that are empty with no numbers :) took me a while
    for (let i = 0; i < adjustedFirstDay; i++) {
      const td = document.createElement("td");
      td.textContent = "·";
      row.appendChild(td);
    }

    // Filled empty cells
    for (let i = 0; i < adjustedFirstDay; i++) {
      let td = document.createElement("td");
      row.appendChild(td);
    }

    // Filled cells with dates
    for (let date = 1; date <= lastDate; date++) {
      let td = document.createElement("td");
      td.textContent = date;
      row.appendChild(td);
      if ((adjustedFirstDay + date) % 7 === 0) {
        tbody.appendChild(row);
        row = document.createElement("tr");
      }
    }

    // Appended the last row if it has remaining dates
    if (row.children.length > 0) {
      tbody.appendChild(row);
    }

    table.appendChild(tbody);

    //container div for the calendar
    const calendarContainer = document.createElement("div");
    calendarContainer.id = "calendar";
    calendarContainer.appendChild(table);

    // Append the calendar container to the body
    document.body.appendChild(calendarContainer);
  }

  createCalendar(2012, 9);
  createCalendar(2024, 5);
});
