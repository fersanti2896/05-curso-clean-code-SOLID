# Notas Sección 5: Principios SOLID
___

#### Principios SOLID

Los principios SOLID nos indica cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.

- __S__ ingle Responsability. Responsabilidad única. 
- __O__ pen and Close. Abierto y cerrado. 
- __L__ iskov Substitution. Sustitución de Liskov. 
- __I__ nterface Segregation. Segregación de interfaz. 
- __D__ ependency Inversion. Inversión de dependencias.

#### Principio de Responsabilidad Única (SRP)

__Tener un única responsabilidad !== Hacer una única cosa__

En las clases deben estar centralizadas y tener una única responsabilidad, esto hará que sea más fácil de testear las clases. 

Aunque puede haber algunas violanciones al SRP.

- Nombres de clases y módulos demasiado genéricos. 
- Cambios en el código suelen afectar la clase o módulo. 
- La clase involucra múltiples capas. 
- Número elevado de importaciones. 
- Cantidad elevada de métodos públicos. 
- Excesivo número de líneas de código. 
