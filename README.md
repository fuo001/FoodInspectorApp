# Food Inspector App

### README

**Description:**
Most food applications lack information about a food establishment’s health inspection records, overall cleanliness, and user-submitted food ratings. We hope to merge the food inspection data of food establishments in Prince George’s County with the overall data of food establishment in Prince George’s County from Yelp.

The purpose of this application is to reduce the number of options for a user, and as a result, prevent customer information overload during decision-making situations. When run, the application returns a list of health-code compliant restaurants which contribute to the user’s food preferences. The stakeholders associated with this application are the general public, food-distribution companies, restaurants, restaurant managers, and people who care about whether the food people are eating is healthy.

**Target Browsers:**
The Food Inspection Registry Application is targeted to be used on the following platforms:
* Android
* iOS
* Popular Web Browsers (Firefox, Chrome, Safari, Opera, and Internet Explorer). 

We want this application to be available and accessible to as many users as possible in as many ways as possible.  As of right now, the application is available through online browsers, but the long term goal is for there to be apps on the App Store and Google Play Store for this application.

**Link to our Heroku hosted [Food Inspector App](https://food-inspector.herokuapp.com/). Click to open.**

**Need Help? Click to acess our [User Manual](https://github.com/fuo001/FoodInspectorApp/docs/user.md/).**

**Want to see our Design Process? Click to access our [Final Report](https://github.com/fuo001/FoodInspectorApp/docs/final.md/).**

### DEVELOPER's MANUAL

**Installation:**

1. To install this application and have it running on a personal server, you need to download the repository folder.
2. Navigate to your saved file directory.
3. Run `npm install` inside that directory to make sure all dependencies are installed.
4. Run `npm start`. This will start up the server and enable you to see ongoing back-end traffic.
5. You should receive a prompt with the localhost port number. For example, `Example app listening on port 5500!`.
6. Navigate to your default Web Browser and type in your localhost port number, which in this case is `localhost: 5500`. 
7. You should then be able to see your web application with all the info on restaurants and whether they are in-compliance or not. 

**Running Tests:**

You can test the application on the server by opening the command line and looking at the data that is going through the back end as you select different categories and submit. You should be able to see the jsons of the data.

**API Endpoints & Purpose:**

The API for the application makes a **GET** request to the P.G. County Database and fetches data on Food Inspections for restaurant in the county. This data states what health codes restaurant in the are in compliance with and what they are not in compliance with. Another API that was used was a **POST** request to a database of hospitals in the county. And a PUT request was used to get finance data.

**Known Bugs:**
* The main bug that is was known of was having trouble getting a map to show up on the homepage to view the locations of different restaurants in relation to where the user is located.

**Future Development:**

Future plans for the application is to have it be available on all app stores, such as Apple’s App Store and Google Play Store. From a User Interface (UI) Designer's perspective, we want to make the web application look more sleeker and easier on the eyes. From a User Experiernce (UX) Designer's perespective, we want to make the application more accesible for everyone. This means either changing our design color palette or implementing a colorblind mode. Another great accesbiiltiy feature that we could implemenet is to provide voice-over commands to allow individuals with low motorskills or poor eyesight to fully interact and utilize with the application. 
