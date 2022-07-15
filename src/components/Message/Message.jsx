import PropTypes from 'prop-types';
import { Wrapper } from 'components/ui/Wrapper';
import { MessageText } from './Message.style';

export const Message = ({ text }) => {
  return (
    <Wrapper>
      <MessageText>{text}</MessageText>
    </Wrapper>
  );
}

Message.prototype = {
  text: PropTypes.string.isRequired,
};

