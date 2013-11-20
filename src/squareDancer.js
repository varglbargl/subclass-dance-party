 var SquareDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.css({
    "border-radius": 0,
    "border": 0,
    "background-color": "lightblue",
    "width": 20,
    "height": 20,
    "transition": "-webkit-transform " + this.timeBetweenSteps/1000 + "s linear",
    "-webkit-transition": "-webkit-transform " + this.timeBetweenStep/1000 + "s linear"
  })
  this.degrees = 10;
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
// SquareDancer.prototype.node = 
SquareDancer.prototype.step = function(){
  var that = this;
  // debugger;
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  // this.$node.toggle();
  that.degrees += 180;
  that.animate
  that.$node.css({'-webkit-transform' : 'rotate('+ that.degrees +'deg)',
                 '-moz-transform' : 'rotate('+ that.degrees +'deg)',
                 '-ms-transform' : 'rotate('+ that.degrees +'deg)',
                 'transform' : 'rotate('+ that.degrees +'deg)'
               });
};