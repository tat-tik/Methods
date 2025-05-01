
import Undead from '../undead';

test('Undead', () => {
  const received = new Undead('Вампир', 'undead');
  const expected = {
    name: 'Вампир',
    type: 'undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('level up', () => {
  const result = new Undead('Вампир', 'undead');
  result.health = 50;
  result.level = 1;
  result.levelUp();
  const expected = {
    name: 'Вампир',
    type: 'undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(result).toEqual(expected);
});

test('make damage', () => {
  const result = new Undead('Вампир', 'undead');
  result.health = 50;
  result.damage(3);
  const expected = 47.75;

  expect(result.health).toBeCloseTo(expected);
});