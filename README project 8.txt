# Esme Goral QA Sprint/project 8


Documents used as refernace:Server: https://cnt-099fb809-ac77-4654-8037-c94689773d77.containerhub.tripleten-services.com,DEVTOOLS and TRipleTen project Task guide + pages file.


Platforms used:
VSCode,
Firefox,
cmd command,
TripleTen project guide,
Server address + DevTools


Description of project-To write codes to check the functionality of Urban Routes by ordering a taxi and going through the steps of each prompt and writing them in createAnOrder.e2e.js file which is located in the test/specs folder.


Cloning to local drive and Installing :
Once the files has been cloned to your local device(use cmd platform and use code-git clone "http link from github").
open the folder hm08-qa-us,(keep this open you will use it alot) and go to the folder tests, then you will see  files listed. The ones we will use the most is wdio.config.js, helper.js,page.js and Folder tests/specs file CreatAnOrder.e2e.Right click on any file to open in Notepad and it opens and you will see tests codes make sure to hit file and save, this way it automatically saves it to your Vcode platform for easy access to view code.
Go back to the folder hm08-qa-us, navidagte to the top where the folder is located type cmd and the command promtpt will open or I choose to use Vcode as my platform.


Starting server line + Running the tests in Vcode:
Before we can run the files we need to start our server link,go to folder hm08-qa-us, and right click on file wdio.config.js and open with notepad. next deploy your server link at Tripleten platform copy link and paste the new link to the wdio.config.js and save. (you will keep doing this from time to time since the server will expire)


Running tests in vcode:
open Vcode download the folder hm08-qa-us, then files should of automatically download we need to WebDriverio with before we can run the tests use npm init--yes then npx wdio config and go ahead answer the questions. Then we need to install npm install wdio-intercept-service -D then we can run test with npm run wdio.
Now to run all files at the same time use code npm run wdio and all the files should pass;should give you 8 tests passed and 2 specs files passed.
I used "Firefox" as my sevrices as I could not get Chrome to work. If you have the same problem go to your wdio.config.js file scroll down to services:
since we already added the intercept we need to add "firefox" like so services: ['firefox-profile','intercept'], 
and hit save. I also changed my  capabilities in wdio.config.js file to "firefox" like so   capabilities: [{browserName: 'firefox'}],