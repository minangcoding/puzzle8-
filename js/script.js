//Memilih list item


//Memilih List item


// Untuk Bisa Drag dan Drop
const dragstart_handler = ev => {
    console.log("dragstart") //Pemanggilan method drag
    ev.dataTransfer.setData("text/plain", ev.target.id)
    ev.dataTransfer.dropEffect = "move"; //Pemanggilan Drop
}
// Untuk Bisa Drag dan Drop

//Untuk Drag (seret)
const dragover_handler = ev =>{
    console.log("dragOver");
    ev.preventDefault(); //Untuk Berhenti drag 
}
//Untuk Drag (seret)

//Untuk Drop
const Drop_handler = ev =>{
    console.log("drag")
    ev.preventDefault();
    
    //dapatkan id target serta menambah element
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.innerText = document.getElementById(data).innerText;
    //dapatkan id target serta menambah element
}
//Untuk Drop

//untuk drag
const dragend_handler = ev =>{
    console.log("dragEnd");
    //ini untuk menghapus data drag
    ev.dataTransfer.clearData();
    //ini untuk menghapus data drag
}
//untuk drag

//untuk method drop_handler
const drop_handler = ev => {
    console.log("drag")
    ev.preventDefault();

    //untuk dapat Posisi serta bisa drop end Drag
    const data = ev.dataTransfer.getData("text/plain");
       ev.target.innerText = document.getElementById(data).innerText;
       document.getElementById(data).innerText = "";
    //untuk dapat Posisi serta bisa drop end Drag
}

//untuk method drop_handler
