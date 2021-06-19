import React, { useState } from 'react';
import { View } from 'react-native';

import { CategoryCard } from '../CategoryCard';
import { categories } from '../../utils/categories';

import { ContainerList } from './styles';

export function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  function handleOnCardPress(categoryId: string) {
    setSelectedCategory(categoryId);
  }

  return (
    <ContainerList>
      {categories.map(category => (
        <View key={category.id} style={{ marginRight: 8 }}>
          <CategoryCard
            title={category.title}
            icon={category.icon}
            isSelected={selectedCategory === category.id}
            onPress={() => handleOnCardPress(category.id)}
          />
        </View>
      ))}
    </ContainerList>
  );
}
