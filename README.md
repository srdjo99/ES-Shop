# E-commerce shop - NextJS 

## About
The project I dedicated the most of my free time to is ES-Shop, an online e-commerce platform that served as my primary practice project.
Major functionalities are finished, but it still needs some "polishing".
It is deployed on DigitalOcean Droplet.

### [Shop - link](https://sbio.online/)

There are 2 roles: admin and client. If you want to see admin features, here are credentials for test admin account:
  ``` 
      email: srdjan@gmail.com 
      password: 123456
  ```
To sign-in as a client, you can use Github sign-in option.
  
## As an admin, you have access to more features as you will see.

I've used:
  - MongoDb to store data
  - Context API for state management
  - SWR
  - MUI 
  - NextAuth ( I will probably migrate to clerk )
  - Paypal
  - Cloudinary for images
  - Bcrypt
  - Axios
  - etc...


 ## To run it locally, database is necessary

```
docker-compose up -d
```
- MongoDB Local URL:
```
mongodb://localhost:27017/shopdb
``` 
### `yarn install`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### You can populate database with test information:
```
  http://localhost:3000/api/seed
```
