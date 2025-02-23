# Backup Code Action

## Definición

Genera un fichero ZIP de backup del código fuente del repositorio

## Instrucciones de uso

1. Instalar dependencias:
    ```bash
    cd actions/backup-code
    npm install
    ```

2. Compilar la action:
    ```bash
    npm run build
    ```

3. Para usar la action en un workflow:
    ```yaml
    steps:
      - uses: actions/checkout@v4
      - name: Backup code
        uses: ./actions/backup-code
        with:
          output-path: './backups'
          filename: 'my-repo-backup'
    ```
