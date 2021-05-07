import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '../typography/text.component';
import { Spacer } from '../spacer/spacer.component';

import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';


const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  return (
    <FavoritesWrapper>
      <Spacer position='left' size='medium'>
        { favorites.length
          ? <Text variant="caption">Favorites</Text>
          : <Text>Your favorites list is empty.</Text> }
      </Spacer>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={ false }
      >
        { favorites.map((restaurant) => {
          const key = restaurant.name.split('').join('');
          return (
            <Spacer key={ key } position='left' size='medium'>
              <TouchableOpacity
                onPress={ () => onNavigate('RestaurantDetails', { restaurant: restaurant }) }>
                <CompactRestaurantInfo restaurant={ restaurant } />
              </TouchableOpacity>
            </Spacer>
          )
        }) }
      </ScrollView>
    </FavoritesWrapper>
  )
};