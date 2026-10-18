# Arquitectura propuesta (diseño, no implementación)

## Estado de este documento

Este documento describe una **propuesta de arquitectura** para guiar el desarrollo. No implica que exista ya una implementación funcional en el repositorio.

## Visión general

Se propone una arquitectura modular con separación de capas:

1. **Canales de interfaz**
   - Interfaz de recepción.
   - Interfaz de operador.
   - Pantalla pública de información.
2. **Capa de servicios de dominio de turnos**
   - Orquestación de estados del turno.
   - Reglas de negocio de cola.
3. **Persistencia y consulta**
   - Almacenamiento transaccional de turnos y eventos.
4. **Capacidades transversales**
   - Autenticación/autorización,
   - auditoría,
   - observabilidad.

## Componentes y responsabilidades

- **Módulo de Recepción**
  - Alta de turnos.
  - Consulta de estado básico de cola.

- **Módulo de Operación**
  - Selección/llamada de turnos.
  - Cambio de estado del turno.

- **Módulo de Pantalla Pública**
  - Visualización de información no sensible.
  - Actualización continua de turnos llamados.

- **Servicio de Turnos**
  - Fuente de verdad del ciclo de vida del turno.
  - Validación de transiciones de estado.

- **Servicio de Identidad (interno)**
  - Autenticación de recepción/operador.
  - Emisión y validación de credenciales de sesión.

- **Persistencia**
  - Entidades de turno y bitácora de eventos.

## Comunicaciones (propuesta)

- Interacciones internas de operación: petición/respuesta sobre API de negocio.
- Actualización de pantalla pública: modelo de publicación de cambios de estado (pull frecuente o push según decisión futura).
- Integraciones externas: **fuera de alcance del Hito 1**.

## Modelo de datos conceptual

Entidades principales:

- **Turno**
  - Identificador,
  - código visible,
  - estado,
  - marca temporal de creación,
  - metadatos mínimos de clasificación.

- **EventoTurno**
  - Identificador de evento,
  - turno asociado,
  - tipo de evento (creado, llamado, etc.),
  - actor,
  - timestamp.

- **UsuarioOperativo**
  - identificador,
  - rol (recepción/operador),
  - estado de cuenta.

## Flujos principales

### Flujo A: alta de turno
1. Recepción registra turno.
2. Servicio valida datos mínimos.
3. Se crea Turno en estado “en espera”.
4. Se registra EventoTurno “creado”.

### Flujo B: llamada de turno
1. Operador solicita siguiente turno.
2. Servicio aplica regla de selección.
3. Se actualiza estado del turno a “llamado”.
4. Se registra EventoTurno “llamado”.
5. Pantalla pública refleja la actualización.

### Flujo C: visualización pública
1. Pantalla consulta o recibe actualizaciones de turnos llamados.
2. Se muestran únicamente datos permitidos para exposición pública.

## Alineación con arquitectura de referencia de microfrontends (Junta de Andalucía)

Referencia principal:
- <https://desarrollo.juntadeandalucia.es/recursos/reglas-pautas/arquitectura-referencia-microfrontend>

Aplicación propuesta en este proyecto:

- Segmentación de interfaces por dominio funcional (recepción, operador, pública).
- Definición de contratos de integración entre shell/aplicación contenedora y módulos de interfaz.
- Homogeneización de criterios de accesibilidad y seguridad.

Estado de verificación:

- **Verificado**: existencia de recursos públicos de arquitectura y norma de microfrontends en el portal oficial.
- **Pendiente de validación manual**: detalles completos que puedan requerir acceso restringido o no accesible desde este entorno de trabajo.
