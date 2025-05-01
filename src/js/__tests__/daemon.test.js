import Character from '../Character';
import Daemon from '../daemon';

test('Daemon', () => {
  const received = new Daemon('Демон', 'daemon');
  const expected = {
    name: 'Демон',
    type: 'daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('level up', () => {
  const result = new Daemon('Демон', 'daemon');
  result.health = 60;
  result.level = 1;
  result.levelUp();
  const expected = {
    name: 'Демон',
    type: 'daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };

  expect(result).toEqual(expected);
});

test('make damage', () => {
  const result = new Daemon('Демон', 'daemon');
  result.health = 60;
  result.damage(3);
  const expected = 58.2;

  expect(result.health).toBeCloseTo(expected);
});