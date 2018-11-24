# VantageJS

This library is a set of utilities created in javascript to solve some of the common problems. These are some of the functions I write over my own projects and put them here to be reused in different scenarios and projects

PS. This library is very much in the process of being developed, it can be changed completely to something different. For now it is only used to share common functions in my own projects. Suggestions are welcome.

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

```javascript
import { random } from "@vacom/vantage";

//default usage 0 - 10
random(); //output = 7

//usage min: 10 max: 100
random(min, max); //output = 85
```

#### guid

```javascript
import { guid } from "@vacom/vantage";

//usage
guid(); //output = cb727975d2314f15
```

#### generateExpiration

```javascript
import { generateExpiration } from "@vacom/vantage";

//usage
generateExpiration(); //output = 2018-11-24T15:08:37.534Z
```

### String Utilities

#### removeAccents

```javascript
import { removeAccents } from "@vacom/vantage";

//usage string = "Flávio"
removeAccents(string); //output = Flavio
```

#### formatUsername

```javascript
import { formatUsername } from "@vacom/vantage";

//usage string = "Flávio AJ Wéb"
formatUsername(string); //output = flavioajweb
```

#### handleExpression

#### capitalizeFirstLetter

```javascript
import { capitalizeFirstLetter } from "@vacom/vantage";

//usage string = "flavio"
capitalizeFirstLetter(string); //output = flavio
```

#### validateEmail

```javascript
import { capitalizeFirstLetter } from "@vacom/vantage";

//usage string = "john@mail.com"
validateEmail(string); //output = true

//usage string = "john@"
validateEmail(string); //output = false

//usage string = "john@mail"
validateEmail(string); //output = false
```

#### emailBlackList

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

#### downloadCSV

### Browser Utilities

#### refreshPage

```javascript
import { refreshPage } from "@vacom/vantage";

//usage
refreshPage(); //output = page refresh
```

#### dynamicWidth

```javascript
import { dynamicWidth } from "@vacom/vantage";

//usage
dynamicWidth(); //output = 960
```

#### getUrlParam

```javascript
import { getUrlParam } from "@vacom/vantage";

//usage string = "flavio"
getUrlParam("q", "https://dribbble.com/search?q=cards");
//output = cards
```
