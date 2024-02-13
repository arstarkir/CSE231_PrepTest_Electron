window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
  function myCreateFunction() {
    let table = document.getElementById("table_id").getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    c1.innerText = "Elon";
    c2.innerText = "45";
    c3.innerText = "Houston";
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