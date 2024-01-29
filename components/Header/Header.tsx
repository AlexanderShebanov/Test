import { SafeAreaView } from 'react-native';
import { ExtendedText } from '../ExtendedText/ExtendedText';
import { generalStyles } from '../../utils/generalStyles';

export const Header: React.FC = () => {
  return (
    <SafeAreaView style={generalStyles.centered}>
      <ExtendedText preset="fs32">Shebanov task</ExtendedText>
    </SafeAreaView>
  );
};
