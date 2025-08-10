# Configuracion inicial de ESLint
Primero hay que instalar ESLint y los plugins necesarios. Podes hacerlo con el siguiente comando:

```bash
bun add -D @eslint/compat @eslint/js eslint eslint-plugin-react eslint-plugin-react-hooks globals prettier
```

Nota: son `save-dev` porque son dependencias de desarrollo y no tienen que ir en produccion.

Nota 2: si usas `bun` o `pnpm` ya soporta TypeScript de forma nativa, por lo que no es necesario instalar los linting de TypeScript como dependencia. Si usas `npm` o `yarn`, si es necesario instalarlo.

En el archivo de configuracion de eslint, `eslint.config.mjs` debe tener lo siguiente:

```javascript
import { fixupConfigRules } from "@eslint/compat";
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactJsx from "eslint-plugin-react/configs/jsx-runtime.js";
import react from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import ts from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";

export default [
    { languageOptions: { globals: globals.browser, parser: tsParser } },
    js.configs.recommended,
    ...ts.configs.recommended,
    ...fixupConfigRules([
        {
            ...react,
            settings: {
                react: { version: "detect" },
            },
        },
        reactJsx,
    ]),
    {
        plugins: {
            "react-hooks": reactHooks.configs.recommended,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
        },
    },
    { ignore: ["./dist"] },
];
```

El archivo `.prettierrc` tiene lo siguiente:

```json
{
    "singleQuote": false,
    "printWitdh": 80
}
```

Bastante simple.

## eslint-airbnb configs

Ahora instalo las depecencias de `eslint-airbnb` que hara que el codigo sea mas robusto y siga las mejores practicas de airbnb:

```bash
bun add -D eslint-config-airbnb eslint-plugin-import eslint-config-airbnb-typescript eslint-config-airbnb-base-typescript
```

Una vez instaladas las dependencias, el archivo `eslint.config.mjs` queda asi:

```javascript
import { fixupConfigRules } from "@eslint/compat";
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactJsx from "eslint-plugin-react/configs/jsx-runtime.js";
import react from "eslint-plugin-react/configs/recommended.js";
import airbnb from "eslint-config-airbnb-base";
import airbnbTypescript from "eslint-config-airbnb-base-typescript";
import globals from "globals";
import ts from "typescript-eslint";

export default [
	{ languageOptions: { globals: globals.browser } },
	js.configs.recommended,
	...ts.configs.recommended,
	...fixupConfigRules([
		{
			...react,
			settings: {
				react: { version: "detect" },
			},
		},
		reactJsx,
	]),
	{
		plugins: {
			"react-hooks": reactHooks.configs.recommended,
		},
		rules: {
			...airbnb.rules,
			...airbnbTypescript.rules,
			...reactHooks.configs.recommended.rules,
		},
	},
	{ ignore: ["./dist"] },
];
```

## Migracion a biome

El ultimo paso opcional es migrar a `biome`, que es un reemplazo de `eslint` y `prettier` que es mas rapido y tiene mas funcionalidades. Para migrar, primero hay que instalarlo:

```bash
bun add -D @biomejs/biome
```

Los pasos que siguen son faciles, queda correr los comandos:

```bash
bunx --bun biome init
```

Se creara un archivo minimo de configuracion, pero necesitamos agregarle todas las configuraciones del eslint y prettier, entonces:

```bash
biome migrate eslint --write
biome migrate prettier --write

```

Listo, ahora tenemos un proyecto con `biome` configurado.

Lo que queda de eslint y prettier ya se puede eliminar.

## Links
[Video explicativo del Gentleman Programming](https://www.youtube.com/watch?v=8ZjAy0U_pVg&t=2731s)

[Documentacion de biome](https://biomejs.dev/guides/getting-started/)
