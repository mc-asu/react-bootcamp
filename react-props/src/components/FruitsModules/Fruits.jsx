import foods from './foods'
import {choice, remove} from './helpers'

const choiceOfFood = choice(foods)
const Fruits = () => {
    console.log(`I'd like one ${choiceOfFood}`)
    console.log(`Here you go: ${choiceOfFood}`)
    console.log(`Delicious! May I have another?`)
    console.log(`I'm sorry, we're all out. We have ${foods.length} left.`)
    
}

export default Fruits