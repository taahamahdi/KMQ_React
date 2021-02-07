import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import { PLAYER_HEIGHT } from "./Player";

interface PlayerCoverProps {
    visible: boolean,
    roundNumber: number,
}

const PlayerCover = (props: PlayerCoverProps) => {
    return (props.visible ?
            <View style={styles.rectangle}>
                <Text style={styles.roundText}>
                    Round {props.roundNumber}
                </Text>
            </View>
                : null);
}

const styles = StyleSheet.create({
    rectangle: {
        top: 0,
        height: PLAYER_HEIGHT,
        width: "100%",
        backgroundColor: "black",
        position: "absolute",
    },
    roundText: {
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
    }
    
});

export default PlayerCover;
