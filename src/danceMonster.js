var DanceMonster = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this functionf
};

DanceMonster.prototype = Object.create(Dancer.prototype);
DanceMonster.prototype.constructor = DanceMonster;
DanceMonster.prototype.step = function(){
  // debugger;
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  var that = this;

  var closest = window.dancers[0];

  var hunt = function(){
    var ghostTop = parseInt($(that.$node).css("top"));
    var ghostLeft = parseInt($(that.$node).css("left"));
    var closestTop;
    var closestLeft
    for( var i = 0; i < window.dancers.length; i++ ){
      var targetTop = parseInt($(window.dancers[i].$node).css("top"));
      var targetLeft = parseInt($(window.dancers[i].$node).css("left"));
      closestTop = parseInt($(closest.$node).css("top"));
      closestLeft = parseInt($(closest.$node).css("left"));
      var targetDistance = Math.sqrt(Math.pow(targetTop - ghostTop, 2) + Math.pow(targetLeft - ghostLeft, 2));
      var closestDistance = Math.sqrt(Math.pow(closestTop - ghostTop, 2) + Math.pow(closestLeft - ghostLeft, 2));

      if ( targetDistance < closestDistance ) {
        closest = window.dancers[i];
        closestTop = parseInt($(closest.$node).css("top"));
        closestLeft = parseInt($(closest.$node).css("left"));
        // console.log(i);
      }
    }
    if((closestTop-ghostTop) < 40 && (closestLeft-ghostLeft) < 40){
      closest.$node.remove();
      window.dancers.splice(window.dancers.indexOf(closest),1);
      // console.log("removed")
    }
    // console.log(closestTop, ghostTop, closestLeft, ghostLeft);
    return [closestTop-ghostTop-15, closestLeft-ghostLeft-15];
  };

  this.$node.css({ "border": "0 solid #FFF" });
  var chase = function(){
    var hunted = hunt();
    that.$node.animate({
      top: "+=" + hunted[0],
      left: "+=" + hunted[1]
    }, that.timeBetweenSteps/2);
  };
  chase();
};

DanceMonster.prototype.lineup = function() {
  this.timeBetweenSteps /= 1.2;
}