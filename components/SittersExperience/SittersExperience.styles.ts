import { StyleSheet, ViewStyle } from 'react-native';

interface ISittersExpirienceStyles {
  sittersExpirienceContainer: ViewStyle;
  sittersItemContainer: ViewStyle;
  selectedRankItem: ViewStyle;
  aaa: ViewStyle;
}

export const styles = StyleSheet.create<ISittersExpirienceStyles>({
  sittersExpirienceContainer: {
    marginHorizontal: 20,
  },
  sittersItemContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 50,
    backgroundColor: 'grey',
  },
  selectedRankItem: {
    backgroundColor: 'blue',
  },
  aaa: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginLeft: 100,
    marginTop: 100,
  },
});
