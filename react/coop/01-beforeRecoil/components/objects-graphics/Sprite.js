import React from "react"
import { useEffect, useRef, useState } from "react"
import { SIZE } from "../../util/Paths"

function Sprite ({image, frameCoord, style}) {
    const canvasRef = useRef()

    useEffect(()=>{
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        // ctx.fillStyle = 'blue'
        // ctx.fillRect(0,0,16,16)

        console.log(frameCoord)
        ctx.clearRect(0,0,canvas.width, canvas.height)
        const tileSheetX = Number(frameCoord.split("x")[0])
        const tileSheetY = Number(frameCoord.split("x")[1])

        ctx.drawImage(
            image, // image to pull from
            tileSheetX * SIZE, // Left corner of frame
            tileSheetY * SIZE, 
            SIZE, // How much to crop from the sprite sheet
            SIZE, 
            0, // Where to place on canvas
            0,
            SIZE, // How large to scale it
            SIZE
        )

    }, [image, frameCoord])

    return (
       <>
        <canvas style={style} ref={canvasRef} width={SIZE} height={SIZE}></canvas>
       </>
    )
}

// Export the memoized component
export default React.memo(Sprite);