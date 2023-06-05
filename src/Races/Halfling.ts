import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(name: string, dexteriry: number) {
    super(name, dexteriry);
    Halfling.count += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Halfling;