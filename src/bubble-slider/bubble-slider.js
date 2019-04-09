
(function(win, dom){
	'use strict';
	var rangeControlList = dom.getElementsByClassName('custom-rangeInput');
	var init = function(){ 
	  for (var i = 0; i < rangeControlList.length; i++) {
		updateController(rangeControlList[i]);
		rangeControlList[i].addEventListener('input', function() {
		  updateController(this);
		});
		rangeControlList[i].addEventListener('change', function() {
		  updateController(this);
		});
	  }
	}
	var update = function(){
	  for (var i = 0; i < rangeControlList.length; i++) {
		 updateController(rangeControlList[i]);
	  }
	}
	var updateController = function(obj){
	  var thumbPos = getThumbPercentage(obj);
	  var thumPosPX = getThumbPosition(obj);
	  if(obj.getAttribute("data-tooltip") != "false"){
		updateTooltip(obj.nextElementSibling, obj.value, thumPosPX, thumbPos);
	  }else{
		obj.nextElementSibling.style.display = "none";
	  }
	  updateProgress(obj, '#9c9e9f', '#33ccff', thumbPos);
	}
	var getThumbPosition = function(obj){
	  return Math.round((obj.offsetWidth / 100) * obj.value);
	}
	var getThumbPercentage = function(obj){
	  return Math.round(100 * obj.value/obj.getAttribute("max")); 
	}
	var updateTooltip = function(obj, text, position, percentage){
	  obj.innerHTML = text; 
	  obj.style.left = position + 'px';
	  var tooltipStartPos = 26;
	  var tooltipPosFix = percentage / 1.8;
	  if(percentage > 50){
		tooltipPosFix = percentage / 2.2;
	  }
	  obj.style.transform = 'translate(-'+ (tooltipStartPos + tooltipPosFix) +'%, 0)';
	}
	var updateProgress = function(obj, progressBgColor, progressFillColor, percentage){
	  var cssRule = '#'+ obj.id;
	  var applyStyle = function(styleName, cssText) {
		  var styleElement = dom.getElementById(styleName);
		  if (styleElement) dom.getElementsByTagName('head')[0].removeChild(styleElement);
		  
		  styleElement = dom.createElement('style');
		  styleElement.type = 'text/css';
		  styleElement.id = styleName;
		  styleElement.innerHTML = cssText;
		  dom.getElementsByTagName('head')[0].appendChild(styleElement);
	  }
	  applyStyle('range_'+ obj.id, cssRule);
	}
  var fireOnceOnResize;
  win.addEventListener('resize', function () {
	fireOnceOnResize = setTimeout(update, 100);
  });
  init();
  }(window, document));
