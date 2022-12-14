const Dragend_handler = ev => {
    console.log("dragEnd");
    // Remove all of the drag data
    ev.dataTransfer.clearData();
    // remove all droppable attributes
    removeDroppable(document.querySelectorAll('li'));
  
    // set new droppable and draggable attributes
    setDroppable(document.querySelectorAll('li'));
    setDraggable(document.querySelectorAll('li'))
  
      // if correct
      if(isCorrect(letters, state.content)) {
          showModal();
      }
  }
  
  const ShowModal = () => {
      document.getElementById('message').innerText = "You Won!";
      document.getElementById('modal').classList.remove("hide");
    
  }
  
  const HideModal = () => {
      document.getElementById('modal').classList.add("hide");
  }onst dragend_handler = ev => {
  console.log("dragEnd");
  // Remove all of the drag data
  ev.dataTransfer.clearData();
  // remove all droppable attributes
  removeDroppable(document.querySelectorAll('li'));

  // set new droppable and draggable attributes
  setDroppable(document.querySelectorAll('li'));
  setDraggable(document.querySelectorAll('li'))

    // if correct
    if(isCorrect(letters, state.content)) {
        showModal();
    }
}

const showModal = () => {
    document.getElementById('message').innerText = "You Won!";
    document.getElementById('modal').classList.remove("hide");

}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}