'use client'

import Spline from "@splinetool/react-spline";

const SplineComponent = () => {
    return (
      <div className="w-full h-[700px] md:w-[500px] md:h-[800px] flex items-center justify-center">
        <Spline
          scene="https://prod.spline.design/xLE9QFvyhGkPg3I7/scene.splinecode" 
        />
      </div>
    );
  }
  

export default SplineComponent;