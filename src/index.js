
import "./style.scss";
import './favicons/favicons.js';
import "./map/map.js"
import "./buttons/buttons.js"
import "./bubble-slider/bubble-slider.js"
import "./range-slider/range-slider.js"
import "./percent/percent.js"
import "./pie-chart/pie-chart.js"
import "./calendar/calendar.js"
import "./stage/stage.js"

require.context("./",true,/\.(scss|png|svg|eot|ttf|woff|js)$/);
require('webpack-jquery-ui/datepicker');