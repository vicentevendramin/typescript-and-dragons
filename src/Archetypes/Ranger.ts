import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    Ranger.count += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;