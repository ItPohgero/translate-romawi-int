# Translate Romawi Int

### Install dengan perintah berikut
`npm i translate-romawi-int`
atau
`npm install translate-romawi-int@latest`

### Gunakan function dengan cara
```typescript-0-index.tsx
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