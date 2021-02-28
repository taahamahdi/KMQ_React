import SQLite from "react-native-sqlite-storage";
import Preferences from "./preferences";
import { QueriedSong } from "./types";

SQLite.enablePromise(true);
SQLite.DEBUG(true);

class Database {
    private readonly dbName: string;
    private database: Promise<SQLite.SQLiteDatabase>;

    constructor(dbName: string) {
        this.dbName = dbName;
        this.database = SQLite.openDatabase({ name: this.dbName, createFromLocation: `~${this.dbName}` }, this.successOpenCallback, this.errorOpenCallback);
    }

    successOpenCallback() {
        console.log("Opened successfully");
    }

    errorOpenCallback(err: SQLite.SQLError) {
        console.log("error:", err)
    }

    async getRandomSong(preferences: Preferences): Promise<QueriedSong> {
        return new Promise(async (resolve, reject) => {
            (await this.database).transaction((tx) => {
                tx.executeSql(`SELECT song_name as name, artist_name as artist, link as youtubeLink FROM available_songs WHERE publishedon BETWEEN date(?) AND date(?)`,
                    [preferences.getSQLBeginningCutoffDate(), preferences.getSQLEndCutoffDate()],
                    (tx, results) => {
                        resolve(results.rows.item(Math.floor(Math.random() * results.rows.length)));
                    },
                    (err: any) => { reject(err); }
                );
            })
        });
    }
}

export default Database;
