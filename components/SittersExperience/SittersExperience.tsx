import React from 'react';
import { View } from 'react-native';
import Slider from 'react-native-slider';
import { ExtendedText } from '../ExtendedText/ExtendedText';
import { styles } from './SittersExperience.styles';
import { ISittersExperienceProps } from './SittersExperience.types';
import { generalStyles } from '../../utils/generalStyles';

export const SittersExperience: React.FC<ISittersExperienceProps> = ({ selectedRank, handleRankPress }) => {
  const minExperience = 1;
  const maxExperience = 10;

  return (
    <View style={styles.sittersExpirienceContainer}>
      <View style={generalStyles.centered}>
        <ExtendedText preset='fs24'>Current rank: {selectedRank}</ExtendedText>
      </View>
      <Slider
        style={{ width: '80%', alignSelf: 'center' }}
        minimumValue={minExperience}
        maximumValue={maxExperience}
        step={1}
        value={selectedRank || maxExperience}
        minimumTrackTintColor="#2C3E50"
        maximumTrackTintColor="#ecf0f1"
        thumbTintColor="#2C3E50"
        onValueChange={(value: number) => {
          handleRankPress(value);
        }}
      />
    </View>
  );
};
