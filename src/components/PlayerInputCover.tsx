import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
} from "react-native";

import { PLAYER_HEIGHT } from "./Player";

const PlayerInputCover = () => {
    return (
        <TouchableOpacity
            style={{
                top: 0,
                height: PLAYER_HEIGHT,
                width: "100%",
                position: "absolute",
            }}
        />
    );
}

const styles = StyleSheet.create({
});

export default PlayerInputCover;
