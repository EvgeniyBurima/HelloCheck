import Td from './td';
import Button from '../button/button';
import ButtonGroup from '../button-group/buttonGroup';

type LeftButtonType = 'archive' | 'back' | 'down';

interface Props {
  className?: string,
  leftButtonType: LeftButtonType,
}

function ControlTd({ leftButtonType, className }: Props) {
  return (
    <Td>
      <div className={`flex space-x-[9px] justify-end ${className}`}>
        <ButtonGroup>
          <Button
            color="white"
            text=""
            icon={leftButtonType}
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
