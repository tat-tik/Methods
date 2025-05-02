import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, 'swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}
