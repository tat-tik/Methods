import Character from '../Character';
import Magician from '../magician';

test('Magician', () => {
  const received = new Magician('Волшебник', 'magician');
  const expected = {
    name: 'Волшебник',
    type: 'magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('level up', () => {
  const result = new Magician('Волшебник', 'magician');
  result.health = 100;
  result.level = 5;
  result.levelUp();
  const expected = {
    name: 'Волшебник',
    type: 'magician',
    health: 100,
    level: 6,
    attack: 12,
    defence: 48,
  };

  expect(result).toEqual(expected);
});

test('make damage', () => {
  const result = new Magician('Волшебник', 'magician');
  result.health = 100;
  result.damage(3);
  const expected = 98.2;

  expect(result.health).toBeCloseTo(expected);
});

