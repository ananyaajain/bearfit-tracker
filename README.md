# bearfit-tracker
wdb final project

Link to phase 1 doc: https://docs.google.com/document/d/1pl8iQpERKFyAAqWeZq99r5TpnHawT8G_u2W-d-rV6VQ/edit

Link to phase 2 doc: https://docs.google.com/document/d/17EmfaJ1_Z9VTIrWQV-xaZsra68nPPlNJzzT9zNjZz8U/edit

## Project Purpose:
Improve daily well-being & health. Attribute data & tangible trends to feelings & happiness. Track everyday routines to keep organized. Help Berkeley students improve themselves overall

## Organization
### Pages
 - Home Page: Title, button link
 - Log In: Email, Password
 - Dashboard: Stat summary, person card
   - Distance page, budget page, time spent page: pages to track distance travelled, time spent on various activities, various budget being spent
 - Mental Health Checkin page: Check in on how mental health is going
 - Contact us 

### Components
 - Menu component
 - Login component
 - Signup component
 - Dashboard
   - User card component
   - Time widget component
   - Distance widget component
   - Budget widget component
   - Mental Checkin widget component
 - Time page
   - Form input (with location) component
   - Time Spent visualization component
 - Distance page
   - Distance travelled visualization (based on time spent location calculation) component
 - Budget page
   - Spending dropdown component
   - Spending visualization component
   - Transaction component
 - Mental checkin page
   - Calendar component
   - Form input component
 - Contact Us component
 
 ## Routes Description
- The route '/' returns a simple string response "bearfit tracker".
- The route '/info/budget' returns a JSON object with spending information for the dates 3/18 to 3/24, along with spending totals for different categories such as Drinks/Food, Entertainment, and Health.
- The route '/info/time' returns a JSON object with time information for the dates 3/18 to 3/24, including time spent on family, friends, classes, extracurriculars, homework, and exercise, as well as time remaining for each category.
- The route '/info/distance' returns a JSON object with information on sleep, water intake, working time, calories burned, height, weight, and age.
- The route '/info/checkin' returns a JSON object with check-in information for the current month (April 2023), including the current date and mood, as well as mood data for each day of the month.




### Files
 - Auth.js
 - db.js
 - User.js



