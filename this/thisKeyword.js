// method -> obj
// function -> global(window, global)

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => console.log(this.title, tag));
  },
};

// video.stop = function () {
//   console.log(this);
// };
// video.play();

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// const v = new Video("b")

video.showTags();
