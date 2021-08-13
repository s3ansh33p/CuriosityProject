## About

This project is apart of my Curiosity Prooject from the WesleyNEXT course.
I have decided to develop a LMS to track the 7Cs in Wesley.

[Planning document](tba)


## Authors

- [@s3ansh33p](https://www.github.com/s3ansh33p)

  
## Demo

https://curiosity.seanmcginty.space

  
## Documentation

[Documentation (generated with JSDoc)](https://curiosity.seanmcginty.space/docs)

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MYSQL_HOST` - localhost

`MYSQL_DATABASE` - csc

`MYSQL_USERNAME` - root

`MYSQL_PASSWORD` - pass

`ENC_KEY` - crypto.randomBytes(16).toString('hex')

`ENC_IV` - crypto.randomBytes(16).toString('hex')

`EXPRESS_PORT` - 3000

`WS_PORT` - 8999

`NODE_ENV` - development


  
## Features

- Light/dark mode toggle
- Cross platform

  
## Feedback

If you have any feedback, please reach out to me at newfolderlocation@gmail.com

  
## License

[GPL v3.0](https://choosealicense.com/licenses/gpl-3.0/)

## Optimizations

- TBA

## Roadmap

- Add color bar charts in the reports

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/s3ansh33p/CuriosityProject.git
```

Go to the project directory

```bash
  cd CuriosityProject
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Note: I am running this on Linux RHEL 8 + NGINX so make sure that you have ssl configured if you are using the example .conf files. You can use certbot to get the letsencrypt certs.
```bash
  certbot certonly -d yourwebsite
  certbot certonly -d socket.yourwebsite
```

  
## Tech Stack

**Client:** Bootstrap

**Server:** Node, Express, MySQL, NGINX

**Languages:** HTML, CSS, SCSS, JS, EJS, SQL

