# kmq_react
A React Native implementation of [KMQ_Discord](https://github.com/Brainicism/KMQ_Discord) for Android/iOS.

How to run:

`npm install`

`npx react-native start`

`npx react-native run-android`

## TODO:
* ~~Hide the player for 3 secs, cover it, mute it~~
* Write script to convert Aoimirai db from mysql to sqlite using mysqldump
* Handle simple game logic (starting next round with a different song, reset)
* Add ability for user to guess the song
    * Duolingo-style, show words as their own buttons, user presses them in the right order to generate song title
* Implement a consistent style (https://github.com/hectahertz/react-native-typography, https://github.com/oblador/react-native-vector-icons, https://github.com/react-native-svg/react-native-svg, https://github.com/thoughtbot/RNStylingTemplate)
* Increase volume in steps at each round start (0, 25, 50, 100) (https://lonelycpp.github.io/react-native-youtube-iframe/component-props#volume)
* Randomize song start times
