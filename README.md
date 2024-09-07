## Description

The Perfil Card Generator is an application that allows users to generate custom cards for the card game called Perfil. It leverages the OpenAI API to generate unique and personalized cards. The software will generate a random card with 20 random tips to help the player guess the answers.

## Features

The Perfil Card Generator offers the following features:

- Easy-to-use interface for generating cards
- Integration with OpenAI API for card generation

With just one endpoint, the software allows users to generate random and unique card data using the power of OpenAI.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/perfil-card-generator.git`
2. Install the required dependencies: `npm install`
3. Set up your OpenAI API credentials in OPENAI_API_KEY env variable
4. Start the application: `npm start`

## Usage

To use the Perfil Card Generator application, follow these steps:

1. Make a POST request to the `/card` endpoint of the API.
2. The API will generate a random card and return it in the response.
3. Use the returned card data to display the generated card in your application.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/perfil-card-generator).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
