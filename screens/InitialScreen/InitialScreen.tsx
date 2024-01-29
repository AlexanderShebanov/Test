import React, { useState } from 'react';
import { FlatList, ImageSourcePropType, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useQuery } from '@apollo/client';

import { SittersData } from './InitialScreen.types';
import {
  ExtendedText,
  Header,
  SitterItem,
  SittersExperience,
} from '../../components';
import { GET_SITTERS } from '../../api';
import { styles } from './InitialScreen.styles';
import { generalStyles } from '../../utils/generalStyles';

export const InitialScreen: React.FC = () => {
  const { data } = useQuery<SittersData>(GET_SITTERS);
  const [selectedRank, setSelectedRank] = useState<number | null>(null);

  let sitters = data?.sitters.nodes;

  if (selectedRank !== null) {
    sitters = sitters?.filter((sitter) => sitter.yearsActive === selectedRank);
  }

  const handleRankPress = (rank: number) => {
    setSelectedRank(rank);
  };

  const renderItemSeparator = (
    () => <View style={styles.itemSeparator} />
  );

  return (
    <SafeAreaView style={generalStyles.flex}>
      <Header />
      <View style={generalStyles.flex}>
        <SittersExperience
          selectedRank={selectedRank}
          handleRankPress={handleRankPress}
        />
        <View style={styles.sittersContainer}>
          <FlatList
            data={sitters}
            keyExtractor={(sitter) => sitter.id}
            ListEmptyComponent={
              <ExtendedText preset="fs24">No sitters available</ExtendedText>
            }
            ItemSeparatorComponent={renderItemSeparator}
            renderItem={({ item: sitter }) => (
              <SitterItem name={sitter.firstName} rank={sitter.yearsActive} image={sitter.profilePhotoURL} />
            )}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.allRanksButton}
        onPress={() => setSelectedRank(null)}
      >
        <ExtendedText>All ranks</ExtendedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
