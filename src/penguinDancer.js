 var PenguinDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.prepend('<img width=60 height=60 src="src/penguin.gif" />');
  this.$node.css({
    "border": 0,
    "height": 0,
    "width": 0
  })
};

PenguinDancer.prototype = Object.create(Dancer.prototype);
PenguinDancer.prototype.constructor = PenguinDancer;
// PenguinDancer.prototype.node = 
PenguinDancer.prototype.step = function(){
    // debugger;
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    
  };