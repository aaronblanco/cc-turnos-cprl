# Interfaz y accesibilidad

## Objetivo

Definir criterios para construir interfaces de recepción, operador y pantalla pública con usabilidad y accesibilidad adecuadas al contexto sanitario.

## Principios de diseño

- claridad operativa (acciones rápidas y entendibles),
- consistencia visual y de interacción,
- minimización de errores en tareas críticas,
- legibilidad en entornos de atención al público.

## Criterios de accesibilidad (base)

- navegación por teclado en funciones esenciales,
- contraste suficiente de color,
- estructura semántica de contenidos,
- mensajes de estado comprensibles,
- soporte para escalado de texto y distintos tamaños de pantalla.

## Pantalla pública

- priorizar visibilidad a distancia,
- mostrar únicamente información no sensible,
- actualizar estado de manera clara y sin ambigüedades.

## Adaptación a arquitectura de referencia de microfrontends (Junta de Andalucía)

Referencia principal:
- <https://desarrollo.juntadeandalucia.es/recursos/reglas-pautas/arquitectura-referencia-microfrontend>

Criterios de adaptación propuestos:

1. Definir límites funcionales claros por interfaz (recepción, operador, pública).
2. Mantener un contrato de integración estable entre módulos y contenedor.
3. Aplicar guías de diseño y accesibilidad de forma homogénea en todos los módulos.
4. Evitar acoplamientos innecesarios entre frontends.

## Estado de verificación de fuentes externas

- **Oficial verificado**: existencia de la arquitectura y norma de microfrontends en portal oficial.
- **Pendiente por validar manualmente**: detalles técnicos completos de recursos no accesibles desde este entorno o con posibles restricciones de acceso.

## Pendientes para siguientes hitos

- seleccionar patrón de integración concreto,
- definir biblioteca/sistema de componentes,
- establecer criterios verificables de accesibilidad por pantalla.
