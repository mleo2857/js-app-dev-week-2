var slideshow = {
  photoList : ['family','vacation','party','trip','car','graduation','birthday'],

  currentPhotoIndex : 0,

  nextPhoto: function(){
    if (this.currentPhotoIndex === this.photoList.length - 1){
      console.log('End of slideshow');
    } else {
      this.currentPhotoIndex += 1;
      console.log(this.photoList[this.currentPhotoIndex]);
    }
  },

  prevPhoto: function(){
    if (this.currentPhotoIndex === 0){
      console.log('End of slideshow');
    } else {
      this.currentPhotoIndex -= 1;
      console.log(this.photoList[this.currentPhotoIndex]);
    }
  },

  getCurrentPhoto: function(){
    return this.photoList[this.currentPhotoIndex];
  }
}

// console.log(slideshow);
// console.log(slideshow.photoList);
// console.log(slideshow.currentPhotoIndex);

// slideshow.nextPhoto();
// slideshow.prevPhoto();
// slideshow.getCurrentPhoto();
// slideshow.prevPhoto();

var i = slideshow.currentPhotoIndex;

console.log(slideshow.getCurrentPhoto());
for (i; i < slideshow.photoList.length; i++){
  slideshow.nextPhoto();
}

//console.log(slideshow.getCurrentPhoto());
console.log('');
console.log(slideshow.getCurrentPhoto());
for (i; i > 0; i--){
  slideshow.prevPhoto();
}
