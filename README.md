# cc-turnos-cprl

Proyecto de la asignatura **Cloud Computing** (Máster Universitario en Ingeniería Informática, UGR) para modernizar una aplicación de gestión de turnos de un centro sanitario.

## Objetivo del proyecto

Migrar progresivamente una solución inicial basada en scripts PHP hacia una arquitectura cloud-native, modular y evolutiva, manteniendo el foco en:

- alta de turnos en recepción,
- gestión de colas de espera,
- llamada de pacientes por operadores,
- pantalla pública de información.

## Estado actual

> **Fase actual: documentación (Hito 1).**
>
> En este repositorio todavía **no** se implementa la aplicación ni infraestructura de despliegue.

## Alcance de esta primera fase

Esta fase define:

- problema y objetivos,
- requisitos funcionales y no funcionales iniciales,
- arquitectura propuesta (sin implementación),
- decisiones arquitectónicas y pendientes,
- criterios de seguridad, autenticación, interfaz y accesibilidad,
- planificación de hitos,
- memoria y checklist de entrega del Hito 1.

## Estructura documental

- [`docs/objetivos-y-requisitos.md`](docs/objetivos-y-requisitos.md)
- [`docs/arquitectura.md`](docs/arquitectura.md)
- [`docs/decisiones-arquitectonicas.md`](docs/decisiones-arquitectonicas.md)
- [`docs/seguridad-y-autenticacion.md`](docs/seguridad-y-autenticacion.md)
- [`docs/interfaz-y-accesibilidad.md`](docs/interfaz-y-accesibilidad.md)
- [`docs/hitos/plan-hitos.md`](docs/hitos/plan-hitos.md)
- [`docs/hito-1.md`](docs/hito-1.md)
- [`docs/hito-1-checklist.md`](docs/hito-1-checklist.md)

## Fuentes y referencias iniciales

- Repositorio del proyecto: <https://github.com/aaronblanco/cc-turnos-cprl>
- Arquitectura de referencia de microfrontends (Junta de Andalucía):
  - <https://desarrollo.juntadeandalucia.es/recursos/reglas-pautas/arquitectura-referencia-microfrontend>
  - Norma relacionada: <https://desarrollo.juntadeandalucia.es/recursos/reglas-pautas/norma-para-el-desarrollo-microfrontends>

> Nota: si algún contenido oficial requiere acceso restringido o no está accesible desde el entorno técnico, se marca explícitamente como pendiente de validación manual.
