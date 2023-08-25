import React from 'react'
import AnimateText from './AnimateText'

const AnimatePortfolio = () => {
    return (
        <AnimateText>
            <div className="w-full relative bg-[#000] overflow-hidden py-8 lg:py-32 ">
                <div className="h-full w-24 md:w-96 absolute top-0 left-0 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="h-full w-24 md:w-96 absolute top-0 right-0 bg-gradient-to-l from-black to-transparent z-10"></div>
                <div className="target_1 block  relative text-5xl lg:text-7xl  font-bold text-center  py-6 w-full  ">
                    <span className="hidden">PORTFOLIO PROJECT</span>
                    <div className="absolute z-5 top-[50%] right-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-100 transition-opacity duration-300 text-transparent bg-clip-text bg-gradient-to-br from-orange-500/60 to-red-600/60 ">
                        <span className="ml-10 md:ml-14 uppercase ">
                            PORTFOLIO
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PROJECT
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PORTFOLIO
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PROJECT
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PORTFOLIO
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PROJECT
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PORTFOLIO
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PROJECT
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PORTFOLIO
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PROJECT
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PORTFOLIO
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PROJECT
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PORTFOLIO
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PROJECT
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PORTFOLIO
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PROJECT
                        </span>
                        <span className="ml-10 md:ml-14 uppercase ">
                            PORTFOLIO
                        </span>
                    </div>
                </div>
            </div>
        </AnimateText>
    )
}

export default AnimatePortfolio