import Character from './Character';

export default class Undead extends Character {
  constructor(name, type) {
   
    super(name, 'undead');
    this.attack = 25;
    this.defence = 25;
  }
}