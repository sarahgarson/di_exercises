// Instructions

// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

//1. Create a class named Video. The class should be constructed with the following parameters:

//a. title (a string)
//b. uploader (a string, the person who uploaded it)
//c. time (a number, the duration of the video - in seconds)

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  //2. Create a method called watch() which displays a string as follows:
  // “uploader parameter watched all time parameter of title parameter!”

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
  }
}

//3. Instantiate a new Video instance and call the watch() method.

let video1 = new Video("how to cook", "Sarah", 120);
video1.watch();

//4. Instantiate a second Video instance with different values.

let video2 = new Video("Classes in JS", "Dana", 240);
video2.watch();

//5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)

const videoData = [
  { title: "how to cook", uploader: "Sarah", time: 120 },
  { title: "Classes in JS", uploader: "Dana", time: 240 },
  { title: "Travel Vlog", uploader: "Alex", time: 300 },
  { title: "Workout Routine", uploader: "Chris", time: 180 },
  { title: "Guitar Tutorial", uploader: "Sam", time: 210 },
];

// Think of the best data structure to save this information within the array.

const videos = [];

//6. Bonus: Loop through the array to instantiate those instances.

for (let data of videoData) {
  const video = new Video(data.title, data.uploader, data.time);
  videos.push(video);
  video.watch();
}
