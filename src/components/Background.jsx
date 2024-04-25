import React from 'react'

function Background() {
    return (

<div style={{
    position: "absolute",
    top: "0",
    left: "0",
    filter: "brightness(60%)",
    width: "100%", /* Ensure the div takes up the full width of the viewport */
    height: "200vh", /* Set height to 100% of viewport height */
    overflow: "hidden", /* Hide any content that overflows the div */
}}>
    <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        backgroundImage: 'url(/jungle-bg.jpeg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw", /* Set width to 100% of viewport width */
        height: "200vh", /* Set height to 100% of viewport height */
    }}></div>
</div>

     
        
    )
}

export default Background
