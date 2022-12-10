import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { MONTHS } from './const';

function DropdownOption({callback}) {

    let months = MONTHS.map((month) => {  
      return (
        <Dropdown.Item as="button" onClick={() => callback(month)}>{month}</Dropdown.Item>)
    }
    )
  return (
    <DropdownButton id="dropdown-item-button" title="Select Month">
      <Dropdown.Item as="button" onClick={() => callback("")}> All </Dropdown.Item>
      {months}
      
    </DropdownButton>
  );
}

export default DropdownOption;