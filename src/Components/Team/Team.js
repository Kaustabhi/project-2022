import React from "react"
import Image from "../Images/Images"
import {
  BalloonFill,
  Basket2Fill,
  BookFill,
  Cart3,
  ChatDotsFill,
  Dribbble,
  Facebook,
  Gift,
  Instagram,
  Linkedin,
  PencilSquare,
  Twitter,
} from "react-bootstrap-icons"

const Items = [
  {
    image: "member1.jpg",
    name: "Zozo",
  },
  {
    image: "member2.jpg",
    name: "Jalebi",
  },
  {
    image: "member3.jpg",
    name: "Kiki",
  },
  {
    image: "member4.jpg",
    name: "Kuku",
  },
  
]
const Team = () => {
  return (
    <div className="container py-5 text-center">
      <h2 class="pb-2 border-bottom text-center">Team Members</h2>
      <div className="row text-center">
      {  Items.map((item,i) => {
         return (
       
       <div key = {i} className="col-lg-3 col-md-6 col-sm-12">
          <div className="card card-body">
            <Image
              className="d-block mx-lg-auto img-fluid"
              style={{ margin:"0 auto", height: "170px", width: "170px", borderRadius: "50%" }}
              filename={item.image}
              alt="1"
            />
            <h5 className="m-4">{item.name}</h5>
            <ul class="list-unstyled justify-content-center d-flex">
                <li class="m-3"><Instagram/></li>
                <li class="m-3"><Facebook/></li>
                <li class="m-3"><Linkedin/></li>
            </ul>
          </div>
        </div> )
      })}

       
        </div>
      </div>

  )
}
export default Team
