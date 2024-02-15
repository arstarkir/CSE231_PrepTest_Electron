window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
  function myCreateFunction(name = "Error",numOfQ = "Error",qFin="Error") {
    let table = document.getElementById("table_id").getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    row.insertCell(0).innerText =name;
    row.insertCell(1).innerText =numOfQ;
    row.insertCell(2).innerText =qFin;
    let c4 = row.insertCell(3);
    c4.innerHTML = "<button>Start</button>";
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);

    table.appendChild(row)
  }

  const addFile = document.getElementById("example");
  addFile.onclick = () =>{
    //alert("assas");
    myCreateFunction();
  }
})