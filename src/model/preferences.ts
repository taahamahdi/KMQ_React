const DEFAULT_OPTIONS = {
    beginningYear: 2008,
    endYear: new Date().getFullYear(),
};

interface GameOptions {
    beginningYear: number;
    endYear: number;
}

class Preferences {
    private gameOptions: GameOptions;


    constructor() {
        this.gameOptions = { ...DEFAULT_OPTIONS };
    }

    setBeginningCutoffYear(year: number) {
        this.gameOptions.beginningYear = year;
    }

    resetBeginningCutoffYear() {
        this.gameOptions.beginningYear = DEFAULT_OPTIONS.beginningYear;
    }

    getBeginningCutoffYear(): number {
        return this.gameOptions.beginningYear;
    }

    setEndCutoffYear(year: number) {
        this.gameOptions.endYear = year;
    }

    resetEndCutoffYear() {
        this.gameOptions.endYear = DEFAULT_OPTIONS.endYear;
    }

    getEndCutoffYear(): number {
        return this.gameOptions.endYear;
    }

    getSQLBeginningCutoffDate(): string {
        return new Date(this.getBeginningCutoffYear(), 0, 1).toJSON().substring(0, 10);
    }

    getSQLEndCutoffDate(): string {
        return new Date(this.getEndCutoffYear(), 11, 31).toJSON().substring(0, 10);
    }
};

export default Preferences;
