const zeroPad = (num, places) => {
  const zero = places - num.toString().length + 1
  return Array(+(zero > 0 && zero)).join("0") + num
}

const generateObjects = list => {
  if (list.length < 8) {
    throw new Error('List must have at least 8 items')
  }

  const selectedItems = [];
  while (selectedItems.length < 8) {
    const randomIndex = Math.floor(Math.random() * list.length)
    const selectedItem = list[randomIndex];

    // Ensure that the same item is not selected again
    if (!selectedItems.includes(selectedItem)) {
      selectedItems.push(selectedItem)
    }
  }

  return selectedItems
}

const distributeObjects = objects => {
  if (objects.length !== 8) {
    throw new Error('Objects array must have exactly 8 items');
  }

  // Shuffle the array using the Fisher-Yates algorithm
  const shuffledObjects = [...objects].sort(() => Math.random() - 0.5)

  // Divide the shuffled array into two hands
  const hand1 = shuffledObjects.slice(0, 4)
  const hand2 = shuffledObjects.slice(4)

  return { hand1, hand2 }
}

export {
  zeroPad,
  generateObjects,
  distributeObjects
}