# 2. Fundamentos de GitHub Actions

Un flujo de trabajo tiene un nombre asignado y se dispara cuando se produce un evento determinado, por ejemplo al hacer push en la rama main:

    name: Basic workflow example

    on:
      push:
        branches:
          - main

A partir de ahí, hay que definir los trabajos que realizará dicho flujo, con sus pasos correspondientes:

    jobs:
      deploy:
        runs-on: ubuntu-18.04
        steps:

Que a su vez pueden ser comandos ejecutables por consola en el runner asignado, o acciones de GitHub:

    steps:
      - name: Downloading project
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Installing Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Installing dependencies
        run: npm ci

## Referencias

[Workflows](https://docs.github.com/en/actions/using-workflows/about-workflows)  
[Jobs](https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow)

[Contextos](https://docs.github.com/en/actions/learn-github-actions/contexts)  
[Expresiones](https://docs.github.com/en/actions/learn-github-actions/expressions)  
[Matrices](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs)  
[GH Script](https://github.com/marketplace/actions/github-script)

[Empaquetado](https://docs.github.com/en/actions/publishing-packages/about-packaging-with-github-actions)  
[Documentación Paquetes](https://docs.github.com/packages)

[Marketplace GitHub Actions](https://github.com/marketplace?type=actions)  
[GitHub Actions Training](https://githubschool.github.io/github-actions-training-fjk211/)