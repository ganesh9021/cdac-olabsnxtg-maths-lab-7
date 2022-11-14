import React from 'react';



const InitialDrag = () => {

  return (
    <div>
        <div className="container-fluid">
            <div className="row" style={{height : '40vh'}}>
                <div className="col-6 d-flex justify-content-center">
                    <img style={{
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        }} src="/img/shapes/rectangle.png" alt="Logo" />
                </div>
                <div className='col-6 d-flex justify-content-around'>
                    <div className=" col-2 ">
                        <img style={{height : '25vh'}} src="/img/Shapes/CircleA.png" alt="Logo" />
                    </div>
                    <div className=" col-2">
                        <img style={{height : '25vh'}} src="/img/Shapes/CircleA.png" alt="Logo" />
                    </div>
                    <div className=" col-2">
                        <img style={{height : '25vh'}} src="/img/Shapes/CircleA.png" alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InitialDrag