# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

I used  [Moment.js](https://momentjs.com/) library to be able to work with date and time.
## User Story
This schedule was made to help organize someone with a busy scehdule. They'll be able to  add important events to this planner. So they can manage their time more effectively.

## Acceptance Criteria

```
The user will be able to use a daily planner to create a schedule
WHEN you open the planner the current day is displayed at the top of the calendar
WHEN scrolling down
THEN user will be presented with timeblocks for standard business hours
WHEN user view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN user clicks into a timeblock
THEN user can enter an event
WHEN user click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN user refreshes the page
THEN the saved events exist.
```

