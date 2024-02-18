let curTest = [];

document.addEventListener('DOMContentLoaded', () => {

    const dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover', (event) => {
      event.preventDefault();
      event.stopPropagation();
        //alert("assas");

     dropZone.style = "border: 3px dotted red";
    });
    
    dropZone.addEventListener('dragleave', (event) => {
        event.preventDefault();
        event.stopPropagation();

        dropZone.style = "border: 3px dotted black";
    });

    dropZone.addEventListener('drop', (event) => {
      event.preventDefault();
      event.stopPropagation();
      dropZone.style = "border: 3px dotted black";
        
      if (event.dataTransfer) {
        const files = event.dataTransfer.files;
        for (let i = 0; i < files.length; i++) 
        {
          const file = files[i];
          var reader = new FileReader();
          reader.onload = (function(theFile) 
          {  
            return function(e) 
            {
              al();
              curTest.push(dissectTest(e.target.result,theFile.name))
              alert(curTest[curTest.length-1].numOfQuestions)
              myCreateFunction(curTest[curTest.length-1].name,curTest[curTest.length-1].numOfQuestions,"0")
            };
          })(file);
          reader.readAsText(file);

 
        }
      }

      
    });
  });
  
  function myCreateFunction(name = "Error",numOfQ = "Error",qFin="Error") 
  {
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