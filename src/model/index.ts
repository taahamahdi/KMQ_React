import Preferences from "./preferences";
import Database from "./database";
import { QueriedSong } from "./types";

class Model {
    private preferences: Preferences;
    private database: Database;

    constructor() {
        this.preferences = new Preferences();
        this.database = new Database("test.db");
    }

    async getRandomSong(): Promise<QueriedSong> {
        const song = this.database.getRandomSong(this.preferences);
        return song;
    }
}

export default Model;
