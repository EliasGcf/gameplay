import React, { useCallback, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { MotiProps } from 'moti';

import { CategoryCard } from '../CategoryCard';
import { categories, Category } from '../../utils/categories';

import { MotiContainerList } from './styles';

export type CategoryListProps = MotiProps<ViewStyle> & {
  isToggle?: boolean;
  showCardCheckbox?: boolean;
  styleList?: StyleProp<ViewStyle>;
  styleCard?: StyleProp<ViewStyle>;
  onCardPress?: (category: Category) => void;
};

export function CategoryList({
  styleList,
  styleCard,
  onCardPress,
  isToggle = true,
  showCardCheckbox = false,
  ...rest
}: CategoryListProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const handleCardPress = useCallback(
    (category: Category) => {
      if (isToggle && selectedCategoryId === category.id) {
        setSelectedCategoryId('');
        return;
      }

      setSelectedCategoryId(category.id);

      if (onCardPress) onCardPress(category);
    },
    [onCardPress, isToggle, selectedCategoryId],
  );

  return (
    <MotiContainerList {...rest} style={styleList}>
      {categories.map(category => (
        <View key={category.id} style={{ marginRight: 8 }}>
          <CategoryCard
            title={category.title}
            icon={category.icon}
            showCheckbox={showCardCheckbox}
            isSelected={selectedCategoryId === category.id}
            onPress={() => handleCardPress(category)}
            style={[
              styleCard || {},
              selectedCategoryId === category.id ? { opacity: 1 } : {},
            ]}
          />
        </View>
      ))}
    </MotiContainerList>
  );
}
