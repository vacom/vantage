# VantageJS

This library is a set of utilities created in javascript to solve some of the common problems. These are some of the functions I write over my own projects and put them here to be reused in different scenarios and projects

![VantageJS](https://i.imgur.com/y9cs08b.jpg)

**IMPORTANTE NOTE!** This library is very much in the process of being developed, it can be changed completely to something different. For now it is only used to share common functions in my own projects. Suggestions are welcome.

## installation

Just install the dependency and start using

```javascript
npm i @vacom/vantage or yarn add @vacom/vantage
```

### How to import

After installing the dependency, just import the utility you need

```javascript
import { guid } from "@vacom/vantage";
```

## Utilities and Functions

### Number Utilities

#### random

This function returns a random number based on the minimum and a maximum number

```javascript
import { random } from "@vacom/vantage";

//default usage 0 - 10
random(); //output = 7

//usage min: 10 max: 100
random(min, max); //output = 85
```

#### guid

A string with random numbers is generated, this function can be useful for building dynamic ids

```javascript
import { guid } from "@vacom/vantage";

//usage
guid(); //output = cb727975d2314f15
```

### String Utilities

#### removeAccents

This function can be used to remove all accents. It can be useful for sensitive fields where only plain text is allowed.

```javascript
import { removeAccents } from "@vacom/vantage";

//usage string = "Flávio"
removeAccents(string); //output = Flavio
```

#### formatUsername

Useful function to validate the username field, in case this does the wrong way. It is useful for removing accents, spaces and uppercase letters.

```javascript
import { formatUsername } from "@vacom/vantage";

//usage string = "Flávio AJ Wéb"
formatUsername(string); //output = flavioajweb
```

#### handleExpression

Useful for validating expression, makes special characters not break the application. It can be useful for search fields or others.

```javascript
import { handleExpression } from "@vacom/vantage";

//usage example search field
let search = new RegExp(handleExpression(searchQuery));
```

#### capitalizeFirstLetter

Useful for placing the first letter in uppercase. It can be used in welcome situations to the user or texts.

```javascript
import { capitalizeFirstLetter } from "@vacom/vantage";

//usage string = "flavio"
capitalizeFirstLetter(string); //output = Flavio
```

#### validateEmail

Often the user does not correctly enter their email, this function validates this field. If the email is correct it returns true.

```javascript
import { validateEmail } from "@vacom/vantage";

//usage string = "john@mail.com"
validateEmail(string); //output = true

//usage string = "john@"
validateEmail(string); //output = false

//usage string = "john@mail"
validateEmail(string); //output = false
```

#### emailBlackList

Sometimes it is necessary to validate what type of email provider the user is registering, there are situations where these providers are temporary. This function allows you to create a bad list of mail providers where the email that is entered by the user is validated

```javascript
import { emailBlackList } from "@vacom/vantage";

//default usage email = "flavio@demo.com"
emailBlackList(email); //output = true

//default usage
//email = "flavio@gmail.com"
//list = ["demo", "mailinator", "maildrop"]
emailBlackList(email, list); //output = false
```

#### convertArrayOfObjectsToCSV

This function convert an array of data into the correct csv format

```javascript
import { convertArrayOfObjectsToCSV } from "@vacom/vantage";

//usage content = [{name: "John", email: "john@mail.com"}]
convertArrayOfObjectsToCSV({
  data: content
});
```

#### downloadCSV

This function uses the previous function to convert an array of data in the correct format of csv and then automatically downloads the file with the correct information to the user's machine

```javascript
import { downloadCSV } from "@vacom/vantage";

//usage
// this function uses convertArrayOfObjectsToCSV behind
// args = {  filename: "name.csv" }
// data = [{name: "John", email: "john@mail.com"}]
downloadCSV(args, data);
//output return and downloads the file
```

### Browser Utilities

#### refreshPage

This function refreshes the page, is useful for large changes, or when user logout

```javascript
import { refreshPage } from "@vacom/vantage";

//usage
refreshPage(); //output = page refresh
```

#### dynamicWidth

This function captures the width of the page, useful for placing dynamic sizes

```javascript
import { dynamicWidth } from "@vacom/vantage";

//usage
dynamicWidth(); //output = 960
```

#### getUrlParam

```javascript
import { getUrlParam } from  "@vacom/vantage";
This function through an url collects the data of a certain parameter
//usage string = "flavio"
getUrlParam("q", "https://dribbble.com/search?q=cards");
//output = cards
```
