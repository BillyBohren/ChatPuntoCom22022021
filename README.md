# Chat PuntoCom

_This app have  funtionalities like Login user to the system, using JWT for security and protect routes with a token, register user, and persons management _

_Still pendient the module to send messages between users already created (On Construction) _



### Pre-requeriments 📋

_Have Installed Postgres Database_

_Have Installed InteliJ Idea_

_Have Installed Visual Studio Code or any other_

_Have Installed NodeJS_

_Have Installed JAVA 1.8 and correctly configured_

### Installation 🔧

_1. Select a folder in your system, and open cmd console from that route_

_2. Clone the project into that folder_

_3. Open PGAdmind, and create a Database called chat-db_

_4. Now, open IntelliJ IDEA IDE, and select Import Project, then select the folder 'BACK/chat', then continue with the process of importing the project with intelliJ_

_5. Now, open IntelliJ IDEA IDE, and select Import Project, then select the folder 'BACK/chat', then continue with the process of importing the project with intelliJ_

_   *Make sure that Maven have been selected as dependency manager_

_6. Once imported is complete, you have to navigate to the file: "\BACK\chat\src\main\resources\application.properties" and uncomment those lines:_

```
#spring.jpa.generate-ddl=true
#spring.jpa.hibernate.ddl-auto=create
#spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true
```

_It will be like this:_
```
spring.jpa.generate-ddl=true
spring.jpa.hibernate.ddl-auto=create
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true
```

_7. Now navigate to the file: "\BACK\chat\src\main\java\com\puntocom\chat\security\util\CreateRoles.java" and uncomment those lines:_


```
      /*Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
        Rol rolUser = new Rol(RolNombre.ROLE_USER);
        rolService.save(rolAdmin);
        rolService.save(rolUser);*/
```

_It will be like this_

```
        Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
        Rol rolUser = new Rol(RolNombre.ROLE_USER);
        rolService.save(rolAdmin);
        rolService.save(rolUser);
```
_   *This allow us to create tables on the first run, and load role data for role table_

_8. Configure the conection parameters with postGres, username, dbname in the archive: "\BACK\chat\src\main\resources\application.properties" _

_9. Compile and run the project _

_10. Comment the code that you have commented previusly on steps 6 and 7 _

_   *This is for the structure and data on the database dont disapear if you like to run the project again _

_11. In the database, create a register in the table Persona (to test edit, delete a register)_


_12. Open VSCode or any other editor_

_13. Open the folder of the FrontEnd: /FRONT/_

_14. Open cmd console in the folder: /FRONT/ as main route_

_15. Then run the comand:_

```
        npm install
```

_*It will be install the node modules to run angular project_

_16. Once you have installed node_modules, run the command:_

```
        npx ng server -o
```
_   *Angular App is up on localhost, port 4200_

_17. Now you can test, create user, login, and edit persons_



## Built With 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS



