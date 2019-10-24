function increaseStepCount(t) {
  var label;
  switch (t) {
    case 'x':
      label = document.getElementById("steps-labelX");
      break;
    case 'y':
      label = document.getElementById("steps-labelY");
      break;
    case 'z':
      label = document.getElementById("steps-labelZ");
      break;
  }
  var currval = parseInt(label.getAttribute("value"), 10);
  var val = currval + 1;
  val = val.toString();
  label.setAttribute("value", val);
  return true;
}

function decreaseStepCount(t) {
  var yes = false;
  var label;
  switch (t) {
    case 'x':
      label = document.getElementById("steps-labelX");
      break;
    case 'y':
      label = document.getElementById("steps-labelY");
      break;
    case 'z':
      label = document.getElementById("steps-labelZ");
      break;
  }
  //var label = document.getElementById("steps-label");
  var currval = parseInt(label.getAttribute("value"), 10);
  var val = 0;
  if (currval > 0) {
    val = currval - 1;
    yes = true;
  }
  val = val.toString();
  label.setAttribute("value", val);
  return yes;
}

function increaseLoopCount() {
  var label = document.getElementById("loop-label");
  var currval = parseInt(label.getAttribute("value"), 10);
  var val = currval + 1;
  val = val.toString();
  label.setAttribute("value", val);
  var label = document.getElementById("loop-label");
  var label = document.getElementById("loop-label");
  var label = document.getElementById("loop-label");
  var label = document.getElementById("loop-label");
  var currval = parseInt(label.getAttribute("value"), 10);
  var val = 0;
  if (currval > 0) {
    val = currval - 1;
  }
  val = val.toString();
  label.setAttribute("value", val);
}

function callDialog(type) {
  window.DIALOG_TYPE = type;
  storeState("#fox");
  document.getElementById("steps-labelX").setAttribute('value', 0);
  document.getElementById("steps-labelY").setAttribute('value', 0);
  document.getElementById("steps-labelZ").setAttribute('value', 0);
  showStepDialog();
}

function DoneStepDialog() {
  type = window.DIALOG_TYPE;
  var el = document.querySelector("#fox");
  x = parseFloat(document.getElementById("steps-labelX").getAttribute('value'));
  y = parseFloat(document.getElementById("steps-labelY").getAttribute('value'));
  z = parseFloat(document.getElementById("steps-labelZ").getAttribute('value'));
  //document.getElementById("steps-labelY").setAttribute('value', 0);
  //document.getElementById("steps-labelZ").setAttribute('value', 0);)
  //var positionX, positionY, positionZ, rotateX, rotateY, rotateZ, scaleX, scaleY, scaleZ;
  //[positionX, positionY, positonZ] = el.getAttribute("position")
  //[rotateX, rotateY, rotateZ] = el.getAttribute("rotation")
  //[scaleX, scaleY, scaleZ] = el.getAttribute("scale")
  //positionX = el.getAttribute("position").x;
  //positionY = el.getAttribute("position").y;
  //positionZ = el.getAttribute("position").z;
  //rotateX = el.getAttribute("rotation").x;
  //rotateY = el.getAttribute("rotation").y;
  //rotateZ = el.getAttribute("rotation").z;
  //scaleX = el.getAttribute("scale").x;
  //scaleY = el.getAttribute("scale").y;
  //scaleZ = el.getAttribute("scale").z;
  switch (type) {
    case "move":
      window.PROGRAM.push(MoveAnimation(x, y, z));
      break;
    case "rotation":
      window.PROGRAM.push(RotateAnimation(x, y, z));
      break;
    case "scale":
      window.PROGRAM.push(ScaleAnimation(x, y, z));
      break;
  }
  /*switch (type) {
    case "move":
      window.PROGRAM.push(MoveAnimation(positionX, positionY, positionZ));
      break;
    case "rotation":
      window.PROGRAM.push(RotateAnimation(rotateX, rotateY, rotateZ));
      break;
    case "scale":
      window.PROGRAM.push(ScaleAnimation(scaleX, scaleY, scaleZ));
      break;
  }*/
  hideStepDialog()
}

function discardDialog() {
  hideLoopCountDialog(); position
  hideStepDialog();
  restoreState();
}

