# Sistema de Descuentos – Proyecto Node.js

Este proyecto implementa la base inicial para una funcionalidad de descuentos en un e-commerce.  
Hasta ahora se han completado tres elementos principales:  
1) el esquema de base de datos,  
2) la lógica del cálculo del descuento,  
3) la prueba unitaria siguiendo TDD.

---

## 1. Esquema de Base de Datos

Se creó un archivo SQL llamado `20250207_create_discounts_and_audit_tables.sql` que contiene las tablas necesarias para comenzar la funcionalidad.

### Tabla: discounts
Guarda la información del descuento aplicado al carrito.  
Incluye campos como:
- monto original  
- descuento aplicado  
- monto final  
- regla utilizada  
- fecha de creación  

Esta tabla permite mostrar un resumen del descuento y asegurar consistencia en los cálculos.

### Tabla: discount_audit_logs
Registra una auditoría cada vez que se aplica un descuento.  
Incluye:
- id del descuento aplicado  
- id del usuario  
- snapshot del carrito  
- montos relacionados  
- fecha del evento  

Esta tabla permite realizar trazabilidad de operaciones y cumplir con la necesidad de auditoría.

---

## 2. Lógica del Cálculo del Descuento

Se creó una función responsable de calcular el resultado final después de aplicar un descuento.  
La lógica implementada cubre casos como:
- descuento normal  
- evitar descuentos mayores al monto original  
- manejo de valores decimales  

La función está separada en un servicio para mantener el código limpio y fácil de probar.

---

## 3. Prueba Unitaria (TDD)

Se implementó una prueba unitaria para validar el comportamiento de la función de cálculo.  
La prueba cubre:
- descuento aplicado correctamente  
- evitar valores negativos  
- manejo de decimales  

Las pruebas se ejecutan con Jest y su objetivo es asegurar que la lógica funciona antes de integrarla a más capas del sistema.

---

## 4. Estado Actual del Proyecto

Hasta este punto se ha completado lo siguiente:
- Diseño del esquema de base de datos  
- Lógica del cálculo del descuento  
- Prueba unitaria validando dicha lógica  

Este avance sienta la base para continuar con el desarrollo de endpoints, integración con la base de datos y flujo de auditoría en siguientes etapas.


Haciendo una prueba de gitflow