 ***
##   POC for the [SNY.TV](https://www.sny.tv/) site   
###### Author: Sandra Castro B      
###### Famework: WebdriverIo
###### Assertions: Built-in assertions provided by wdIO. (https://webdriver.io/docs/api/expect-webdriverio)
###### Node Version: v16.13.2

## Get started
- Install dependencies:
`npm install`
- You need to have JDK Installed due to we user Selenium Standalone Service. Run `java -version` to verify it.
- Run All tests:
`npx wdio` it runs the project in PROD environment by default
- Run specific test:
`npx wdio --spec /test/specs/login.test.js`

## The report
* I setup Allure as an option of Reporter. 
`npm install @wdio/allure-reporter --save-dev`
I setup *Allure Commandline* to generate reports automaticly after end the execution.
`npm install -g allure-commandline --save-dev`
* To see the report generated before with Allure, execute the following. 
`npx allure open`, execute Command + C to exit.

##  Environment VARS
* I set 4 environment vars, to manage in which environment we want to run the test if PROD=Production, DEV=Sevelopment, QA=Stage. To easy use this vars, I use the dotenv module that loads the environment variables from a .env file into process.env (node env vars).
* Install dotenv `npm install dotenv --save`

**Run the Project for an specific ENV**
* By default the selected environment is PROD.
* **Run in Dev:** `ENVSEL=DEV npx wdio`
* **Run in Stage:** `ENVSEL=STAGE npx wdio`
* **Run in Prod:** `ENVSEL=PROD npx wdio` or `ENVSEL=[anyword] npx wdio` or `npx wdio`


#### Folder Structure
- **Test:** This contains the Specs folder and others
- **Pages:** All the pages objects is going to be here, this folder is under test folder
- **Data:** An kind of data test goes here, this folder is under test folder

- Plugins installed


Escalabilidad: Que cuando crezca el framework, no se vuelva más complejo sino que logre adaptarse a esos cambios, paralelismo y ejecución.

- Buena arquitectura con patrones de diseño y desarrollo para poder hacer manejo de lógica y clases.
 POM

- Multibrowser: Que permita la ejecución sobre varios navegadores

- Manejo de ambientes.

Reporte: Esto es super importante porque necesitamos una forma de expresar los resultados en calidad.

Y por último que sea fácil de implementar


DILPREET
There was an issue with selenium standalone with chrome but that got resolved now. Try to update the selenium standalone version to the latest and remove your node_modules and package-lock.json and do npm install again.

Fyi this is the issue I am referring to - https://github.com/webdriverio/webdriverio/issues/8282