import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface ISitterItemStyles {
  commonSitterView: ViewStyle;
  sitterPhoto: ImageStyle;
}

export const styles = StyleSheet.create<ISitterItemStyles>({
  commonSitterView: {
    marginVertical: 5,
  },
  sitterPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
  },
});
