import Bowman from '../bowman';

test('Bowman', () => {
  const received = new Bowman('Стрелок', 'bowman');
  const expected = {
    name: 'Стрелок',
    type: 'bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('level up', () => {
  const result = new Bowman('Стрелок', 'bowman');
  result.health = 80;
  result.level = 3;
  result.levelUp();
  const expected = {
    name: 'Стрелок',
    type: 'bowman',
    health: 100,
    level: 4,
    attack: 30,
    defence: 30,
  };

  expect(result).toEqual(expected);
});

test('make damage', () => {
  const result = new Bowman('Стрелок', 'bowman');
  result.health = 80;
  result.damage(3);
  const expected = 77.75;

  expect(result.health).toBeCloseTo(expected);
});