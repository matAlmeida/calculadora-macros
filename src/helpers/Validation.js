class Validation {
  _validateEntry(entry) {
    return entry.indexOf(',') >= 0
      ? parseFloat(entry.replace(',', '.'))
      : entry;
  }

  static verifyBetween(entry, minor, major) {
    const validEntry = this.validateEntry(entry);
    const validMinor = this.validateEntry(minor);
    const validMajor = this.validateEntry(major);

    return validEntry <= validMinor || validEntry >= validMajor
      ? new Error('Invalid entry')
      : true;
  }

  static verifyEmpty(entry) {
    return (
      entry === '' ||
      entry === null ||
      entry === undefined ||
      isNaN(entry) ||
      entry === false
    );
  }

  static verifySelectionOfTwo(entry, zeroOption) {
    return entry === zeroOption ? 0 : 1;
  }
}

export default Validation;
