import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use `react-router-dom` for routing
import Badge from './ui/badge'; // Adjust imports if necessary
import Button from './ui/button';
import Checkbox from './ui/checkbox';
import Separator from './ui/separator';
import { ArrowUp, ListFilter, MailPlus, MoveLeft } from 'lucide-react';

export const PanelOne = () => {
  const navigate = useNavigate(); // Use `useNavigate` instead of `useRouter`
  const [selectedTab, setSelectedTab] = useState('backlog');

  return (
    <div className="bg-[#13262F] text-white grow">
      <div className="p-4">
        <MoveLeft
          className="cursor-pointer ml-4"
          onClick={() => {
            navigate('/'); // Use `navigate` for routing
          }}
        />
        <div className="flex gap-3 my-3">
          <Badge className="bg-[#284D58] hover:bg-[#284D58] h-4 w-6 rounded-sm" />
          <Badge className="bg-[#88E8FF] scale-150 hover:bg-[#88E8FF] h-4 w-6 rounded-sm" />
          <Badge className="bg-[#284D58] hover:bg-[#284D58] h-4 w-6 rounded-sm" />
          <Badge className="bg-[#284D58] hover:bg-[#284D58] h-4 w-6 rounded-sm" />
          <Badge className="bg-[#284D58] hover:bg-[#284D58] h-4 w-6 rounded-sm" />
          <Badge className="bg-[#284D58] hover:bg-[#284D58] h-4 w-6 rounded-sm" />
        </div>
        <h1 className="text-lg">Sample Stack</h1>
      </div>
      <Separator className="bg-white/30" />
      <div className="mb-2">
        <Button
          variant="ghost"
          onClick={() => setSelectedTab('backlog')}
          className={`capitalize border-b-2 rounded-none hover:bg-transparent hover:text-white ${
            selectedTab === 'backlog' ? 'text-[#65FEE1] border-[#65FEE1]' : 'border-transparent'
          }`}
        >
          Backlog (238)
        </Button>
        <Button
          variant="ghost"
          onClick={() => setSelectedTab('pending')}
          className={`capitalize border-b-2 rounded-none hover:bg-transparent hover:text-white ${
            selectedTab === 'pending' ? 'text-[#65FEE1] border-[#65FEE1]' : 'border-transparent'
          }`}
        >
          Pending (0)
        </Button>
        <Button
          variant="ghost"
          onClick={() => setSelectedTab('final-sign-off')}
          className={`capitalize border-b-2 rounded-none hover:bg-transparent hover:text-white ${
            selectedTab === 'final-sign-off' ? 'text-[#65FEE1] border-[#65FEE1]' : 'border-transparent'
          }`}
        >
          Final Sign-Off
        </Button>
      </div>
      <Button className="flex gap-4 text-[#65FEE1]" variant="ghost">
        <span>Filter</span>
        <ListFilter />
      </Button>
      {new Array(5).fill(0).map((stacks, idx) => (
        <StackItem key={idx} id={idx} />
      ))}
    </div>
  );
};

function StackItem({ id }) {
  return (
    <>
      <div className="px-4 py-2 flex justify-between gap-2 border border-transparent hover:border-4 hover:border-[#4FD1C5]  hover:rounded transition-all duration-200"
  
      >
        <Checkbox className="m-0 border-white" id={String(id)} />
        <label className="grow" htmlFor={String(id)}>
          <div className="flex gap-2">
            <Badge className="bg-white text-black rounded-sm hover:text-black hover:bg-white">
              <ArrowUp size={10} />
              <span className="uppercase text-xs">F&apos;cast stab.</span>
            </Badge>
            <Badge className="bg-white text-black rounded-sm hover:text-black hover:bg-white">
              <ArrowUp size={10} />
              <span className="uppercase text-xs">F&apos;cast stab.</span>
            </Badge>
          </div>
          <p>Sample Stack</p>
        </label>
        <MailPlus size={16} 
          className="text-[#4FD1C5] hover:text-[#4FD1C5] transition-colors duration-200"/>
      </div>
      <Separator className="bg-white/30" />
    </>
  );
}
