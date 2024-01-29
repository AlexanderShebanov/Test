import { View } from 'react-native';
import { ExtendedText } from '../ExtendedText/ExtendedText';
import { ISitterItemProps } from './SitterItem.types';

export const SitterItem: React.FC<ISitterItemProps> = ({ name, rank }) => {
  return (
    <View>
      <ExtendedText>Sitter name: {name}</ExtendedText>
      <ExtendedText preset='fs24'>Years of experience: {rank}</ExtendedText>
    </View>
  );
};
