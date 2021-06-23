import React, { useState } from 'react';
import { View } from 'react-native';

import { CategoryCard } from '../CategoryCard';
import { categories } from '../../utils/categories';

import { ContainerList } from './styles';

export type CategoryListProps = {
  showCardCheckbox?: boolean;
};

export function CategoryList({ showCardCheckbox = false }: CategoryListProps) {
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
      <ContainerList>
        {categories.map(category => (
          <View key={category.id} style={{ marginRight: 8 }}>
            <CategoryCard
              title={category.title}
              icon={category.icon}
              showCheckbox={showCardCheckbox}
              isSelected={selectedCategory === category.id}
              onPress={() => handleOnCardPress(category.id)}
            />
          </View>
        ))}
      </ContainerList>
    </View>
  );
}
