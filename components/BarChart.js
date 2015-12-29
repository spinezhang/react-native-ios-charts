var React = require('react-native');

var {
  requireNativeComponent,
  processColor
} = React;

let RNBarChart = requireNativeComponent('RNBarChartSwift', BarChart);

var BarChart = React.createClass({
  render: function() {
    let { config, ...otherProps} = this.props;

    if ('backgroundColor' in config) {
      config.backgroundColor = processColor(config.backgroundColor);
    }

    if ('gridBackgroundColor' in config) {
      config.gridBackgroundColor = processColor(config.gridBackgroundColor);
    }

    if ('colors' in config) {
      config.colors = processColor(config.colors);
    }

    if ('descriptionTextColor' in config) {
      config.descriptionTextColor = processColor(config.descriptionTextColor);
    }

    if ('infoTextColor' in config) {
      config.infoTextColor = processColor(config.infoTextColor);
    }

    if ('legend' in config && 'textColor' in config.legend) {
      config.legend.textColor = processColor(config.legend.textColor);
    }

    if ('legend' in config && 'colors' in config.legend) {
      config.legend.colors = processColor(config.legend.colors);
    }

    if ('xAxis' in config && 'textColor' in config.xAxis) {
      config.xAxis.textColor = processColor(config.xAxis.textColor);
    }

    if ('xAxis' in config && 'gridColor' in config.xAxis) {
      config.xAxis.gridColor = processColor(config.xAxis.gridColor);
    }

    if ('xAxis' in config && 'axisLineColor' in config.xAxis) {
      config.xAxis.axisLineColor = processColor(config.xAxis.axisLineColor);
    }

    if ('xAxis' in config && 'limitLines' in config.xAxis) {
      config.xAxis.limitLines = config.xAxis.limitLines.map(function(l) {
        if ('lineColor' in l) {
          l.lineColor = processColor(l.lineColor);
        }
        if ('valueTextColor' in l) {
          l.valueTextColor = processColor(l.valueTextColor);
        }
        return l;
      });
    }

    if ('leftAxis' in config && 'textColor' in config.leftAxis) {
      config.leftAxis.textColor = processColor(config.leftAxis.textColor);
    }

    if ('leftAxis' in config && 'gridColor' in config.leftAxis) {
      config.leftAxis.gridColor = processColor(config.leftAxis.gridColor);
    }

    if ('leftAxis' in config && 'axisLineColor' in config.leftAxis) {
      config.leftAxis.axisLineColor = processColor(config.leftAxis.axisLineColor);
    }

    if ('leftAxis' in config && 'limitLines' in config.leftAxis) {
      config.leftAxis.limitLines = config.leftAxis.limitLines.map(function(l) {
        if ('lineColor' in l) {
          l.lineColor = processColor(l.lineColor);
        }
        if ('valueTextColor' in l) {
          l.valueTextColor = processColor(l.valueTextColor);
        }
        return l;
      });
    }

    if ('rightAxis' in config && 'textColor' in config.rightAxis) {
      config.rightAxis.textColor = processColor(config.rightAxis.textColor);
    }

    if ('rightAxis' in config && 'gridColor' in config.rightAxis) {
      config.rightAxis.gridColor = processColor(config.rightAxis.gridColor);
    }

    if ('rightAxis' in config && 'axisLineColor' in config.rightAxis) {
      config.rightAxis.axisLineColor = processColor(config.rightAxis.axisLineColor);
    }

    if ('rightAxis' in config && 'limitLines' in config.rightAxis) {
      config.rightAxis.limitLines = config.rightAxis.limitLines.map(function(l) {
        if ('lineColor' in l) {
          l.lineColor = processColor(l.lineColor);
        }
        if ('valueTextColor' in l) {
          l.valueTextColor = processColor(l.valueTextColor);
        }
        return l;
      });
    }

    return <RNBarChart
      config={JSON.stringify(config)}
      {...otherProps}/>;
  }
});

// BarChart.propTypes = {
//   config: React.PropTypes.array.isRequired,
// }

module.exports = BarChart;