import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type) {
    
    super(name, 'daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
