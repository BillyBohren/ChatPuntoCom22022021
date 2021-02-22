# Chat PuntoCom

_This app must have _



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

_4. Now, open IntelliJ IDEA IDE, and select Import Project, then select the folder 'BACK/chat', then continue with the process of importing the project with intelliJ. _

_5. Now, open IntelliJ IDEA IDE, and select Import Project, then select the folder 'BACK/chat', then continue with the process of importing the project with intelliJ. _

_   *Make sure that Maven have been selected as dependency manager _

_6. Once imported is complete, you have to navigate to the file: "\BACK\chat\src\main\resources\application.properties" and uncomment those lines: _

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

_7. Now navigate to the file: "\BACK\chat\src\main\java\com\puntocom\chat\security\util\CreateRoles.java" and uncomment those lines: _


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



_8. Compile and run the project _

_9. Comment the code that you have commented previusly on steps 6 and 7 _

_   *This is for the structure and data on the database dont disapear if you like to run the project again _

## Built With 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS



