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
  
      if (event.dataTransfer) {
        const files = event.dataTransfer.files;
        console.log(files);
        // Here, you can handle the files as needed, such as sending them to the main process via IPC
      }
    });
  });
  