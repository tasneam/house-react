# House Hunting Project 
house-hunting that facilitates to access and rent available homes

## Live demo :tv: 
---------


## Main problem 
Most of those who want to search for a home find it very difficult to find what suits them at a price commensurate with their capabilities.

## Solution :bulb:
Create an application that displays many homes to make it easier for the user to search for a house for sale or rent.

## User Stories :open_book:
***As a renter and rented user:***
* I can Sign up into the app 
* I can log in into the app 
* I can see all available houses to rent
* I can see specific information about any house
* I want to search by different locations, prices and the number of room in the house
* I can add houses to my favourite list
* I need to create my own profile
* I need control panel to manage my houses

## User Journey :airplane:

As a user, I can see all available houses that able to rent, search to find houses and I can add any liked house to my favorite list and see the differences between two houses from my favorite list, inside my profile I have my information and control panel for my own houses available to rent.


## Prototype :art:
[Figma Link](https://www.figma.com/file/ikAAUREYQFA0GXxGEUYZRf/home-hunting?node-id=92%3A240)
![prototype](https://i.imgur.com/wfKGoIT.png)


## DATABASE Schema :file_cabinet:
[dbdigram](https://dbdiagram.io/d/5ee9bcf79ea313663b3aa9ed)
![dbimage](https://i.imgur.com/1lve6is.png)

## Installation Guide :

1. Clone this repo.
2. Navigate to the cloned repo.

### Database Setup

1. If you have pgcli skip this step.

   - Install PostgreSQL database
   - Along side with pgcli
   - [instructions on how to install pgcli](https://www.pgcli.com/install)

2. Open your terminal, run pgcli, navigate through the project to this path: `./server/database/config/build.sql`

3. Copy this file path and write in the terminal:

```
    \i <paste your copied path to the file>
```

4. build the dummy data by using this command:

```
    npm run build:db
```

### Project setup

1. Create a `.env` file in the project root folder.
2. Add the following in it **This step is so important!!**

```
SECRET_KEY=AB#%&HD

DATABASE_URL=postgres://team2:0000@localhost:5432/househunting

DEV_DB_URL=postgres://team2:123456@localhost:5432/househunting_dev

TEST_DB_URL=postgres://team2:123456@localhost:5432/househunting_test

```

3. To install the dependencies, run this command only for the first time:

```
    npm i
```

### Running the project:

1. To run the server, Open your terminal and run:

```
    npm run dev
```

2. To run the React Development server, Open another terminal and run:

```
    npm run client
```

3. To run the tests:

```
    npm test
```

## Technologies :computer:

#### Front-end Technology:

- ReactJS (Hooks).
- Material UI
- UnDraw

#### Back-end Technology:

- Node JS
- Express.

#### Database Technology:
- PostgreSQL.

## Stretch Goals :goal_net:
* The users can complete the contract and rent the apartment
* user can see the location of the house on the map and compare between two houses
* user can see related houses according to a specific area on the map
* create an admin dashboard
    * admin can view, edit, delete all users 
    * admin can view, edit, delete all houses 
* create chat that allows users to contact and negotiate


## team

### Lead Mentor :sunglasses:
* Mariam Isa

### Team Members :busts_in_silhouette:
* Yasmeen Attallah 
* Adham Haisami
* Muhammed Abadsa 


## Resources :mag:
* https://cloudinary.com/documentation/developer_overview
* https://material-ui.com/
