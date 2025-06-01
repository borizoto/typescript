// 3. Car Diagnostics
// You were tasked to modify a function that takes in car body parts to monitor their status, the function currently
// takes in 3 parameters:
// • carBody: { material: string, state: string }
// • tires: { airPressure: number, condition: string }
// • engine: { horsepower: number, oilDensity: number }
// You need to add 2 more properties to each of the components:
// • partName: string
// • runDiagnostics(): string - returns the partName
// • Note:Instead of modifying each object type, try to simplify changing the function signature using advanced
// types

type carBodyType = {
    material: string;
    state: string
}

type tiresType = {
    airPressure: number;
    condition: string
}

type engineType = {
    horsepower: number;
    oilDensity: number
}

type diagnosticsType = {
    partName: string,
    runDiagnostics(): string
}

function carDiagnostics(carBody: carBodyType & diagnosticsType, tires: tiresType & diagnosticsType, engine: engineType & diagnosticsType): void {
    console.log(carBody)
    console.log(tires)
    console.log(engine)
}

carDiagnostics({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics() { return this.partName } },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics() { return this.partName } },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics() { return this.partName } })