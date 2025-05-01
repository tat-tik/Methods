import Character from '../Character';
import Zombie from '../zombie';

test('Zombie', () => {
  const received = new Zombie('Зомби', 'zombie');
  const expected = {
    name: 'Зомби',
    type: 'zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('level up', () => {
  const result = new Zombie('Зомби', 'zombie');
  result.health = 20;
  result.level = 1;
  result.levelUp();
  const expected = {
    name: 'Зомби',
    type: 'zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };

  expect(result).toEqual(expected);
});

test('make damage', () => {
  const result = new Zombie('Зомби', 'zombie');
  result.health = 20;
  result.damage(3);
  const expected = 17.3;

  expect(result.health).toBeCloseTo(expected);
});