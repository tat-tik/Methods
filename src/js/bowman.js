import Character from './Character';

export default class Bowman extends Character {
  constructor(name, type) {
    
    super(name, type = 'bowman');
    this.attack = 25;
    this.defence = 25;
  }
}

