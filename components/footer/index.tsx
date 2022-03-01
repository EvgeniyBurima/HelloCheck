import Label from '../label';

function Footer() {
  return (
    <div className="hidden md:flex justify-between border-t border-background bg-white w-full px-12 py-2 text-steel-300 text-xxs">
      <span>© 2022 LSB Software, Inc. All rights reserved.</span>
      <div>
        <Label text="Operator ID: 12050" disabled />
        <span className="ml-2">Version 1.0.0</span>
      </div>
    </div>
  );
}

export default Footer;
