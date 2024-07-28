import React from 'react';
import { AlignJustify, Globe, User } from 'lucide-react';
import Button from './ui/button';

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between text-white px-2 py-3">
      <div className="flex items-center gap-2">
        <Button variant="ghost">
          <AlignJustify />
        </Button>
        <h1>WebApp</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost">
          <Globe />
        </Button>
        <Button variant="ghost">
          <User />
        </Button>
        <h1>User</h1>
      </div>
    </div>
  );
};

export default Navbar;
