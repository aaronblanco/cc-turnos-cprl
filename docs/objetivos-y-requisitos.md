# Objetivos y requisitos

## Problema a resolver

La gestión manual o con scripts heredados de los turnos sanitarios suele dificultar:

- visibilidad en tiempo real de la cola,
- trazabilidad operativa,
- evolución funcional sin degradar el servicio,
- despliegue y mantenimiento homogéneos.

El proyecto plantea una evolución controlada hacia una solución modular y cloud-native.

## Objetivos

1. Definir un diseño base viable para evolucionar el sistema por hitos.
2. Establecer un MVP funcional centrado en recepción, operador y pantalla pública.
3. Garantizar separación clara de responsabilidades entre componentes.
4. Incorporar requisitos de seguridad, accesibilidad y mantenibilidad desde el inicio.

## Actores

- **Personal de recepción**: crea y gestiona turnos iniciales.
- **Operador/a sanitario/a**: consulta cola y llama pacientes.
- **Paciente / público**: visualiza el estado en pantalla pública.
- **Administración técnica (futuro)**: operación y observabilidad del sistema.

## Requisitos funcionales (MVP)

RF-01. Registrar un nuevo turno con datos mínimos definidos por negocio.

RF-02. Mostrar la cola de espera ordenada por criterio acordado (por ejemplo, orden de llegada/prioridad cuando aplique).

RF-03. Permitir al operador llamar al siguiente turno y actualizar su estado.

RF-04. Reflejar en pantalla pública la información de llamada vigente sin exponer datos sensibles.

RF-05. Mantener histórico básico de eventos de turno para trazabilidad operativa.

RF-06. Gestionar roles diferenciados (recepción y operador) para operaciones internas.

## Requisitos no funcionales (iniciales)

RNF-01. **Evolutividad**: arquitectura preparada para crecimiento por hitos.

RNF-02. **Seguridad**: autenticación para roles internos y principio de mínimo privilegio.

RNF-03. **Disponibilidad operativa**: diseño orientado a continuidad del servicio durante horario asistencial.

RNF-04. **Observabilidad**: definir desde diseño qué eventos y métricas deberán registrarse.

RNF-05. **Accesibilidad**: interfaz alineada con criterios WCAG aplicables y guía corporativa cuando proceda.

RNF-06. **Trazabilidad académica**: cada requisito debe poder justificarse con evidencia en entregables.

## Alcance del MVP

Incluido en MVP:

- ciclo básico de vida del turno (alta, espera, llamada),
- roles de recepción y operador,
- vista pública de turnos llamados,
- base documental para evaluación del Hito 1.

Fuera del MVP inicial:

- integración con sistemas clínicos externos,
- analítica avanzada,
- multisede,
- automatización completa de infraestructura.

## Criterios de aceptación documentales (Hito 1)

- Requisitos y alcance explícitos y no ambiguos.
- Separación clara entre diseño propuesto e implementación futura.
- Trazabilidad entre objetivos, requisitos, arquitectura y checklist de trabajo.
