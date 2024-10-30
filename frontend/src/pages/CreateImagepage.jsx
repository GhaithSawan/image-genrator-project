import React, { useState } from 'react'
import "./CreateImagePage.css"
import { Col, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import image1 from "../assets/image1.jpg";
import { MdCreate } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import Loader from '../component/loader';
// import { ScatterBoxLoader } from "react-awesome-loaders";

const CreateImagepage = () => {
  const [loader, setloader] = useState(false)
  const [imageForm, setimageForm] = useState({
    src:"",
    author:"",
    props:""
  })
  
  function loadingfunction() {
    setloader(!loader)
  }
  function gentratImage(){

  }
  return (
    <div className='CreateImagepage container p-5'>
      <div className='box'>
        <Row className='gap-4'>
          <Col className={"col-lg-5 col-12 right "}>

            <div>
              <h3>Generat images with prompt</h3>
              <p>write your prompt according ti the image you want to generate </p>
            </div>
            <div>
              <div>
                <label htmlFor="textField">Author</label>
                <input type="text" id='textField' placeholder='Your Name' />
              </div>

              <div>
                <label htmlFor="textAria">props</label>
                <textarea rows={6} name="textAria" id="textAria" placeholder='Your props...'></textarea>
              </div>

              <span>you can Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
            </div>

            <div >
              <Button onClick={()=>{
                loadingfunction()
                gentratImage()
              }}>generate image <BsStars /></Button>
              <Button>post image <MdCreate /></Button>
            </div>

          </Col>
          <Col className={"col-lg-6 col-12 left "} style={{
            height: "500px",
            padding: "10px",
            border: "dashed 2px rgb(114 114 8)",
            borderRadius: "10px"
          }}>
            {
              loader ?
               <>
                  <Loader/>
               </>
                :
                <img
                  src={image1}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px"
                  }} />
            }

          </Col>
        </Row>
      </div>
      {/* <ScatterBoxLoader
        primaryColor={"#6366F1"}
        background={theme.colors["background"]}
      /> */}
    </div>
  )
}

export default CreateImagepage