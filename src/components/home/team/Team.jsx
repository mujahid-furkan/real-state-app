import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"
import {BsFillCheckCircleFill,BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {FaEnvelope} from 'react-icons/fa'
const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'>{val.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                   <span><BsFillCheckCircleFill color="blue"/></span>
                  </div>
                  <ImLocation2 color="gray"/>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li className="social" key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button flex'>
                    <button className="flex">
                     <span> <FaEnvelope size={18}/></span> 
                      Message 
                    </button>
                    <button className='btn4'>
                      <BsFillTelephoneFill />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
