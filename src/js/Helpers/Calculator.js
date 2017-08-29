class Calculator {
    constructor(userForm, macroForm) {
        this.userName = userForm.fieldName;
        this.userSex = userForm.selectSex;
        this.userAge = userForm.fieldAge;
        this.userWeight = userForm.fieldWeight;
        this.userHeight = userForm.fieldHeight;
        this.userFat = userForm.fieldCorporalFat;
        
        this.calcType = userForm.selectCalcType;
        this.calcFat = macroForm.fieldGperKgFat;
        this.calcProtein = macroForm.fieldGperKgProtein;
        this.calcDefict = macroForm.fieldCaloricDefict;
        this.calcExcercise = macroForm.fieldExcerciseTime;

        this.resultCarbo = 0;
        this.resultProtein = 0;
        this.resultFat = 0;
        this.resultFiber = 0;
        this.resultTotalCal = 0;
    }


}

export default Calculator;
