 var SlideDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;
SlideDancer.prototype.step = function(){
  // debugger;
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  var that = this;
  this.$node.css({
    "border-color": "purple"
  });
  var slide = function(){
    that.$node.animate({
    left: "+=50"
    }, that.timeBetweenSteps/2 , slideBack);
  }
  var slideBack = function(){
    that.$node.animate({
    left: "-=50"
    }, that.timeBetweenSteps/2);
  }
  slide();
};
