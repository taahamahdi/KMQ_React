import * as React from "react";
import {
    StyleSheet,
} from "react-native";

import YoutubePlayer from "react-native-youtube-iframe";

export const PLAYER_HEIGHT = 232;

interface PlayerProps {
    videoId: string,
    muted: boolean,
}

const Player = (props: PlayerProps) => {
    return (
        <YoutubePlayer
            height={PLAYER_HEIGHT}
            play={true}
            mute={props.muted}
            videoId={props.videoId}
        />
    );
}

const styles = StyleSheet.create({
});

export default Player;
