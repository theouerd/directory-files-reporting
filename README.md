A `README.md` file is a markdown file that provides an overview of the project, its purpose, how to use it, and any other relevant information. Below is an example `README.md` file for the Directory Files Reporting project:

```
# Directory Files Reporting

A Node.js script to generate an Excel report of files in a specified directory. The script creates separate sheets for each file extension type and a summary sheet with general details about the directory.

## Features

- Generates an Excel report for the specified directory.
- Creates a separate sheet for each file extension type.
- Includes a summary sheet with general details about the directory.
- Outputs the report in a 'reporting' folder in the root of the project structure.
- Calculates the execution time and displays it in the console.

## Installation

1. Clone the repository or download the source files.
2. Navigate to the project folder in your terminal.
3. Run the following command to install the required dependencies:

```bash
npm install
```

## Usage

1. Open the `package.json` file and update the `start` script with the directory path you want to analyze:

```json
"scripts": {
  "start": "node index.js ./your_directory_path"
},
```

Replace `./your_directory_path` with the actual directory path.

2. Save the changes to the `package.json` file.
3. In the terminal, run the following command to execute the script:

```bash
npm start
```

The script will analyze the specified directory and generate a report in the `reporting` folder.

## Dependencies

- [fs-extra](https://www.npmjs.com/package/fs-extra) - File system methods that aren't included in the native `fs` module.
- [xlsx](https://www.npmjs.com/package/xlsx) - A library for parsing and writing Excel files.
- [chalk](https://www.npmjs.com/package/chalk) - A library for terminal string styling.

## License

This project is licensed under the MIT License.
