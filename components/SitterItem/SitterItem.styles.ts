import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface ISitterItemStyles {
  sitterPhoto: ImageStyle;
}

export const styles = StyleSheet.create<ISitterItemStyles>({
  sitterPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
  },
});
