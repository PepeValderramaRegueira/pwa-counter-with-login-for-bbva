import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({
  adapter: new Adapter()
});

describe('Button component tests', () => {
  test('Render default button', () => {
    const buttonWrapper = shallow(<Button>Default</Button>);
    const buttonMarkup = buttonWrapper.html();
    const buttonMarkupExpected = '<button type="button" class="button">Default</button>';
    
    expect(buttonMarkup).toBe(buttonMarkupExpected);
  });
  
  test('Check button has default className', () => {
    const buttonWrapper = shallow(<Button>Default</Button>)
    const button = buttonWrapper.find('[className="button"]');

    expect(button.length).toBe(1);
  });

  test('Check button has one extra class name', () => {
    const buttonWrapper = shallow(<Button extraClasses='extra-class'>Button</Button>);
    const button = buttonWrapper.find('button');

    expect(button.hasClass('extra-class')).toBe(true);
  });

  test('Check button has two or more extra class names', () => {
    const buttonWrapper = shallow(<Button extraClasses='extra-1 extra-2 extra-3'>Button</Button>)
    const button = buttonWrapper.find('button');

    expect(button.hasClass('extra-1 extra-2 extra-3')).toBe(true);
  });

  test('Check button add class names properly when passing boolean attributes', () => {
    const buttonWrapper = shallow(<Button isPrimary>Button</Button>)
    const button = buttonWrapper.find('button');

    expect(button.hasClass('is-primary')).toBe(true);
  });

  test('Check button adds properly the id', () => {
    const buttonWrapper = shallow(<Button id='button-test'>Button</Button>)
    const button = buttonWrapper.find('[id="button-test"]');

    expect(button.length).toBe(1);
  });

  test('Check button changes properly the type', () => {
    const buttonWrapper = shallow(<Button type='reset'>Button</Button>)
    const button = buttonWrapper.find('[type="reset"]');

    expect(button.length).toBe(1);
  });
});
