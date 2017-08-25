class Validation {

    constructor() {
        throw new Error('This class is just a helper');
    }

    _validateEntry(entry) {
        return entry.indexOf(',') >= 0 ? parseFloat(entry.replace(',', '.')) : entry;
    }

    static verifyBetween(entry, minor, major) {
        const validEntry = this.validateEntry(entry);
        const validMinor = this.validateEntry(minor);
        const validMajor = this.validateEntry(major);

        return validEntry <= validMinor || validEntry >= validMajor ? new Error('Invalid entry') : true;
    }
}

export default Validation;
