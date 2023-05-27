
Instal dengan perintah berikut

```
// core 
npm i translate-romawi-int

// latest
npm install translate-romawi-int@latest

```

Gunakan function dengan cara

# Cara menggunakan
```
import React, { FunctionComponent } from "react";
import { IntToRoman, RomanToInt } from "translate-romawi-int";

interface IndexProps { }

const Index: FunctionComponent<IndexProps> = () => {
  const romawi = RomanToInt("XLIII")
  const num = IntToRoman(43)
  console.log(romawi, num);

   return ()
    
}
export default Index;

```


Saya membuka untuk kontribusi kalian, dan atau jika menginginkan package baru silahkan email ke itpohgero@gmail.com atau kunjungi www.itpohgero.com

programer desa (wahyu agus arifin)