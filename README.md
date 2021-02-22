# Chat PuntoCom

_This app have  funtionalities like Login user to the system, using JWT for security and protect routes with a token, register user, and persons management_

_Still pendient the module to send messages between users already created (On Construction)_



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

_Make sure that Maven have been selected as dependency manager_

_5. Once imported is complete, you have to navigate to the file: "\BACK\chat\src\main\resources\application.properties" and uncomment those lines:_

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

_6. Now navigate to the file: "\BACK\chat\src\main\java\com\puntocom\chat\security\util\CreateRoles.java" and uncomment those lines:_


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
_This allow us to create tables on the first run, and load role data for role table_

_7. Configure the conection parameters with postGres, username, dbname in the archive: "\BACK\chat\src\main\resources\application.properties"_

_8. Compile and run the project_

_9. Comment the code that you have commented previusly on steps 5 and 6_

_This is for the structure and data on the database dont disapear if you like to run the project again_

_10. In the database, create a register in the table Persona (to test edit, delete a register) or you can create one on the typing the route http://localhost:4200/nueva_ once you have logged on, it will be appear the persona register form to test it.


_11. Open VSCode or any other editor_

_12. Open the folder of the FrontEnd: /FRONT/_

_13. Open cmd console in the folder: /FRONT/ as main route_

_14. Then run the comand:_

```
        npm install
```

_It will be install the node modules to run angular project_

_15. Once you have installed node_modules, run the command:_

```
        npx ng server -o
```
_Angular App is up on localhost, port 4200_

_16. Now you can test, create user, login, and edit persons_



## Built With 🛠️

* [Angular](https://angular.io/) - FrontEnd Framework
* [Spring](https://spring.io/) - Backend Framework
* [Maven](https://maven.apache.org/) - Dependency Manager
* [JWT](https://jwt.io/) - Used for login users and security
* [Bootstrap](https://getbootstrap.com/) - CSS Styling
* [JQuery](https://jquery.com/) - Installed with bootstrap




## Author ✒️

_Luis G. Bohren H_

_Thanks to diferents persons, that upload info to learn Angular, like videos, exercises, examples and other util stuff_
