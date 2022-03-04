import Td from './td';
import Button, { IconColor } from '../button/button';
import ButtonGroup from '../button-group/buttonGroup';

type LeftButtonType = 'archive' | 'back' | 'down' | 'pause' | 'play';

interface Props {
  leftButtonType: LeftButtonType,
  className?: string,
  leftButtonColor?: IconColor,
}

function ControlTd({ leftButtonType, className = '', leftButtonColor }: Props) {
  return (
    <Td>
      <div className={`flex space-x-[9px] justify-end ${className}`}>
        <ButtonGroup>
          <Button
            color="white"
            text=""
            icon={leftButtonType}
            iconColor={leftButtonColor}
          />
          <Button
            color="white"
            text=""
            icon="delete"
            iconColor="red"
          />
        </ButtonGroup>
      </div>
    </Td>
  );
}

export default ControlTd;
