'use client'

import Spline from "@splinetool/react-spline";

const SplineComponent = () => {
    return (
      <div className="w-full h-[700px] md:w-full md:h-[800px] flex items-center justify-center absolute inset-0 -z-10">
        <Spline
          scene="https://prod.spline.design/NarSvwXEDCg8lD9R/scene.splinecode" 
        />
      </div>
    );
  }
  

export default SplineComponent;