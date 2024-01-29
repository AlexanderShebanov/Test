import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../navigation/stacks/MergedParams';

type NavigationProp = StackNavigationProp<MergedStackParams, 'Initial'>;
type RouteProps = RouteProp<MergedStackParams, 'Initial'>;

export type IInitialScreenProps = {
  navigation: NavigationProp;
  route: RouteProps;
};

interface Sitter {
  bio: string;
  city: string;
  firstName: string;
  id: string;
  lastInitial: string;
  profilePhotoURL: string;
  rating: number;
  state: string;
  yearsActive: number;
}

export interface SittersData {
  sitters: {
    totalCount: number;
    nodes: Sitter[];
  };
}
