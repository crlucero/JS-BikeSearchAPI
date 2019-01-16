# Haiku Checker 1_10_19

#### This website is an application that simulates a hair salon.

#### 

## Description
This program will allow a user to input what they think is a haiku and it will check if it is a valid haiku.

## Specs
#### Behavior: The program will check if the three inputs are strings.
* Example Input: "I have a dog", "3"
* Example Output: True, false
#### Behavior: The program will check if the three strings contain 5 syllables, 7 syllables, and 5 syllables respectively.
    * Example Input: Ode to Kenny Chan (5)
                    Your sarcasm is most fun (7)
                    It brightens my day (5)
* Example output: True OR if false - "This is not a valid haiku. 



## Setup/Installation Requirements to run program
* Clone repository $ git clone repo name
* Switch into the solution directory: $ cd HairSalon.Solution
* To edit, open in text editor
* To run program, navigate to HairSalon directory, run $ dotnet restore in terminal. 
* Start webpage by using $ dotnet run in terminal and following localhost:5000 link.

## Re-create my database and test database
In MySQL:
* CREATE DATABASE cristian_lucero;
* USE cristian_lucero;
* CREATE TABLE stylists (id serial PRIMARY KEY, name VARCHAR(255))
* CREATE TABLE clients(id serial PRIMARY KEY, name VARCHAR(255, int stylist_id)
* CREATE TABLE specialties(id serial PRIMARY KEY, name VARCHAR(255))
* CREAT TABLE stylists_specialties(id serial PRIMARY KEY, stylist_id INT(11), specialty_id INT (11))
## Replicate steps for test database.
In MySQL:
* CREATE DATABASE cristian_lucero_test;
* USE cristian_lucero_test;
* CREATE TABLE stylists (id serial PRIMARY KEY, name VARCHAR(255))
* CREATE TABLE clients(id serial PRIMARY KEY, name VARCHAR(255, int stylist_id)
* CREATE TABLE specialties(id serial PRIMARY KEY, name VARCHAR(255))
* CREAT TABLE stylists_specialties(id serial PRIMARY KEY, stylist_id INT(11), specialty_id INT (11))




## Known Bugs
The only encountered bug have to do with views of edit/delete client. Although both functions do work they bring the user to an error screen, but once you go back to the see the list of clients, the user can see that the client has either been deleted, or edited(whicher function was chosen).


## Support and contact details

For any quesitons contact me at: cristianjlucero32@gmail.com

## Technologies Used

* Misrosoft Testing Package
* C#
* .NET
* MySQL (database)
* Visual Studio Code (text editor)




### License

Copyright (c) 2018 Cristian Lucero

This website is licensed under the MIT license.