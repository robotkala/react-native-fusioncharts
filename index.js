import React from 'react';
import ReactNativeFusionCharts from './src/FusionCharts';
import {View} from "react-native";

const App = (props) => {
  const {
    type, 
    width, 
    height, 
    dataSource, 
    dataFormat, 
    dataJson, 
    schemaJson
  } = props.chartConfig;

  return (
    <View>
      <ReactNativeFusionCharts
        type={type}
        width={width}
        height={height}
        dataSource={dataSource}
        dataFormat={dataFormat}
        dataJson={dataJson}
        schemaJson={schemaJson}
        modules={props.modules}
        events={props.events}
        {...props}
      />
    </View>
  );
}

export default App;