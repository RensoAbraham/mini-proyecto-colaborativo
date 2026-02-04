# RPSoft – Skill JavaScript  
## Reglas y Buenas Prácticas

Esta skill define las reglas obligatorias para escribir JavaScript limpio, mantenible y escalable.

---

# 1. Principios Base

- Usar ES Modules (`import / export`)
- Usar `const` por defecto
- Usar `let` solo si es necesario
- Nunca usar `var`
- Código siempre en inglés

---

# 2. Convenciones de Nombres

- camelCase → variables y funciones
- PascalCase → clases
- UPPER_SNAKE_CASE → constantes globales

Ejemplo:

```js
const userName = "John"
const MAX_RETRIES = 3

function calculateTotal(price, tax) {
  return price + tax
}
```

---

# 3. Funciones

- Máximo 30-40 líneas
- Una sola responsabilidad
- Evitar más de 3 niveles de anidación
- Preferir funciones puras

```js
const getFullName = (user) =>
  `${user.firstName} ${user.lastName}`
```

---

# 4. Manejo de Errores

Siempre manejar errores en async:

```js
try {
  const data = await fetchData()
} catch (error) {
  console.error(error)
}
```

Nunca ignorar errores silenciosamente.

---

# 5. Buenas Prácticas

- Evitar mutaciones innecesarias
- No duplicar lógica
- Extraer funciones reutilizables
- Validar inputs
- Eliminar console.log antes de producción
- No dejar código comentado muerto

---

# 6. Código Limpio

- Nombres descriptivos
- Comentarios solo cuando aporten contexto
- Preferir claridad sobre "código inteligente"
- Mantener archivos pequeños y enfocados
