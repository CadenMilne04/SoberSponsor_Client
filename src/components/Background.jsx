import React from 'react'

function Background() {
    return (
        <div className='h-screen' 
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                filter: "brightness(60%)",
                width: "100%",
                height: "100%"
            }}>

            <div className='h-screen' style={{
                backgroundImage: 'url(/jungle-bg.jpeg)',
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%"
            }}></div>
        </div>
    )
}

export default Background
