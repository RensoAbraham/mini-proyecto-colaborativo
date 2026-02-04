# RPSoft – Skill Next.js  
## Reglas y Buenas Prácticas

Esta skill define estándares obligatorios para desarrollo con Next.js.

---

# 1. Arquitectura

- Usar App Router en proyectos nuevos
- Separar Server Components y Client Components
- Server-first mindset

Solo usar `"use client"` cuando sea necesario.

---

# 2. Fetching

- Priorizar fetch en servidor
- No usar useEffect para datos que pueden obtenerse en servidor
- Manejar caché correctamente

Ejemplo:

```js
export default async function Page() {
  const data = await fetch("https://api.example.com").then(res => res.json())
  return <div>{data.title}</div>
}
```

---

# 3. Seguridad

- No exponer secretos
- Usar variables de entorno correctamente
- Solo usar `NEXT_PUBLIC_` para variables públicas

---

# 4. Performance

- Usar `next/image`
- Evitar client components innecesarios
- Usar dynamic import cuando sea necesario
- Reducir tamaño de bundles

---

# 5. Estructura Recomendada

```
src/
  app/
  components/
  hooks/
  services/
  lib/
  utils/
  types/
```

---

# 6. Buenas Prácticas

- Server-first siempre que sea posible
- Minimizar estado en cliente
- Componentes pequeños
- No mezclar lógica pesada en UI
- Código limpio y modular
