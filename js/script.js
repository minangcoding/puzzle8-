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
// select the list items
let ul = document.querySelectorAll('li');;
const letters= ["A", "B", "C", "D", "E", "F", "G", "H", ""]

// this function sets a unique id for each list item, in the form 'li0' to 'li8'
const setId = (items) => {
    for(let i = 0; i < items.length; i++) {
        items[i].setAttribute("id", `li${i}`)
    }
}

const FillGrid = (items, letters) => {
    items.forEach((item, i) => {
        item.innerText = letters[i];
    })
}

fillGrid(ul, letters);

//untuk method drop_handler

// shuffle the array
const shuffle = (arr) => {
    const copy = [...arr];
    // loop over the array
    for(let i = 0; i < copy.length; i++) {
        // for each index,i pick a random index j 
        let j = parseInt(Math.random()*copy.length);
        // swap elements at i and j
        let temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }   
    return copy;
 }
 const fillGrid = (items, letters) => {
    let shuffled = shuffle(letters);

    items.forEach((item, i) => {
        item.innerText = shuffled[i];
    })
}
