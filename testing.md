#
unning Ballzy App
##Linux Instructions
Assuming you have followed instructions on https://facebook.github.io/react-native/docs/getting-started.html#content
and installed react-native, android studio and created an emulation device then you would do the following.

If you want to make a new react-native project just for testing purposes use the following command without the brackets

```react-native init <directoryName>```

-----------------------------------------------------------

Clone the current Ballzy App code into your current directory

```git clone https://github.com/bmiller42/SETeams```

If you have just cloned this git repository for the first time you will need to initialize the BallzyApp folder as a react-native project. 

1. navigate to SETeams/BallzyApp
2. run the follwing command: ```npm install```


Now your BallzyApp directory will be recognized when you run the app.

Open up a terminal and go to the BallzyApp directory.

First off run avd manager by running the following command.


```android avd &```


Press enter to free up terminal.

Avd should start so choose your emulation device or create one.

Start the emulation device.

Make sure you are in the BallzyApp directory and then run the following.


```react-native start &```


Take note of the pid so you can kill the process later.

Press enter again and then run the following


```react-native run-android```

You should see the app start up in the emulation device.

If you update code pressing r twice quickly on your keyboard while emulator is selected will 
update the app.

If you have a better process for running app on emulation device let me know.


npm i react-native-flux --save
npm install --save react-native-sqlite-storage

I followed the instructions for Android here: https://github.com/andpor/react-native-sqlite-storage
