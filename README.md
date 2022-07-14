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

Aunque puede haber algunas violaciones al SRP.

- Nombres de clases y módulos demasiado genéricos. 
- Cambios en el código suelen afectar la clase o módulo. 
- La clase involucra múltiples capas. 
- Número elevado de importaciones. 
- Cantidad elevada de métodos públicos. 
- Excesivo número de líneas de código. 

#### Principio de Abierto y Cerrado (OCP)

Depende mucho del contexto (en donde se desarrolla la aplicación). 

Establece que las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación. 

La forma más sencilla de demostrar este principio es considerar un método que hace una cosa. 

![ocp](/src/images/ocp.PNG)

La forma de evitarlo es hacer: 

![ocp2](/src/images/ocp2.PNG)

El principio de abierto-cerado también se puede lograr de muchas otras maneras, incluso mediate el uso de la herencia o mediante patrones de diseño de composición como el patrón de estrategia. 

Aunque puede haber algunas violaciones al OCP.

- Lo podemos detectar cuando los cambios afectan a nuestra clase o módulo. 
- Cuando una clase o módulo afecta muchas capas (Presentación, Almacenamiento, etc.).