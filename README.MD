### CA2 - Mobile App 2 ###
## Lucas Bandeira - 23884 ##

The objective of this project is to develop a cloud connected mobile app to collect and upload accelerometer data and display a leaderboard. The requirements are as follows and both requirements carry equal weightage:

 ### Authenticate using Firebase1, upload data to Firestore ###

- [x] Sign up using StudentID@student.dorset-college.ie (as email) and a password
- [x] After sign up, collect and update details such as name, course, year in Firestore > StudentID, allow editing these details later
- [x] Collect and store locally 1000 accelerometer data points
- [x] Once 1000 data points are collected, upload to Firestore under: Users > StudentID > accelerometer_data
- [x] Repeat 3 and 4 as long as the app is open and is in the foreground (Don't record when minimised)
## Display Leaderboard ##
- [ ] Retrieve accelerometer_data of all users and calculate movement score2 for each user
- [ ] If accelerometer_data is unavailable or not in correct format or has more than 1000 data points, show score "N/A".
- [ ] Show recycler view to display leaderboard with columns rank, name and score (use score for ranking)
- [ ] Refresh every minute, show information: last refreshed (in time ago format3), and refreshing in x seconds
- [ ] Show details of user when clicked in full screen, allow going back to leaderboard
Data Upload Format Example:

In Firestore: Users > StudentID >

name: "Full Name"
course: "BSc Computer Science"
year: 3
accelerometer_data: [{x: float, y: float, z: float}, {x: float, y: float, z: float}, ...upto a max of 1000 datapoints]
Note:

1 To prevent unintended errors in the shared firestore, you should start development with your own firebase configuration and make sure everything works. Once everything works error free, then you can use the common firebase config (check files attached below) and the app will automatically use the same firestore and firebase auth. For your convenience, FirebaseTest app is attached below. Run and check the logs to see if you can successfully access the common Firebase.

2 Calculating activity score in Kcal is a complex function, use this formula instead:

movement score = Σ(Σ|x| + Σ|y| + Σ|z|)/n

where,

n is the number of data points (1000 in this project)
(x, y, z) is one accelerometer data point
3 Feel free to use your own function or an external open source library to convert timestamp to time ago format

### References ###

[Firebase](https://docs.expo.dev/guides/using-firebase/)
[React native navigation](https://reactnavigation.org/docs/getting-started/)
[Firestore - adding data](https://firebase.google.com/docs/firestore/manage-data/add-data)
[Accelerometer-sensors](https://docs.expo.dev/versions/latest/sdk/accelerometer/#accelerometer--methods)
[Firebase - User authentication](https://www.youtube.com/watch?v=ql4J6SpLXZA)

## Youtube link ##

[ScreenCast video](https://www.youtube.com/watch?v=TtqD6TVpMCw)