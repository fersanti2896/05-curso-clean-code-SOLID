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

#### Principio de Substitución de Liskov

Siendo _U_ sun subtipo de _T_, cualquier instancia de _T_ debería poder ser sustituida por cualquier instancia de _U_ sin alterar las propiedades del sistema. 

#### Principio de Segregación de Interfaz (ISP)

Establece que los clientes no deberían verse forzados a depender de interfaces que no usan, debe ser tolerante a cambios. 

Aunque puede haber alguna violaciones al ISP.

- Si las interfaces que diseñamos nos obligan a violar los Principios de Responsabilidad Única y substitución de Liskov. 

#### Pincipio de Inversión de Dependencias

- Los componentes importantes de capas superiores no deben de depender de componentes que son menos importantes. 

- Ambos deberían de depender de abstraciones, es decir, de clases abstractas que de ella extiende

Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio. 

Los menos importantes son los que están próximos a la infraestructura, es decir, aquellos relacionados con la UI, la persistencia, la comunicación con las APIs externas, etc. 

![inversion-depe](/src/images/inversion-dependencias.PNG)

Depender de abstraciones nos estamos refiriendo a clases abstractas o interfaces, por lo cual, uno de los motivos más importantes por el cual las reglas de negocio o capa de dominio deben de depender de estas y no de concreciones es que aumenta su tolerancia al cambio. 

Cada cambio en un componente abstracto implica un cambio en su implementación, por el contrario, los cambios en implementaciones concretas, la mayoría de las veces, no requieren cambios en las interfaces que implementa. 

Por lo que se implementa la inyección de dependencias, el cual significa que en un modulo o componente requiere de otro para poder realizar su trabajo. 

En algún momento nuestro porgrama o aplicación llegará a estar formado por muchos módulos, cuando esto pase, es cuando debemos usar inyección de dependencias. 

