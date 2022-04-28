import React from "react"
import {
  BalloonFill,
  Basket2Fill,
  BookFill,
  Cart3,
  ChatDotsFill,
  Dribbble,
  Gift,
  PencilSquare,
} from "react-bootstrap-icons"

const Items = [
  {
    icon: <BalloonFill />,
    title: "Party Special",
    description: "To make your birthdays and events more exciting.",
  },
  {
    icon: <Basket2Fill />,
    title: "Food",
    description: "Good Food, Good Mood",
  },
  {
    icon: <BookFill />,
    title: "Geeky Store",
    description: "you can buy books and Novels here",
  },
  {
    icon: <Cart3 />,
    title: "Grocery stores",
    description: "all the items you need on the daily basis.",
  },
  {
    icon: <ChatDotsFill />,
    title: "Share your experiences",
    description: "We believe that it's always a two way system",
  },
  {
    icon: <Dribbble />,
    title: "Sports",
    description: "get sports equipments and dresses",
  },
  {
    icon: <Gift />,
    title: "Gift Stores",
    description: "For your loved ones",
  },
  {
    icon: <PencilSquare />,
    title: "Staitonary",
    description: " Notebooks, registers, practical files, pen etc",
  },
]
const Features = () => {
  return (
    <div class="container px-4 py-5" id="icon-grid">
      <h2 class="pb-2 border-bottom text-center">Features</h2>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
       {  Items.map((item,i) => {
         return (
       
       <div key = {i} class="col d-flex align-items-start">
         <div class = "bi text-muted flex-shrink-0 me-3"
          style={{ fontSize: "2rem"}}> {item.icon}
          </div>

          <div>
    
            <h4 class="fw-bold mb-0">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>

       )})}
      </div>
    </div>
  )
}
export default Features
