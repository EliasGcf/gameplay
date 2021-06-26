import React, { useState } from 'react';
import { StyleProp, View } from 'react-native';

import { CategoryCard } from '../CategoryCard';
import { categories } from '../../utils/categories';

import { ContainerList } from './styles';
import { ViewStyle } from 'react-native';

export type CategoryListProps = {
  showCardCheckbox?: boolean;
  selectedCategoryId: string;
  styleList?: StyleProp<ViewStyle>;
  styleCard?: StyleProp<ViewStyle>;
  onCardPress: (categoryId: string) => void;
};

export function CategoryList({
  styleList,
  styleCard,
  onCardPress,
  selectedCategoryId,
  showCardCheckbox = false,
}: CategoryListProps) {
  return (
    <View>
      <ContainerList style={styleList}>
        {categories.map(category => (
          <View key={category.id} style={{ marginRight: 8 }}>
            <CategoryCard
              title={category.title}
              icon={category.icon}
              showCheckbox={showCardCheckbox}
              isSelected={selectedCategoryId === category.id}
              onPress={() => onCardPress(category.id)}
              style={[
                styleCard || {},
                selectedCategoryId === category.id ? { opacity: 1 } : {},
              ]}
            />
          </View>
        ))}
      </ContainerList>
    </View>
  );
}
