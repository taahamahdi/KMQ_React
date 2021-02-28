import * as React from "react";
import {
    View,
} from "react-native";
import Model from "./model";
import useAsync from "react-use/lib/useAsync";
import { Player, PlayerCover, PlayerInputCover } from "./components";

const model = new Model();

const App = () => {
    const [roundNumber, setRound] = React.useState(0);
    const [coverVisible, setCoverVisiblity] = React.useState(true);
    const [muted, setMuted] = React.useState(true);
    const song = useAsync(async () => {
        return await model.getRandomSong();
    });

    React.useEffect(() => {
        if (coverVisible) {
            setInterval(() => {
                setCoverVisiblity(false);
                setMuted(false);
                setRound(roundNumber + 1);
            }, 6000);
        }
    });

    return (
        <View>
            <Player videoId={!song.loading && !song.error ? song.value.youtubeLink : ""} muted={muted}/>
            <PlayerCover visible={coverVisible} roundNumber={roundNumber}/>
            <PlayerInputCover/>
        </View>
    );
};

export default App;
