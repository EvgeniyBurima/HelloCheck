import Td from '../../components/table/td';
import Button from '../../components/button/button';
import ButtonGroup from '../../components/button-group/buttonGroup';

function EarnedTd() {
  return (
    <Td>
      <div className="flex space-x-[9px] justify-end">
        <ButtonGroup>
          <Button
            color="white"
            text=""
            icon="archive"
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

export default EarnedTd;
