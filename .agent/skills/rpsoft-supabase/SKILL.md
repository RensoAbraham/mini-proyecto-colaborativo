# RPSoft – Skill Supabase  
## Reglas y Buenas Prácticas para Diseño de Tablas

Esta skill define las reglas obligatorias para la creación y mantenimiento de tablas en Supabase (PostgreSQL), asegurando consistencia, seguridad y escalabilidad.

---

## 1. Convenciones de Nombres

### Tablas

- Usar `snake_case`
- Nombres en plural
- En inglés
- Descriptivos y claros

✅ **Correcto:**

- `users`
- `projects`
- `user_profiles`
- `task_comments`

❌ **Incorrecto:**

- `User`
- `tbl_users`
- `data1`
- `info`

---

### Columnas

- `snake_case`
- Nombre claro y semántico
- No abreviaturas innecesarias

✅ **Correcto:**

- `created_at`
- `updated_at`
- `user_id`
- `is_active`

❌ **Incorrecto:**

- `c_at`
- `usr`
- `flag1`

---

## 2. Campos Base Obligatorios

Toda tabla debe incluir:

```sql
id uuid primary key default gen_random_uuid(),
created_at timestamptz not null default now(),
updated_at timestamptz not null default now()
```

Opcional recomendado:

```sql
created_by uuid references users(id),
updated_by uuid references users(id)
```

---

## 3. Tipos de Datos Correctos

- `uuid` → claves primarias  
- `timestamptz` → fechas  
- `boolean` → estados  
- `text` → textos largos  
- `varchar(n)` solo si hay restricción real  
- `jsonb` solo cuando sea estrictamente necesario  

❌ **No usar:**

- `serial`
- `int` como PK
- `timestamp` sin zona horaria

---

## 4. Relaciones y Claves Foráneas

Siempre definir `foreign keys` explícitas:

```sql
user_id uuid not null references users(id) on delete cascade
```

### Reglas:

- Usar `on delete cascade` solo si tiene sentido lógico  
- Si no, usar `restrict`  
- No dejar relaciones implícitas  

---

## 5. Índices

Agregar índices en:

- Foreign keys  
- Columnas de búsqueda frecuente  
- Campos usados en filtros  

Ejemplo:

```sql
create index idx_projects_user_id on projects(user_id);
```

No crear índices innecesarios.

---

## 6. Seguridad (RLS Obligatorio)

Toda tabla debe tener:

```sql
alter table nombre_tabla enable row level security;
```

### Políticas mínimas

#### Select

```sql
create policy "Users can view their own records"
on nombre_tabla
for select
using (auth.uid() = user_id);
```

#### Insert

```sql
create policy "Users can insert their own records"
on nombre_tabla
for insert
with check (auth.uid() = user_id);
```

Nunca dejar tablas públicas sin RLS en producción.

---

## 7. Normalización

- Evitar duplicación de datos  
- Usar tablas intermedias para relaciones many-to-many  
- No guardar arrays cuando corresponde una relación  

Ejemplo many-to-many:

- `users`
- `projects`
- `user_projects`

---

## 8. Auditoría y Consistencia

Recomendado:

- Trigger para actualizar `updated_at`  
- No modificar manualmente `created_at`  
- Registrar cambios críticos en tablas de log si el sistema lo requiere  

---

## 9. Migraciones

- Nunca modificar tablas manualmente en producción  
- Usar migraciones versionadas  
- Cada cambio debe ser reproducible  

---

## 10. Principios Generales

- Seguridad primero  
- Consistencia antes que rapidez  
- Claridad antes que complejidad  
- Escalabilidad desde el diseño  
