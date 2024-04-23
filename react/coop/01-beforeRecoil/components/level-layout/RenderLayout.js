import { SIZE, LEVEL_THEMES, THEME_BACKGROUNDS } from "../../util/Paths";
import Sprite from "../objects-graphics/Sprite";
import LevelBackground from "./LevelBackground";
import styles from "./RenderLayout.module.css"

const level = {
    theme : LEVEL_THEMES.BLUE,
    tilesHeight: 10,
    tilesWidth: 10,
    placements: [
        {id: 1, x:0, y:0, frameCoord: "0x2"},
        {id: 2, x:1, y:1, frameCoord: "0x2"},
        {id: 3, x:2, y:2, frameCoord: "0x2"},
        {id: 4, x:3, y:3, frameCoord: "0x2"}
    ]
}

export default function RenderLevel({image}) {
    return (
        <div className={styles.fullScreenContainer} style={{
            background: THEME_BACKGROUNDS[level.theme]
        }}>
            <div className={styles.gameScreen}>
                <LevelBackground level={level} image={image}></LevelBackground>
                {
                    level.placements.map(placement => {
                        const x = placement.x * SIZE + "px"
                        const y = placement.y * SIZE + "px"
                        const style = {
                            position:"absolute",
                            transform: `translate3d(${x}, ${y}, 0`
                        }
                        console.log(style)
                        return (
                            <Sprite key={placement.id} style={style} image={image} frameCoord={placement.frameCoord}></Sprite>
                        )
                    })
                }
                
            </div>
        </div>
    );
}