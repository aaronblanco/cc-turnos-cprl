# Seguridad y autenticación

## Alcance de seguridad en esta fase

Definición de criterios y controles esperados para el MVP. Este documento **no** implica implementación ya realizada.

## Roles y permisos

## Rol: recepción

Permisos previstos:

- crear turnos,
- consultar estado general de cola,
- operaciones básicas relacionadas con admisión.

Restricciones:

- no ejecutar acciones propias de operador sobre llamada/avance clínico si no están autorizadas.

## Rol: operador

Permisos previstos:

- consultar cola,
- llamar turnos,
- actualizar estado operativo del turno según flujo definido.

Restricciones:

- no acceder a funciones administrativas fuera de su ámbito.

## Pantalla pública

Características de exposición:

- acceso sin autenticación de usuario final,
- publicación de datos mínimos (p. ej., código de turno y estado visible),
- exclusión explícita de información sensible o identificadores personales.

## Requisitos de autenticación/autorización (propuestos)

1. Autenticación obligatoria para recepción y operador.
2. Control de autorización por rol (RBAC básico).
3. Sesiones con caducidad y revocación básica.
4. Registro de eventos relevantes de acceso y operación.

## Protección de credenciales

Criterios para implementación futura:

- no almacenar contraseñas en texto plano,
- uso de secretos en almacenes seguros,
- rotación periódica de credenciales técnicas,
- prohibición de credenciales en repositorio.

## Controles de seguridad mínimos para el MVP

- principio de mínimo privilegio,
- validación de entradas,
- trazabilidad de acciones críticas,
- endurecimiento de configuración por entorno,
- política de gestión de errores sin filtrado de información sensible.

## Pendientes

- mecanismo exacto de identidad y federación (si aplica),
- requisitos concretos de auditoría exigidos por la asignatura,
- definición de políticas de retención de logs y eventos.
