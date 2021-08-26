import React from 'react';
import { H3Text } from '../components/text';
import MainContent from '../components/main-content';
import { ActivityIndicator } from 'react-native';
import gStyle from '../components/globalStyleSheet';

const Loading = ({ store }) => {
  const color = store.theme.color;
  const gstyles = gStyle(color);
  return (
    <MainContent style={[gstyles.container, gstyles.align]}>
      <ActivityIndicator size={60} color={color.neutral3} />
      <H3Text style={[gstyles.text, { paddingTop: 40, paddingHorizontal: 60 }]}>
        Restoring wallet from iCloud...
      </H3Text>
    </MainContent>
  );
};

export default Loading;
