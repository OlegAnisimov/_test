function sortTableText(item, table) {
        let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[item].innerHTML > rowB.cells[item].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows);
}


function sortTableNumber(item, table) {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => Number(rowA.cells[item].innerHTML) > Number(rowB.cells[item].innerHTML) ? 1 : -1);

    table.tBodies[0].append(...sortedRows);
}

export {sortTableText, sortTableNumber};
