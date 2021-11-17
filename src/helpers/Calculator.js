class Calculator {
  constructor(userForm, macroForm) {
    this.userName = userForm.fieldName;
    this.userSex = userForm.selectSex;
    this.userAge = userForm.fieldAge;
    this.userWeight = userForm.fieldWeight;
    this.userHeight = userForm.fieldHeight;
    this.userFat = userForm.fieldCorporalFat;

    this._calcDefictType = userForm.selectCalc;
    this._calcType = userForm.selectCalcType;
    this._calcFat = macroForm.fieldGperKgFat;
    this._calcProtein = macroForm.fieldGperKgProtein;
    this._calcDefict = macroForm.fieldCaloricDefict;
    this._calcExcercise = macroForm.fieldExcerciseTime;

    this.resultTMB = 0;
    this.resultCarbo = 0;
    this.resultProtein = 0;
    this.resultFat = 0;
    this.resultFiber = 0;
    this.resultDailyCal = 0;
  }

  updateForms(userForm, macroForm) {
    this.userName = userForm.fieldName;
    this.userSex = userForm.selectSex;
    this.userAge = userForm.fieldAge;
    this.userWeight = userForm.fieldWeight;
    this.userHeight = userForm.fieldHeight;
    this.userFat = userForm.fieldCorporalFat;

    this._calcDefictType = userForm.selectCalc;
    this._calcType = userForm.selectCalcType;
    this._calcFat = macroForm.fieldGperKgFat;
    this._calcProtein = macroForm.fieldGperKgProtein;
    this._calcDefict = macroForm.fieldCaloricDefict;
    this._calcExcercise = macroForm.fieldExcerciseTime;
  }

  calculate() {
    this.calcDailyCal();
    this.calcFat();
    this.calcProtein();
    this.calcFiber();
    this.calcCarbo();

    return {
      carbo: this.resultCarbo,
      protein: this.resultProtein,
      fat: this.resultFat,
      fiber: this.resultFiber,
      dailyCal: this.resultDailyCal
    };
  }

  calcTMB() {
    this.resultTMB =
      370 + 21.6 * (this.userWeight - this.userWeight * (this.userFat / 100));

    return this.resultTMB;
  }

  calcTMBmix() {
    const tmb =
      10 * this.userWeight + 6.25 * this.userHeight - 5 * this.userAge;
    this.resultTMB = this.userSex === 'man' ? tmb + 5 : tmb - 161;

    return this.resultTMB;
  }

  calcDailyCal() {
    const fact = 0.086 * this._calcExcercise * this.userWeight;
    this.resultDailyCal =
      this._calcType === 'withCorporalFat'
        ? this.calcTMB() + fact
        : this.calcTMBmix() + fact;
  }

  calcFat() {
    this.resultFat = this._calcFat * this.userWeight;
  }

  calcProtein() {
    this.resultProtein = this._calcProtein * this.userWeight;
  }

  calcFiber() {
    if (this._calcDefictType !== 'loseWeight') {
      this._calcDefict *= -1;
    }

    this.resultFiber = (this.resultDailyCal - this._calcDefict) / 1000 * 15;
  }

  calcCarbo() {
    const remainingCal = this.resultDailyCal - this._calcDefict;
    const fatCal = this.resultFat * 9;
    const proteinCal = this.resultProtein * 4;
    this.resultCarbo = (remainingCal - (fatCal + proteinCal)) / 4;
  }
}

export default Calculator;
