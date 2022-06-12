import React from 'react';
import './Content.css'



const Content = () => {











    return(
        <>
        <div className="content">

            <div className="contentLeft">
                <h1>Maximize skill, <br /> minimize budget</h1>

                <p> Our Modern courses across a range of in-demand <br /> skills will give you the knowledge you need to live <br /> the life you want</p>


                <button>Get Started</button>

            </div>


            <div className="contentRight">

              

            </div>
        </div>

        <div className="content2 grid">


        <div className="box first">
            
            <h1 className="centerbox"> Check out our <br /> most popular <br /> courses!</h1>
 
          </div>


         <div className="box boxh1">
            
            <img src="/assets/icon-animation.svg" />

            <h1>Animation</h1>

            <p> Learn the latest animation <br/> techinques to create stunning <br /> motion design and captivate <br /> your audience</p>

            <h3>Get Started</h3>

         </div>

         <div className="box boxh1">
            
            <img src="/assets/icon-design.svg" />

            <h1>Design</h1>

            <p>  
                Create beautiful,usuable <br />
                interfaces to help shape the <br />
                future of how the web looks.
            </p>

            <h3>Get Started</h3>

         </div>

         <div className="box boxh1">
            
            <img src="/assets/icon-photography.svg" />

            <h1>Photography</h1>

            <p>
              Explore critical fundmentals like <br />
              lighting,composition,and focus <br />
              to capture exceptional photos
            </p>

            <h3>Get Started</h3>

         </div>


         <div className="box boxh1">
            
            <img src="/assets/icon-crypto.svg" />

            <h1>Crypto</h1>

            <p> 
              All you need to know to get <br /> started investing in crypto.Go <br/>
              from beginning to advanced with <br />
              this 54 hour course
            </p>

            <h3>Get Started</h3>

         </div>

         <div className="box boxh1">
            
            <img src="/assets/icon-business.svg" />

            <h1>Business</h1>

            <p>
                A step-by-step playbook to help <br />
                you start,scale,and sustain your <br />
                business without outside <br />
                investment.
            </p>

            <h3>Get Started</h3>

         </div>

       

         
            

         
        </div>

        </>
    )
}



export default Content;