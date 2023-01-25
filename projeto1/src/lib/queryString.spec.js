import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an objet is provided', () => {
    const obj = {
      name: 'Joao',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Joao&profession=developer');
  });

  it('should create a valid query strin even when an array is passed as value', () => {
    const obj = {
      name: 'Joao',
      abilities: ['JS', 'TS'],
    };

    expect(queryString(obj)).toBe('name=Joao&abilities=JS,TS');
  });

  it('should throw and error when an object is passed as value', () => {
    const obj = {
      name: 'Joao',
      abilities: {
        first: 'JS',
        second: 'TS',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Joao&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Joao',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Joao';

    expect(parse(qs)).toEqual({
      name: 'Joao',
    });
  });

  it('should convert a query string to an objet taking care of comma separated values', () => {
    const qs = 'name=Joao&abilities=JS,TS';

    expect(parse(qs)).toEqual({
      name: 'Joao',
      abilities: ['JS', 'TS'],
    });
  });
});
