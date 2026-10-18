# Decisiones arquitectónicas iniciales

## Formato

- **Decisión**: qué se adopta en esta fase.
- **Alternativas**: opciones consideradas.
- **Justificación**: motivo principal.
- **Estado**: tomada / pendiente.

---

## DA-01: Evolución incremental por hitos

- **Decisión**: estructurar el proyecto por hitos con alcance limitado y evidencias trazables.
- **Alternativas**: implementación completa desde el inicio.
- **Justificación**: reduce riesgo académico/técnico y facilita defensa del avance.
- **Estado**: **tomada**.

## DA-02: Separación funcional por módulos de interfaz

- **Decisión**: separar recepción, operador y pantalla pública como módulos con responsabilidades claras.
- **Alternativas**: interfaz monolítica única.
- **Justificación**: facilita mantenibilidad, evolución y posible alineación con enfoque microfrontend.
- **Estado**: **tomada**.

## DA-03: Servicio de dominio central para ciclo de vida del turno

- **Decisión**: centralizar reglas de estado del turno en un servicio de dominio.
- **Alternativas**: lógica distribuida en cada interfaz.
- **Justificación**: evita inconsistencias y mejora trazabilidad.
- **Estado**: **tomada**.

## DA-04: Trazabilidad mediante eventos de dominio

- **Decisión**: registrar eventos de turno (creación, llamada, cambios relevantes).
- **Alternativas**: persistir solo estado final.
- **Justificación**: soporte de auditoría y análisis operativo posterior.
- **Estado**: **tomada**.

## DA-05: Mecanismo de actualización de pantalla pública

- **Decisión**: pendiente entre modelo push y modelo pull.
- **Alternativas**: polling periódico / eventos en tiempo real.
- **Justificación**: depende de requisitos de latencia, complejidad y coste operativo.
- **Estado**: **pendiente**.

## DA-06: Estrategia tecnológica concreta de microfrontends

- **Decisión**: pendiente de cerrar stack y mecanismo final de integración.
- **Alternativas**: composición en build-time / composición en run-time.
- **Justificación**: requiere contrastar la guía oficial aplicable y restricciones de la asignatura.
- **Estado**: **pendiente**.

## DA-07: Proveedor/estrategia de identidad

- **Decisión**: definir autenticación para roles internos con principio de mínimo privilegio.
- **Alternativas**: autenticación embebida simple / proveedor externo / solución corporativa.
- **Justificación**: requisito de seguridad y segregación de permisos.
- **Estado**: **parcialmente tomada** (principio), **pendiente** (solución concreta).

## Riesgos abiertos

- Falta de rúbrica explícita de Hito 1 en el repositorio actual.
- Posibles restricciones de acceso a parte de documentación corporativa externa.
- Decisiones técnicas críticas aún no cerradas (actualización en tiempo real, integración concreta de frontends).
