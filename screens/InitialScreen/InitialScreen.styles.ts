import { StyleSheet, ViewStyle } from 'react-native';

interface IInitialScreenStyles {
  sittersContainer: ViewStyle;
  allRanksButton: ViewStyle;
  itemSeparator: ViewStyle;
}

export const styles = StyleSheet.create<IInitialScreenStyles>({
  sittersContainer: {
    paddingHorizontal: 16,
  },
  allRanksButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 50,
    backgroundColor: 'grey',
    marginTop: 50,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginBottom: 3,
  },
});
