# @nine_tails9/vuemodelgenerator
![npm](https://img.shields.io/badge/npm-1.1.1-blue.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

This tiny npm package let's you generate Vue Model Template to get started with your work.
Package includes basic primitives to boost your work. Primitives include basics like Button, Input Text, Input Email,
Checkboxes, searchable dropdowns and much more. 

## Installation


```
    npm i @nine_tails9/vuemodelgenerator
```

Then import globalcomponents in your Main.js 
## Usage
#### Format
```
    dg-vmg Ouput Input Path
```
Ouput is the name of model to be generated, Input is input Js file exporting an object contaning Model details.
Path is output path of file.
#### Example
```
    dg-vmg User './ff.js' './'
```
This command will generate User.vue in root directory using model from file 'ff.js' located in **bin**
directory.


#### Screenshots
##### Example Input File
![ScreenShots](https://i.ibb.co/XjdR8Jw/Screenshot-12.png "Example Input File")
##### Example Output File
![ScreenShots](https://i.ibb.co/qyRrVbk/Screenshot-13.png "Example Ouput File")


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://github.com/nine-tails9/npm-VueGenerator/blob/master/LICENSE)
