import React, { useState } from 'react';
import { StyleProp, View } from 'react-native';

import { CategoryCard } from '../CategoryCard';
import { categories } from '../../utils/categories';

import { ContainerList } from './styles';
import { ViewStyle } from 'react-native';

export type CategoryListProps = {
  showCardCheckbox?: boolean;
  styleList?: StyleProp<ViewStyle>;
  styleCard?: StyleProp<ViewStyle>;
};

export function CategoryList({
  showCardCheckbox = false,
  styleList,
  styleCard,
}: CategoryListProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleOnCardPress(categoryId: string) {
    if (categoryId === selectedCategory) {
      setSelectedCategory('');
      return;
    }

    setSelectedCategory(categoryId);
  }

  return (
    <View>
      <ContainerList style={styleList}>
        {categories.map(category => (
          <View key={category.id} style={{ marginRight: 8 }}>
            <CategoryCard
              title={category.title}
              icon={category.icon}
              showCheckbox={showCardCheckbox}
              isSelected={selectedCategory === category.id}
              onPress={() => handleOnCardPress(category.id)}
              style={[
                styleCard || {},
                selectedCategory === category.id ? { opacity: 1 } : {},
              ]}
            />
          </View>
        ))}
      </ContainerList>
    </View>
  );
}
