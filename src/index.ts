export const IntToRoman = (number: number): string => {
    // Array yang berisi pasangan nilai integer dan simbol Romawi yang sesuai
    const romanSymbols: [number, string][] = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];

    // Variabel penampung hasil konversi Romawi
    let result = "";

    // Iterasi melalui array romanSymbols
    for (let i = 0; i < romanSymbols.length; i++) {
        // Mengambil pasangan nilai integer dan simbol Romawi saat ini
        const [intValue, romanSymbol] = romanSymbols[i];

        // Selama nilai integer yang ingin dikonversi masih lebih besar dari pasangan saat ini,
        // simbol Romawi akan ditambahkan ke dalam hasil dan nilai integer akan dikurangi
        while (number >= intValue) {
            result += romanSymbol;
            number -= intValue;
        }
    }

    // Mengembalikan hasil konversi Romawi
    return result;
};


export const RomanToInt = (roman: string): number => {
    // Mengonversi string Romawi menjadi huruf besar
    const romanUpperCase = roman.toUpperCase();

    // Objek yang berisi pasangan simbol Romawi dan nilai integer yang sesuai
    const romanSymbols: { [key: string]: number } = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1,
    };

    // Variabel penampung hasil konversi integer
    let result = 0;

    // Iterasi melalui string Romawi
    for (let i = 0; i < romanUpperCase.length; i++) {
        // Mengambil simbol Romawi saat ini
        const currentSymbol = romanUpperCase[i];
        // Mengambil nilai integer yang sesuai dari objek romanSymbols
        const currentValue = romanSymbols[currentSymbol];

        // Jika nilai integer simbol Romawi saat ini lebih kecil dari nilai integer simbol Romawi berikutnya,
        // maka nilai integer saat ini akan dikurangi dari hasil
        if (i + 1 < romanUpperCase.length) {
            const nextSymbol = romanUpperCase[i + 1];
            const nextValue = romanSymbols[nextSymbol];
            if (currentValue < nextValue) {
                result -= currentValue;
                continue;
            }
        }

        // Menambahkan nilai integer simbol Romawi saat ini ke dalam hasil
        result += currentValue;
    }

    // Mengembalikan hasil konversi integer
    return result;
}
