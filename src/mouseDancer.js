 var MouseDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.css({
    "border-color": "orange"
  });
};

MouseDancer.prototype = Object.create(Dancer.prototype);
MouseDancer.prototype.constructor = MouseDancer;
// BlinkyDancer.prototype.node = 
MouseDancer.prototype.step = function(){
  // debugger;
  var that = this;
  var colors = ["blue", "yellow", "green", "white", "purple", "black"];
  // call the old versionof step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  this.$node.animate({
    top: "+=" + (Math.random() * 100 - 50),
    left: "+=" + (Math.random() * 100 - 50)
  }, that.timeBetweenSteps/2);
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$node.mouseenter(function(){
    that.$node.css({
      "border-color": colors[Math.floor(Math.random()*colors.length)]
    });
  });
};

