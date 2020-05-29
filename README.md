# Movie Searcher


<p align="center">
    <a href="https://app.netlify.com/sites/dazzling-feynman-b3e6e4/deploys">
        <img src="https://api.netlify.com/api/v1/badges/84d00651-4036-4456-858d-66a8d8fe75a7/deploy-status" alt="Netlify" />
    </a>
    <a href="https://github.com/yagoernandes">
        <img src="https://img.shields.io/badge/Author-YagoErnandes-brightgreen" alt="Author" />
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/languages/count/YagoErnandes/movie-searcher?color=brightgreen" alt="Languages" />
    </a>
    <a href="https://twitter.com/intent/follow?screen_name=yagoernandes">
        <img src="https://img.shields.io/twitter/follow/yagoernandes?style=social&logo=twitter"
            alt="follow on Twitter">
    </a>
</p>

##### Made with [Yago's Template](https://github.com/yagoernandes/template-react)

## Instructions

First, you need a valid API key of the [TheMovieDB.org](https://www.themoviedb.org/), you can create one [here](https://www.themoviedb.org/settings/api).

Clone the project from github:

```shell
git clone https://github.com/yagoernandes/movie-searcher
cd movie-searcher
```

You can run the project using docker:

```shell
docker build -t movie-searcher .
docker run -p 80:80 -e REACT_APP_API_TOKEN=TOKEN movie-searcher
```

Or you can run the project directly from node:

Copy the `.env.example` file into `.env`

```shell
cp .env.example .env
```

Put the API created on specific field (`REACT_APP_API_TOKEN`)

Install dependencies:

```shell
yarn
# or
npm i
```

Start the application:

```shell
yarn start
# or
npm start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

<p align="center">
Made with :heart: by <a href="https://www.linkedin.com/in/yagoernandes">YagoErnandes</a>
</p>
