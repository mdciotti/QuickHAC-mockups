# QuickHAC Version 3.0 Mockups

Please refer to http://github.com/xsznix/hacacess for the QuickHAC project.

This repository contains the design mockups for the upcoming version 3.0 of QuickHAC.

Please keep in mind that because this is for a Chrome extension, only Chrome is supported. Layouts will most likely be broken in other browsers.

## Installation

You will need to run `bower install` in order to install all dependencies. This means you need [Bower](http://bower.io).

## Usage

Open up `dist/index.html` in Chrome.

To build scripts, run `make scripts`.

To build templates, run `make templates`.

To build styles, run `make styles`.

To build everything, run `make all`.

## To Do

* Dashboard
* Year at a Glance
* Preferences
* Add student menu
* Exam/semester grades?
* Cycle switching (tabs in course detail view?)
* GPA calculations page
* Lock screen
* Grade conditional formatting
* Grade change indicators
* Grade editing
* Icon
* Mobile mockups
* Homepage
* Trends
* Print style
* Keyboard shortcuts
* Change pixel font sizes to em
* Use variables for layout
* Investigate standalone chrome app

## Done

* Login screen
* Student switching menu
* Course grades
* General layout
* Templates (DustJS)
* Basic framework (router)

## Ideas 

* Pull to refresh (mobile)
* Pin (freeze) course grade edits
* Preview sample student in browser (without downloading extension, requires Chrome)
* Grade "watchdog" --- catches numerous missing grades or low/failed assessments, alerts the user
* Allow users to set goals for each course, can show progress towards goal and how individual grades affect achieving that goal


## Things Users Would Like to See Improved

- "Maybe a notifications chart, sometimes i dont get the notification and i dont know what changed"
- "When u click the icon it pops out. When you click it again it should dissapear. not just refresh another popout"
- "Standalone app rather than a chrome extension"
- "Also, comparison to other quickhacers who make their grades "public" (or comparison to the average)"
- "Maybe also add in a feature to check attendance. Then it would make actually going to HAC superfluous."
- "Ability to permanently change my grades"
- "If possible, a notification for when a new grade is entered even if it doesn't change a grade average"
- "Possibly GPA calculation"
- "I would like to see what assignment made my grade change when I get a notification."
- "Grades table looks too busy/cramped. Also the grade cells don't have the same width (Semester averages)"
