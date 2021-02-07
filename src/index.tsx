import * as React from "react";
import {
    View,
} from "react-native";
import { Player, PlayerCover, PlayerInputCover } from "./components";

const App = () => {
    const [coverVisible, setCoverVisiblity] = React.useState(true);
    const [muted, setMuted] = React.useState(true);
    const [roundNumber, setRound] = React.useState(0);
    React.useEffect(() => {
        if (coverVisible) {
            setInterval(() => {
                setCoverVisiblity(false);
                setMuted(false);
                setRound(roundNumber + 1);
            }, 5500);
        }
    });
    return (
        <View>
            <Player videoId={"9bZkp7q19f0"} muted={muted}/>
            <PlayerCover visible={coverVisible} roundNumber={roundNumber}/>
            <PlayerInputCover/>
        </View>
    );
};

export default App;
