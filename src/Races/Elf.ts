import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(name: string, dexteriry: number) {
    super(name, dexteriry);
    Elf.count += 1;
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Elf;