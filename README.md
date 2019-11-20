# yrra-js

![contributors](https://badgen.net/github/contributors/pupupulp/yrra-js)
![stars](https://badgen.net/github/stars/pupupulp/yrra-js)
![commits](https://badgen.net/github/commits/pupupulp/yrra-js)
![last commit](https://badgen.net/github/last-commit/pupupulp/yrra-js)
[![License](https://badgen.net/github/license/pupupulp/yrra-js)](https://github.com/pupupulp/yrra-js/blob/master/LICENSE)

An opensource implementation of clean architecture on an API powered by NodeJS

## Quickstart

### Installation

#### App Setup

1. **Clone the repository**

```cli
$   git clone https://github.com/pupupulp/yrra-js.git
```

2. **Go to source directory**
```cli
$   cd yrra-js
```

3. **Install dependencies**
```cli
$   npm install
```

#### Usage

```cli
$   npm start
```

## Overview

> Note: Interface classes are used using `extends` instead of `implements` but has a default method definition that throws a not implemented exception if the method is not overrided to simulate the `implements` behavior.

### [Object Oriented Design](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod)

#### [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)

- [Single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- [Open–closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
- [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
- [Interface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle)
- [Dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)

### [Clean Architecture](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

![](https://fullstackroyhome.files.wordpress.com/2019/03/cleanarchitecture.jpg)

#### Diagram Summary

**Flow of Dependency** - the flow of dependencies runs from the outside in, which makes the inner part of the circle independent of the outer.

##### Core Layer (Independent)

+ **Entities** - contains all the business entities, (ex. User, Customer, etc.).

+ **Use Cases** - contains all the business logic, (ex. getUser, addCustomer, etc.).

##### Other Layer

- Controllers/Presenters/Gateways - formats data in and out, and serves as an entry and exit points to use cases.

- Frameworks - contains changeable, updateable, and removable parts of the system.

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/pupupulp/yrra-js/issues/new).

### Related Projects

You might want to checkout these projects:

- [konyvtar-js](https://github.com/pupupulp/konyvtar-js) - An opensource library/package of code wrappers for ExtJS 6.2.0 GPL.
- [nchikota-js](https://github.com/pupupulp/nchikota-js) - An opensource tech stack composed of ExpressJS, NodeJS, ExtJS.
- [passerelle-js](https://github.com/pupupulp/passerelle-js) - An opensource API gateway built with ExpressJS.
- [spasojevic-js](https://github.com/pupupulp/spasojevic-js) - A simulation of knowledge transfer through generations.
- [neural-net-js](https://github.com/pupupulp/neural-net-js) - An opensource package to create a Neural Network.
- [microservices-architecture](https://github.com/pupupulp/microservices-architecture) - An opensource repository for all my learnings regarding microservices.

### Contributors

### Author

**Eagan Martin**
- [Github](https://github.com/pupupulp)
- [LinkedIn](https://www.linkedin.com/in/eagan-charles-martin-a5a172186/)

### License

Copyright © 2019, [Eagan Martin](https://github.com/pupupulp). Release under the [MIT License](https://github.com/pupupulp/yrra-js/blob/master/LICENSE)