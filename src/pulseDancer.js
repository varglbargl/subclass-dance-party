 var PulseDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

PulseDancer.prototype = Object.create(Dancer.prototype);
PulseDancer.prototype.constructor = PulseDancer;
PulseDancer.prototype.step = function(){
  // debugger;
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  var that = this;
  this.$node.css({
    "border": "10px solid #3F0"
  });
  var pulse = function(){
    that.$node.animate({
    height: "5px",
    width: "5px",
    top: "+=15",
    left: "+=15"
    }, that.timeBetweenSteps/2 , pulseBack);
  }
  var pulseBack = function(){
    that.$node.animate({
    height: "30px",
    width: "30px",
    top: "-=15",
    left: "-=15"
    }, that.timeBetweenSteps/2);
  }
  pulse();
};

PulseDancer.prototype.lineup = function() {
  this.$node.animate({
    left: 30
  }, 500);
}