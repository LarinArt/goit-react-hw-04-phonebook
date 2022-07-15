import PropTypes from 'prop-types';
import { FilterLabel, FilterText, FilterInput } from './Filter.style';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <FilterLabel>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
};

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
