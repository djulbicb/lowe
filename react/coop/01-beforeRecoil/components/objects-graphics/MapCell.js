import React from "react";
import Sprite from "./Sprite";
import { SIZE } from "../../util/Paths";
export default function MapCell({x, y, image, frameCoord}) {
    return (
        <div style={{
            position: 'absolute',
            left: x * SIZE,
            top: y * SIZE,
        }}>
            <Sprite image={image} frameCoord={frameCoord}></Sprite>
        </div>
    )
}