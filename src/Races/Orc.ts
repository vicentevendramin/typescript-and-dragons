import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(name: string, dexteriry: number) {
    super(name, dexteriry);
    Orc.count += 1;
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Orc;