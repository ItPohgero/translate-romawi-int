# Translate Romawi Int

### Install dengan perintah berikut
Install dengan cara berikut
`npm i translate-romawi-int`
atau
`npm install translate-romawi-int@latest`

### Gunakan function dengan cara
```typescript-8,9-index.tsx
import React, { FunctionComponent } from "react";
import { IntToRoman, RomanToInt } from "translate-romawi-int";

interface IndexProps { }

const Index: FunctionComponent<IndexProps> = () => {
  const romawi = RomanToInt("XLIII")
  const num = IntToRoman(43)
  console.log(romawi, num);

   return (
    <div>
      <div>{romawi}</div>
      <div>{num}</div>
    </div>
   )
    
}
export default Index;
```
created by wahyu agus arifin - owner itpohgero.com