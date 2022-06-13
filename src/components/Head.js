import React,{useEffect,useState}from 'react';
import'./Head.css'



const Header = () => {

    // const [widths,setWidth] = useState(window.innerWidth);
    const [image ,setImage] = useState('/assets/image-hero-desktop.png');

    // const width = 768
  
    
    
    console.log(window.innerWidth,'width')


    // useEffect(()=>{

    //     setWidth(window.innerWidth)
   

    //     changeImage()

    

    // },[image,widths])




    // const changeImage = () => {

    //     if(parseInt(widths) < width){
    //         setImage('/assets/image-hero-mobile.png')
    //    }

    //    if(parseInt(widths) > width) {
           
    //       setImage( '/assets/image-hero-desktop.png') 
    //    }

    // }




    return(
        <div className="header">
        
<div className="right">
           <h1>Skilled</h1>
 </div>
 
 <div className="button">
    
    <button> Get Started </button>
    <div className="img"> 

      <img src={image} className="smallerImage" />
     
 {/* {  Window.innerWidth < width ? ( <img className="smallerImage" src='/assets/image-hero-mobile.png' alt=""/>) : ( <img src='/assets/image-hero-desktop.webp' alt=""/> )} */}
    </div>

 </div>


        </div>
    )




}





export default Header;