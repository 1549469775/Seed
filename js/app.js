var study = new Vue({
  el: "#vue-app",
  data: {
    heading: "Vue.js",
    text: "Time is what keeps everything from happening all at once."
  },
  created(){
    console.log("DOM Created");
  }
});

console.log(study.$data.heading);
console.log(Math.random()*10);

Math.seededRandom = function(max, min) { 
  max = max || 1; 
  min = min || 0; 
  Math.seed = (Math.seed * 9301 + 49297) % 233280; 
  var rnd = Math.seed / 233280.0; 
  return min + rnd * (max - min); 
  
}; 
for (var i= 0; i<10; i++) { 
  Math.seed = i;
  document.writeln(Math.seededRandom() +"<br />"); 
}
