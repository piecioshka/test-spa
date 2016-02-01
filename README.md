# test-spa

> :ledger: Testowa aplikacja SPA na potrzeby dydaktyczne.

## Jak to działa?

Demo dostępne tutaj: http://piecioshka.github.io/test-spa/

## Wykorzystanie

Używam biblioteki **jQuery**, aby w łatwy sposób:

 * nasłuchiwać na zmianę stanu hash w pasku adresu
 * załadować odpowiedni plik z dysku.

## Struktura projektu

```
.
├── README.md
├── app
│   ├── index.html
│   ├── scripts
│   │   └── main.js
│   └── templates
│       ├── about.html
│       ├── contact.html
│       └── home.html
├── package.json
└── tasks
    ├── common
    │   └── paths.js
    └── deploy.js

5 directories, 9 files
```

## Licencja

[The MIT License](http://piecioshka.mit-license.org) @ 2016
