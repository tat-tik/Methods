import Character from '../Character';

test('Имя должно быть больше 2 символов', () => {
  expect(() => new Character('X', 'zombie')).toThrow(new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!'));
});

test('Имя должно быть меньше 10 символов', () => {
  expect(() => new Character('Xxxxxxxxxxxxxx', 'zombie')).toThrow(new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!'));
});

test('Некорректный тип', () => {
  expect(() => new Character('Зомби', 'bowerman')).toThrow(new Error('Ошибка! Некорректный тип персонажа!'));
});

test('Нельзя повысить level умершего', () => {
  const result = new Character('Стрелок', 'bowman');
  result.health = 0;
  expect(() => result.levelUp()).toThrow(new Error('Ошибка! Нельзя повысить level умершего!'));
});

test('Нельзя повысить level умершего при отрицательном level', () => {
  const result = new Character('Стрелок', 'bowman');
  result.health = -10;
  expect(() => result.damage(3)).toThrow(new Error('Ошибка! Нельзя повысить level умершего!'));
});