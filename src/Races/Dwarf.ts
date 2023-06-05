import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(name: string, dexteriry: number) {
    super(name, dexteriry);
    Dwarf.count += 1;
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Dwarf;