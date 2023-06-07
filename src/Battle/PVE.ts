import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _char: Fighter;
  private _enemies: (Fighter | SimpleFighter)[];

  constructor(char: Fighter, enemies: (Fighter | SimpleFighter)[]) {
    super(char);
    this._char = char;
    this._enemies = enemies;
  }

  fight(): number {
    this._enemies.forEach((enemy) => {
      while (
        this._char.lifePoints > 0 && enemy.lifePoints > 0
      ) {
        this._char.attack(enemy);
        enemy.attack(this._char);
      }
    });
    return super.fight();
  }
}

export default PVE;