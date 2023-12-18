// Function to return a randomly selected item from an array
function choice(items) {
    if (items.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }
  
  // Function to remove the first matching item from an array
  function remove(items, item) {
    const index = items.indexOf(item);
    if (index !== -1) {
      return items.splice(index, 1)[0];
    }
    return undefined;
  }

  export {
    choice,
    remove
  }