# 1. Introducción e instalación

## Índice

- [0. Prerrequisitos](#0-prerrequisitos)
- [1. Conceptos básicos](#1-conceptos-basicos)
- [2. Hola mundo](#2-hola-mundo)

## 0. Prerrequisitos

- Navegador Web: Chrome, Firefox, Edge, etc.
- Consola/Terminal: PowerShell, Git Bash, etc.
- Visual Studio Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Node.js / npm: [https://nodejs.org/es/download](https://nodejs.org/es/download)
- Git: [https://git-scm.com/download/](https://git-scm.com/download/)
- Extensión GH Actions: [https://marketplace.visualstudio.com/items?itemName=github.vscode-github-actions](https://marketplace.visualstudio.com/items?itemName=github.vscode-github-actions)
- Extensión YAML: [https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)

## 1. Conceptos básicos

- **Workflow**: Conjunto de jobs que se lanzarán cuando ocurra un evento en un repositorio.
- **Job**: Secuencia de steps que se ejecutan en un runner concreto, instanciado en tiempo de ejecución.
- **Step**: Tarea individual que puede ejecutar comandos o acciones.
- **Command**: Instrucción por consola de comandos del sistema operativo del runner.
- **Action**: Proceso predefinido que realiza unas labores concretas, disponible en el marketplace de GitHub.

## 2. Hola mundo

El primer paso para empezar a usar GitHub Actions (GHA) es crear la carpeta `.github/workflows/`, que albergará los workflows a realizar en forma de ficheros YAML.

Ejemplo ( `.github/workflows/hw.yml` ):

```yaml
name: Hello World example

on:
  push:
    branches:
      - main

jobs:
  hello_world:
    runs-on: ubuntu-22.04
    steps:
      - name: Mostrar mensaje
        run: |
          echo "Hola mundo!"
      - name: Mostrar fecha
        run: date
      - run: ls -l
```

## Referencias

- [Tutorial de introducción](https://www.adictosaltrabajo.com/2020/10/28/introduccion-a-github-actions-sintaxis-basica/)
- [Pricing](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions)
