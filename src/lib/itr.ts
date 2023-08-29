export const IntToRoman = (number: number): string => {
  // Array yang berisi pasangan nilai integer dan simbol Romawi yang sesuai
  const romanSymbols: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]

  // Variabel penampung hasil konversi Romawi
  let result = ''

  // Iterasi melalui array romanSymbols
  for (let i = 0; i < romanSymbols.length; i++) {
    // Mengambil pasangan nilai integer dan simbol Romawi saat ini
    const [intValue, romanSymbol] = romanSymbols[i]

    // Selama nilai integer yang ingin dikonversi masih lebih besar dari pasangan saat ini,
    // simbol Romawi akan ditambahkan ke dalam hasil dan nilai integer akan dikurangi
    while (number >= intValue) {
      result += romanSymbol
      number -= intValue
    }
  }

  // Mengembalikan hasil konversi Romawi
  return result
}
