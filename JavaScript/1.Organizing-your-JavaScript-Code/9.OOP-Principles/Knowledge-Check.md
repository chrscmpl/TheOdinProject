## **Explain the “Single Responsibility Principle”.**

The **Single Responsibility Principle** states that _a class or object should have only one reason to change_, meaning that objects should ultimately have only one responsibility.

To define what constitutes a single responsibility, it is useful to adopt a system of **Object Role Stereotypes**, an example can be the following system:

- _Information holder_
  - Holds and provides information to other objects.
- _Structurer_
  - Mantains relationships between other objects.
- _Service provider_
  - Offers services to other objects on demand.
- _Controller_
  - Controls a complex task and makes decisions.
- _Coordinator_
  - Controls a complex task delegating the work to other objects without making decisions.
- _Interfacer_
  - Transforms information between parts of the system on request.

## **Briefly explain the additional SOLID principles.**

##### **Open-Closed Principle**

_Code should be open for extensions, but closed for modification_, meaning that adding additional functionality should be possible without modifying the existing one.

##### **Liskov Substitution Principle**

_Any class should be substitutable for its parent class without unexpected consequences_, meaning that all of the functionality of a parent class should behave normally for its subclasses.

##### **Interface Segregation Principle**

_An entity should never be forced to implement an interface which contains elements which it will never use_.

##### **Dependency Inversion Principle**

_High level code should never depend on low level interfaces, and it should use abstractions instead_.

## **Explain what “tightly coupled” objects are and why we want to avoid them.**

Tightly coupled objects are objects that are so interconnected to one another that removing one will break the other, this makes the code much less open for modifications and we should make every object functional on itself.
