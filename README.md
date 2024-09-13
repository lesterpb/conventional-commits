##Librerias utilizadas en el ejemplo:

Este es un proyecto para practicar el uso de los **Conventional Commits** apoyandonos en el uso de librerías como:

* **Husky:** Es una herramienta que nos permite trabajar con los **Git Hooks** y hacer que las configuraciones que establescamos puedan ser subidas al repositorio de modo que todos los integrantes del equipo las utilicen al trabajar con el. https://typicode.github.io/husky/

* **Jest:** Para ejecutar pruebas unitarias con Javascript. https://jestjs.io/es-ES/docs/getting-started

* **EsLint:** Es un linter de codigo (analizador de codigo) y su funcion es detectar errores de sintaxis o de formato en el código. https://eslint.org/docs/latest/

* **Prettier:** Prettier es una herramienta de formateo de código que se utiliza para asegurar que el código fuente siga un estilo de formato consistente. Garantiza que el codigo del equipo cumpla con un estilo definido. https://prettier.io/docs/en/

* **CommitLint:** Se instala a traves de la libreria `@commitlint/config-conventional` y se ocupa para verificar que el nombre de los commits cumpla con las reglas establecidas en los (**Conventional Commits**)[https://www.conventionalcommits.org/es/v1.0.0/] 
Su documentacion se puede consultar en: https://commitlint.js.org

* **@commitlint/cli:** Esta dependencia es la interfaz de línea de comandos para Commitlint. Proporciona herramientas para ejecutar la validación de mensajes de confirmación de acuerdo con las reglas establecidas en la configuración de Commitlint. Puedes usar este CLI para verificar si tus mensajes de confirmación cumplen con las convenciones configuradas.

**NOTA:** *Para crear facilmente commits que cumplan con los estandares podemos utilizar también la herramienta (**commitizen**)[https://commitizen.github.io/cz-cli/]*

* **lint-stage:** Se utiliza para que solo se verfiquen los ficheros que se incluiran en el commit y no todos los ficheros del proyecto. Esto ayuda a que la fase de revision no consuma mucho tiempo sobre todo si se trata de un proyecto grande. https://github.com/lint-staged/lint-staged

##Para simplificar el porceso de liberación (no está configurado en este ejemplo): 

* **release-please:** Automatiza la generación de CHANGELOG, la creación de lanzamientos de GitHub y los aumentos de versiones en los proyectos. Este paquete es muy recomendado para utilizar en nuevos proyectos debido a que se integra muy bien con los GitHub Actions. Su documentacion esta en https://github.com/googleapis/release-please. Para consultar otras fuentes donde se explica como integrar esta libreria al proyecto se pueden consultar los siguientes enlaces:

    https://github.com/marketplace/actions/release-please-action
    https://github.com/googleapis/release-please-action
    https://dev.to/archinmodi/simplify-your-release-process-with-the-release-please-github-action-3l34
    https://medium.com/@koladilip/embracing-automation-in-versioning-the-power-of-release-please-github-action-4241bd8f3b54

* **commit-and-tag-version:** Automatiza el proceso de versión basado en convenciones de mensajes de commit, crea el fichero **CHANGELOG**. Este paquete es un fork del (**standard-version**)[https://github.com/conventional-changelog/standard-version] debido a que fue descontinuado desde el 15 de mayo de 2022. Su función es la de analizar los mensajes de commit para determinar el próximo número de versión según las reglas semánticas y genera automáticamente el **CHANGELOG**. También crea commits y tags de versión, simplificando el proceso de liberación de software con versiones semánticas. En su misma documentación se recomienda utilizar **release-please** y solo utilizar **commit-and-tag-version** si se quiere hacer una migración desde la librería **standard-version** para que el cambio no sea tan brusco.

    https://github.com/absolute-version/commit-and-tag-version

Otros paquetes más avanzados son:

**semantic-release**:
       - https://github.com/semantic-release/semantic-release
       - https://semantic-release.gitbook.io/semantic-release/usage/configuration
       - https://architecture-it.github.io/docs/GitOps/semanticrelease/
       - https://github.com/semantic-release
       - https://github.com/semantic-release/changelog
**lerna** (para trabajar con monorepos): 
       - https://lerna.js.org/
       - https://github.com/lerna/lerna
       - https://statefull.medium.com/lerna-monorepos-2a19566d0a78
       - https://www.startechup.com/es/blog/what-is-lerna/

El versionado que se asigna de forma automática por estas librerías se guía por las prácticas descritas en este artículo: 
        https://semver.org/

**NOTA:** *Opcionalmente se puede usar solo el paquete (**absolute-version**)[https://github.com/absolute-version/absolute-version-js] si quisieramos únicamnete generar el versionado de nuestra aplicación de forma automática y no quisieramos generear todo el documento **CHANGELOG***

##Para reproducir el ejemplo pueden seguirse los siguientes pasos:

1. Crear la carpeta del proyecto y ubicarnos dentro de ella para continuar con los siguiente pasos.

2. Crear fichero **suma.js** e implementar la función de *suma*.

3. Crear el fichero de prueba **suma.test.js** en el cual estará implementado el test para la función suma.

4. Inicializamos el proyecto de node ejecutando el comando:
    - `yarn init`

4. Instalar los paquetes que se ocuparan en el ejemplo con el siguiente comando:
    - `yarn add --dev husky eslint jest standard-version @commitlint/{cli,config-conventional} prettier lint-staged`

5. Inicializar el repositorio del proyecto ejecutando el comando:
    - `git init`

6. Agregar al stage de git los cambios realizados hasta ahora con el comando:
    - `git add .`

7. Luego eliminaremos los ficheros que se agregaron al stage pertenecientes a la carpeta **node_modules** ejecutando el comando:
    - `git rm -rf node_modules/`
   Este paso es necesario en caso de que no se agrege git al proyecto antes de crear el fichero .gitignore para proyectos de Javascript. En este caso se hizo tambien para prácticar.

8. Creamos el fichero gitignore para proyectos npm ejecutando el siguiente comando:
    - `npx gitignore node`

9. Después de haber creado el fichero **.gitignore** ya podremos agregar los cambios al primer commit sin que se agrege el contenido de la carpeta **node_modules**:
    - `git add .`
    - `git commit -m 'primer commit que no ha sido verificado antes de hacerse'`
    Notese: que en el primer commit no se pasaban las pruebas al ejecutar el comando `yarn jest`, incluso si por lo que a continuacion se comenzarán a configurar las herramientas instaladas para no permitirle al programador hacer un commit sin cunplir con las reglas establecidas por el equipo de desarrollo

10. Para preparar el proyecto de modo que se impida subir código que no cumpla con los test unitarios o que presente problemas de sintaxis o en el estilo del código, necesitaremos instalar otras librerías que nos permitiran integrar **EsLint** con **Prettier** para ello ejecutaremos el siguiente comando:
    - `yarn add --dev prettier-eslint eslint-config-prettier eslint-plugin-prettier`
    
    la librería **eslint-plugin-prettier** nos permite integar **EsLint** con **Prettier** los cual permitirá utilizar **EsLint** para revisar el código en busca de errores y a **Prettier** para definir las reglas de estilo que debe cumplir el código del proyecto.

11. Para configurar **EsLint** ejecutamos el comnando:
         `yarn eslint --init` ó `npx eslint --init`

    y elegimos las opciones que mejor se ajusten al proyecto. En este ejemplo se seleccionron las opciones:

        - To check syntax only
        - CommonJS (require/exports)
        - None of these
        - No
        - Node
        - Yes
        - yarn

12. Luego en el fichero **.eslint.config.mjs** que se genera en la raíz del proyecto, agregamos al primer objeto del arreglo el atributo *ignores* y le asignamos un arreglo con los ficheros y directorios que no queremos que se revisen, tambien agregamos el atributo *rules* donde colocaremos las reglas para que debe cumplir el código para pasar la revisión satisfactoriamente.

13. Para configurar **Prettier** creamos 2 ficheros en la raíz del proyecto, el **.prettierrc** donde colocaremos todas las reglas y el **.prettierignore** en el cual le indicaremos los ficheros o directorios donde no se aplicaran las reglas. Un ejemplo de reglas son las siguientes:

            {
                "semi": true,           // Usa punto y coma al final de las líneas
                "singleQuote": true,    // Usa comillas simples en lugar de dobles
                "tabWidth": 2,          // Usa 2 espacios por nivel de sangría
                "trailingComma": "es5", // Coloca comas al final en objetos o arrays (solo en ES5), tambien se puede indicar el valor "all"
                "printWidth": 80,       // Limita las líneas a un máximo de 80 caracteres
                "bracketSpacing": true,  // Coloca espacios entre llaves en objetos

                "jsxBracketSameLine": false, // En JSX, pone el cierre de etiquetas `>` en una nueva línea (cuando es false), en lugar de estar en la misma línea que el último atributo.
                "bracketSameLine": false,     // En etiquetas multilineales de JSX, coloca `>` en una nueva línea (opción más reciente que reemplaza a jsxBracketSameLine).
                "arrowParens": 'avoid',   // Evita el uso de paréntesis en funciones de flecha que tienen un solo argumento, por ejemplo, `x => x` en lugar de `(x) => x`.
                "useTabs": true,         // Usa tabulaciones en lugar de espacios para la sangría.
                "endOfLine": "lf"      //Especifica el tipo de salto de línea que se utilizará en el código
            }

14. Creamos un fichero **.lintstagedrc** también en la raíz del proyecto y le agregamos el siguiente código para que arregle los errores de estilo que encuentre y luego vuelva a agregar el fichero corregido al stage:

{
  "*.{js,jsx,ts,tsx}": ["eslint --fix"]
}

15. Para configurar la librería **commitlint** y usar la configuración básica convencional, crearemos en la raíz de nuestro proyecto un archivo llamado **commitlint.conf.js** y escribiremos la siguiente linea:

    `module.exports = { extends: ['@commitlint/config-conventional'] };`

    en caso deestar en un proyecto donde se utilices los *import* y *export* la linea quedaria de la siguente forma:

    `export default { extends: ['@commitlint/config-conventional'] };`

    Esta línea utiliza un conjunto predefinido de reglas proporcionado por el paquete **@commitlint/config-conventional**. Este conjunto de reglas sigue la convención específica definida por el estándar de Angular. Las reglas convencionales son las siguientes:

    **chore:** Cambios en tareas, configuración, y otros aspectos relacionados con el mantenimiento del proyecto.
    **docs:** Cambios en la documentación.
    **feat:** Nuevas características.
    **fix:** Correcciones de errores.
    **style:** Cambios que no afectan el significado del código (espacios en blanco, formato, punto y coma que faltan, etc.).
    **test:** Añadir o modificar pruebas.
      
16. Para configurar **Husky** debemos ejecutar el siguiente comando:
    `yarn husky init` ó `npx husky init`
    
    Esto nos agregará el siguiente script a nuestro package.json:   `"prepare": "husky"`
    Además creará el directorio *.husky* en el cual estan los ficheros con los que trabajaremos para indicarle que hacer cuando se active cierto **Git Hook**

17. Por defecto el **Husky** trae configurado el hook *pre-commit* de Git para que ejecute los test, en nuestro caso indicaremos que primeramento haga una revision de la sintaxis de los ficheros que estan en el stage por lo que nuestro fichero *pre-commit* tendrá el siguiente código:

    `npx lint-staged`
    `yarn test`

18. Una vez configuradas las librerías necesarias ya podemos agregar los cambios al stage y hacer un commit. Esta acción desencadenará una serie de pruebas, revisiones de sintaxis y estilo impidiendo que se pueda hacer el commit si se detecta algun error, a menos que este sea de estilo de código y pueda ser corregido.