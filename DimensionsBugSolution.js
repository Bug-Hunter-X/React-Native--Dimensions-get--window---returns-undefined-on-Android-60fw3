import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });
    setDimensions({ width: Dimensions.get('window').width, height: Dimensions.get('window').height });
    return () => subscription?.remove();
  }, []);

  return (
    <View>
      <Text>Window Width: {dimensions.width}</Text>
      <Text>Window Height: {dimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution; 