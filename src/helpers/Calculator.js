class Calculator {
    constructor(userForm, macroForm) {
        this.userName = userForm.fieldName;
        this.userSex = userForm.selectSex;
        this.userAge = userForm.fieldAge;
        this.userWeight = userForm.fieldWeight;
        this.userHeight = userForm.fieldHeight;
        this.userFat = userForm.fieldCorporalFat;
        
        this.calcDefictType = userForm.selectCalc;
        this.calcType = userForm.selectCalcType;
        this.calcFat = macroForm.fieldGperKgFat;
        this.calcProtein = macroForm.fieldGperKgProtein;
        this.calcDefict = macroForm.fieldCaloricDefict;
        this.calcExcercise = macroForm.fieldExcerciseTime;

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
        
        this.calcDefictType = userForm.selectCalc;
        this.calcType = userForm.selectCalcType;
        this.calcFat = macroForm.fieldGperKgFat;
        this.calcProtein = macroForm.fieldGperKgProtein;
        this.calcDefict = macroForm.fieldCaloricDefict;
        this.calcExcercise = macroForm.fieldExcerciseTime;
    }

    calculate() {
        this._calcDailyCal();
        this._calcFat();
        this._calcProtein();
        this._calcFiber();
        this._calcCarbo();

        return ({
            carbo: this.resultCarbo,
            protein: this.resultProtein,
            fat: this.resultFat,
            fiber: this.resultFiber,
            dailyCal: this.resultDailyCal,
        });
    }

    _calcTMB() {
        this.resultTMB = 370 + (21.6 * (this.userWeight - (this.userWeight * (this.userFat / 100))));
        
        return this.resultTMB;
    }

    _calcTMBmix() {
        const tmb = ((10 * this.userWeight) + (6.25 * this.userHeight)) - (5 * this.userAge);
        this.resultTMB = this.userSex === 'man' ? tmb + 5 : tmb - 161;
        
        return this.resultTMB;
    }

    _calcDailyCal() {
        const fact = 0.086 * this.calcExcercise * this.userWeight;
        this.resultDailyCal = this.calcType === 'withCorporalFat' ? this._calcTMB() + fact : this._calcTMBmix() + fact;
    }

    _calcFat() {
        this.resultFat = this.calcFat * this.userWeight;
    }

    _calcProtein() {
        this.resultProtein = this.calcProtein * this.userWeight;
    }

    _calcFiber() {
        if (this.calcDefictType !== 'loseWeight') {
            this.calcDefict *= -1;
        }

        this.resultFiber = ((this.resultDailyCal - this.calcDefict) / 1000) * 15;
    }

    _calcCarbo() {
        const remainingCal = this.resultDailyCal - this.calcDefict;
        const fatCal = this.resultFat * 9;
        const proteinCal = this.resultProtein * 4;
        this.resultCarbo = (remainingCal - (fatCal + proteinCal)) / 4;
    }

}

export default Calculator;
