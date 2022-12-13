function removeRow(e) {
    let a = document.getElementById("data");
    let pos = e.parentNode.parentNode.rowIndex;
    if (confirm("are you sure you want too delete this?")) {
        a.deleteRow(pos);
    }
}