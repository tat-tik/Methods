import Character from '../Character';
import Swordsman from '../swordsman';

test('Swordsman', () => {
  const received = new Swordsman('Воин', 'swordsman');
  const expected = {
    name: 'Воин',
    type: 'swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('level up', () => {
  const result = new Swordsman('Воин', 'swordsman');
  result.health = 80;
  result.level = 2;
  result.levelUp();
  const expected = {
    name: 'Воин',
    type: 'swordsman',
    health: 100,
    level: 3,
    attack: 48,
    defence: 12,
  };

  expect(result).toEqual(expected);
});

test('make damage', () => {
  const result = new Swordsman('Воин', 'swordsman');
  result.health = 80;
  result.damage(3);
  const expected = 77.3;

  expect(result.health).toBeCloseTo(expected);
});