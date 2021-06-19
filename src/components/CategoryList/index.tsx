import React from 'react';
import { categories } from '../../utils/categories';
import { CategoryCard } from '../CategoryCard';
import { ContainerList } from './styles';

export function CategoryList() {
  return (
    <ContainerList>
      {categories.map(category => (
        <CategoryCard key={category.id} title={category.title} icon={category.icon} />
      ))}
    </ContainerList>
  );
}
