function sortAscTableText(item, table) {
        let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((a, b) => a.cells[item].innerText > b.cells[item].innerText ? 1 : -1);

    table.tBodies[0].append(...sortedRows);
    console.log(sortedRows);
}

function sortDescTableText(item, table) {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((a, b) => a.cells[item].innerText > b.cells[item].innerText ? -1 : 1);

    table.tBodies[0].append(...sortedRows);
}

function sortAscTableNumber(item, table) {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((a, b) => Number(a.cells[item].innerHTML) > Number(b.cells[item].innerHTML) ? -1 : 1);

    table.tBodies[0].append(...sortedRows);
}



function sortDescTableNumber(item, table) {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((a, b) => Number(a.cells[item].innerHTML) > Number(b.cells[item].innerHTML) ? 1 : -1);

    table.tBodies[0].append(...sortedRows);
}

export {sortAscTableText, sortAscTableNumber, sortDescTableNumber, sortDescTableText};
