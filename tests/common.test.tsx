import { IntToRoman, RomanToInt } from '../src/index'

describe('IntToRoman', () => {
  it('should convert integers to Roman numerals correctly', () => {
    expect(IntToRoman(1)).toBe('I')
    expect(IntToRoman(9)).toBe('IX')
    expect(IntToRoman(1066)).toBe('MLXVI')
    expect(IntToRoman(1984)).toBe('MCMLXXXIV')
  })
})

describe('RomanToInt', () => {
  it('should convert Roman numerals to integers correctly', () => {
    expect(RomanToInt('III')).toBe(3)
    expect(RomanToInt('IX')).toBe(9)
    expect(RomanToInt('XLII')).toBe(42)
    expect(RomanToInt('XCIX')).toBe(99)
  })
})
