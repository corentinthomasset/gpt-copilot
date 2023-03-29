# GPT Copilot

GPT Copilot is a Google Chrome extension that allows users to invoke Chat GPT from any web input field. The extension has been built using Vite and crxjs.dev and leverages the power of the openapi API to provide seamless chatbot assistance to users. 

This extension was built as an cyber innovation day project.

## Installation

To install GPT Copilot, follow the steps below:

1. Clone this repository to your local machine.
2. Navigate to the project directory (`cd gpt-copilot`).
2. Add you Open AI Org ID and API key in `.env`: `VITE_OPENAI_ORG_ID` and `VITE_OPENAI_API_KEY`
3. Install the project dependencies using `npm install`.
4. Build the project using `npm run build`.
5. Navigate to [chrome://extensions/](chrome://extensions/) in your Chrome browser.
6. Enable the "Developer mode" toggle on the top right corner.
7. Click on "Load unpacked" and select the `dist` folder within the project directory.

That's it! GPT Copilot is now installed and ready to use.

## Usage

To use GPT Copilot, simply type in any text field on a webpage. Invoke the Chat GPT by typing `@gpt ` at the end of the text input. Chat GPT will then generate a conversation response based on the text inputted into the field.


## Technology Stack

This extension has been built using modern technology stack, including:

- Vite -  A flexible and fast build tool that makes developing and debugging your environments faster
- crxjs.dev - A JavaScript library for building browser extensions
- OpenAI API - A natural language processing engine that can generate human-like responses to inputted text

## Contributing

Contributions are welcome to help improve the functionality of the GPT Copilot Chrome Extension. To contribute, please submit a pull request with a detailed explanation of the proposed changes and why you think they would be beneficial.:

1. Create a fork of this repository.
2. Create a branch for your feature (`git checkout -b my-feature`).
3. Make your changes and commit them (`git commit -am 'Add my feature'`).
4. Push your changes to your fork (`git push origin my-feature`).
5. Open a pull request and describe your changes.