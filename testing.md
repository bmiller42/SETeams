#Running Ballzy App
##Linux Instructions
Assuming you have followed instructions on https://facebook.github.io/react-native/docs/getting-started.html#content
and installed react-native, android studio and created an emulation device then you would do the following.

If you have just cloned this git repository onto your computer for the first time you will need to initialize the BallzyApp folder as a react-native project. 

If you haven't cloned directory run the following command in your terminal
in your preferred directory.


```git clone https://github.com/bmiller42/SETeams```

1. navigate to SETeams/ directory
2. run command: 

This command will remove changes made to index js files and add it's own
code. When you run app basic welcome text will show up.

```react-native init BallzyApp```

I would suggest running the following command in BallzyApp directory instead 
to keep changes made to app.


```npm install```

Now your App directory will be recognized when you run the app.


Open up a terminal and go to the BallzyApp directory.
First off run avd manager by running the following command.


```android avd &```


Press enter to free up terminal.

Avd should start so choose your emulation device or create one.
Start the emulation device.
Make sure you are in the BallzyApp directory and then run the following.


```react-native start &```


Take note of the pid so you can kill the process later.
press enter again and then run the following


```react-native run-android```

You should see the app start up in the emulation device.

If you have a better process for running app on emulation device let me know.
