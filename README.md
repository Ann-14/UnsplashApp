# Readme - Vueling Hackathon

This challenge belongs to the Vueling Tech Hack. In this challenge we are asked to make an application where Unsplash images are viewed, for which we will have to merge the Unsplash API with our website.

## Installation
```bash
npm start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.


## Technologies

 - React JS
- React Icons
- Tailwind CSS

## Application structure
The application is divided into four different components that communicate with each other through props:
 - The PhotoCard component contains the information and style of each photo that appears on the main page layout.
 - The form component contains the form that allows the search for specific photographs by the user through a text input.
- The Button component triggers the submission of the form.
- The loader component contains a loading spinner that appears when you are fetching the images.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)