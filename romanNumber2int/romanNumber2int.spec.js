const { romanNumber2Int } = require('./index')

describe('romanNumber2Int method', () => {
  describe('single letters tests', () => {
    it('should receive I and return 1', () => {
      expect(romanNumber2Int('I')).toEqual(1)
    })

    it('should receive V and return 5', () => {
      expect(romanNumber2Int('V')).toEqual(5)
    })

    it('should receive X and return 10', () => {
      expect(romanNumber2Int('X')).toEqual(10)
    })

    it('should receive L and return 50', () => {
      expect(romanNumber2Int('L')).toEqual(50)
    })

    it('should receive C and return 100', () => {
      expect(romanNumber2Int('C')).toEqual(100)
    })

    it('should receive D and return 500', () => {
      expect(romanNumber2Int('D')).toEqual(500)
    })

    it('should receive M and return 1000', () => {
      expect(romanNumber2Int('M')).toEqual(1000)
    })
  })

  describe('multiple letters tests', () => {
    it('should receive II and return 2', () => {
      expect(romanNumber2Int('II')).toEqual(2)
    })

    it('should receive VI and return 6', () => {
      expect(romanNumber2Int('VI')).toEqual(6)
    })

    it('should receive XII and return 12', () => {
      expect(romanNumber2Int('XII')).toEqual(12)
    })

    it('should receive XIV and return 14', () => {
      expect(romanNumber2Int('XIV')).toEqual(14)
    })

    it('should receive LVX and return 55', () => {
      expect(romanNumber2Int('LVX')).toEqual(55)
    })

    it('should receive LX and return 60', () => {
      expect(romanNumber2Int('LX')).toEqual(60)
    })

    it('should receive CV and return 105', () => {
      expect(romanNumber2Int('CV')).toEqual(105)
    })

    it('should receive DIV and return 504', () => {
      expect(romanNumber2Int('DIV')).toEqual(504)
    })

    it('should receive MMXXI and return 2021', () => {
      expect(romanNumber2Int('MMXXI')).toEqual(2021)
    })
  })
})