function showStepDialog() {
  document.querySelectorAll(".number-of-steps").forEach(function (e) { e.setAttribute("visible", true) });
  document.querySelector("#countokbutton").setAttribute("visible", true);
}
function hideStepDialog() {
  document.querySelectorAll(".number-of-steps").forEach(function (e) { e.setAttribute("visible", false) });
  document.querySelector("#countokbutton").setAttribute("visible", false);
}
function showLoopCountDialog() {
  document.querySelector("#loop-times").setAttribute("visible", true);
  document.querySelector("#loopokbutton").setAttribute("visible", true);
}



function hideLoopCountDialog() {
  console.log("clicked");
  document.querySelector("#loop-times").setAttribute("visible", false);
  document.querySelector("#loopokbutton").setAttribute("visible", false);
}

function decreaseStep(t) {
  type = window.DIALOG_TYPE;
  var el = document.querySelector("#fox");
  if (decreaseStepCount(t)) {
    switch (type) {
      case "move":
        if (t == 'x')
          el.object3D.position.x -= 0.1;
        if (t == 'y')
          el.object3D.position.y -= 0.1;
        if (t == 'z')
          el.object3D.position.z -= 0.1;
        break;
      case "rotation":
        if (t == 'x')
          el.object3D.rotation.x -= 0.05;
        if (t == 'y')
          el.object3D.rotation.y -= 0.05;
        if (t == 'z')
          el.object3D.rotation.z -= 0.05;
        break;
      case "scale":
        if (t == 'x')
          el.object3D.scale.x -= 0.1;
        if (t == 'y')
          el.object3D.scale.y -= 0.1;
        if (t == 'z')
          el.object3D.scale.z -= 0.1;
        break;
    }
  }

  function increaseStep(t) {
    type = window.DIALOG_TYPE;
    var el = document.querySelector("#fox");
    increaseStepCount(t);
    switch (type) {
      case "move":
        if (t == 'x')
          el.object3D.position.x += 0.1;
        if (t == 'y')
          el.object3D.position.y += 0.1;
        if (t == 'z')
          el.object3D.position.z += 0.1;
        break;
      case "rotation":
        if (t == 'x')
          el.object3D.rotation.x += 0.05;
        if (t == 'y')
          el.object3D.rotation.y += 0.05;
        if (t == 'z')
          el.object3D.rotation.z += 0.05;
        break;
      case "scale":
        if (t == 'x')
          el.object3D.scale.x += 0.1;
        if (t == 'y')
          el.object3D.scale.y += 0.1;
        if (t == 'z')
          el.object3D.scale.z += 0.1;
        break;
    }
  }

  function storeState(q) {
    var el = document.querySelector(q);
    //var positionX, positionY, positionZ, rotateX, rotateY, rotateZ, scaleX, scaleY, scaleZ;
    //[positionX, positionY, positonZ] = el.getAttribute("position")
    //[rotateX, rotateY, rotateZ] = el.getAttribute("rotation")
    //[scaleX, scaleY, scaleZ] = el.getAttribute("scale")
    positionX = el.getAttribute("position").x;
    positionY = el.getAttribute("position").y;
    positionZ = el.getAttribute("position").z;
    rotateX = el.getAttribute("rotation").x;
    rotateY = el.getAttribute("rotation").y;
    rotateZ = el.getAttribute("rotation").z;
    scaleX = el.getAttribute("scale").x;
    scaleY = el.getAttribute("scale").y;
    scaleZ = el.getAttribute("scale").z;
    window.STORED_STATE = {
      "element": el,
      "position": el.getAttribute("position"),
      "positionX": positionX,
      "positionY": positionY,
      "positionZ": positionZ,
      "rotateX": rotateX,
      "rotateY": rotateY,
      "rotateZ": rotateZ,
      "scaleX": scaleX,
      "scaleY": scaleY,
      "scaleZ": scaleZ,
      "rotation": el.getAttribute("rotation"),
      "scale": el.getAttribute("scale")
    };
  }

  function restoreState() {
    var el = window.STORED_STATE.element;
    el.setAttribute("position", o.position);
    el.setAttribute("rotation", o.rotation);
    el.setAttribute("scale", o.scale);
  }



