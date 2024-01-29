import { Image, View } from 'react-native';
import { ExtendedText } from '../ExtendedText/ExtendedText';
import { ISitterItemProps } from './SitterItem.types';
import { styles } from './SitterItem.styles';
import { generalStyles } from '../../utils/generalStyles';

export const SitterItem: React.FC<ISitterItemProps> = ({
  name,
  rank,
  image,
}) => {
  return (
    <View style={generalStyles.row}>
      <View style={generalStyles.centered}>
        <Image style={styles.sitterPhoto} source={{ uri: image }} />
      </View>
      <View>
        <ExtendedText>Sitter name: {name}</ExtendedText>
        <ExtendedText preset="fs24">Years of experience: {rank}</ExtendedText>
      </View>
    </View>
  );
};
