let curTest = {};

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
              curTest = dissectTest(e.target.result,theFile.name)
              if(typeof(curTest) == TestInfo)
              {
              }
              alert(curTest.numOfQuestions);
              
              myCreateFunction("a","num","0")
            };
          })(file);
          reader.readAsText(file);

 
        }
      }


    });
  });
  