Este es un proyecto para practicar el uso de los **Conventional Commits** apoyandonos en el suso de herramientas como:

* **Husky:** Es una herramienta que nos permite trabajar con los **Git Hooks** y hacer que las configuraciones que establescamos puedan ser subidas al repositorio de modo que todos los integrantes del equipo las utilicen al trabajar con el.

* **Jest:** Para ejecutar pruenas unitarias con Javascript

* **EsLint:** Es un linter de codigo (analizador de codigo) y su funcion es detectar errores de sintaxis o de formato en nuestro codigo

* **Prettier:** Prettier es una herramienta de formateo de código que se utiliza para asegurar que el código fuente siga un estilo de formato consistente. Garantiza que el codigo del equipo cumpla con un estilo definido.

* **Link-Stage:** Se utiliza para que solo se verfiquen los ficheros que se incluiran en el commit y no todos los ficheros del proyecto. Esto ayuda a que la fase de revision no consuma mucho tiempo sobre todo si se trata de un proyecto grande.


Para reproducir el ejemplo pueden seguirse los siguientes pasos:

1. Crear la carpeta del proyecto y ubicarnos dentro de ella para continuar con los siguiente pasos.

2. Crear fichero **suma.js** e implementar la función de *suma*.

3. Crear el fichero de prueba **suma.test.js** en el cual estará implementado el test para la función suma.

4. Inicializamos nuestro proyecto de node ejecutando el comando:
    - `yarn init`

4. Instalar los paquetes que se ocuparan en el ejemplo con el siguiente comando:
    - `yarn add --dev husky eslint jest standard-version @commitlint/config-conventional @commitlint/cli prettier lint-staged`

    La libreria `@commitlint/config-conventional` se ocupa para verificar que el nombre de nuestros commits cumpla con las reglas establecidas en los (**Conventional Commits**)[https://www.conventionalcommits.org/es/v1.0.0/]

5. Inicializar nuestro repositorio del proyecto ejecutando el comando:
    - `git init`

6. Agregar al stage de git los cambios realizados hasta ahora con el comando:
    - `git add .`

7. Luego eliminaremos los ficheros que se agregaron al stage pertenecientes a la carpeta **node_modules** ejecutando el comando:
    - `git rm -rf node_modules/`
   Este paso es necesario en caso de que no se agrege git al proyecto antes de crear el fichero .gitignore para proyectos de Javascript. En este caso se hizo tambien para prácticar.

8. creamos el fichero gitignore para proyectos npm ejecutando el siguiente comando:
    - `npx gitignore node`

9. Despues de haber creado nuestro fichero **.gitignore** ya podremos agregar los cambios a nuestro primer commit sin que se agrege el contenido de la carpeta **node_modules**:
    - `git add .`
    - `git commit -m 'primer commit que no ha sido verificado antes de hacerse'`
    Notese: que en el primer commit no se pasaban las pruebas al ejecutar el comando `yarn jest`, incluso si por lo que a continuacion se comenzarán a configurar las herramientas instaladas para no permitirle al programador hacer un commit sin cunplir con las reglas establecidas por el equipo de desarrollo

10. Para configurar nuestro entorno de modo que nos impida subir codigo que eno cumpla con los test o el estilo de codigo todavia necesitaremos instalar otras librerias que nos permitiran integrar **EsLint** con **Prettier** para ello ejecutaremos el siguiente comando:
    - `yarn add --dev prettier-eslint eslint-config-prettier eslint-plugin-prettier`
11. **Husky** se puede configurar dentro del **package.json** o en un fichero de configuración externo. Esta última opción es más recomendable debido a que queda mejor organizado y porque es más fácil colocar dentro de un mismo **Git Hook** varios comandos. El fichero de configuración que se creó para **Husky** se le llamó **husky.config.js**.
12. 