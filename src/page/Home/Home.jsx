import { Button } from '@/components/ui/button'
import React from 'react'
import AssetTable from './AssetTable';
import StockChart from './StockChart';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { DotIcon, MessageCircle } from 'lucide-react';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Input } from '@/components/ui/input';

function Home() {
  const [category, setCategory] = React.useState("all");
  const [inputValue, setInputValue] = React.useState("");
  const [messages, setMessages] = React.useState([]); // New state to store chat messages
  const [isBotRealease, setIsBotRealease] = React.useState(false);

  const handleBotRealease=()=>setIsBotRealease(!isBotRealease);
  const handleCategory = (value) => {
    console.log(value);
    setCategory(value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      // Add the current input value to the messages
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, isUser: true }, // Add user's message
        { text: "Bot response to: " + inputValue, isUser: false }, // Add bot's response (you can customize this)
      ]);

      // Clear input field after submitting
      setInputValue("");
    }
  };

  return (
    <div className="relative">
      {/* Main Content Layout */}
      <div className="lg:flex lg:w-full">
        <div className="lg:w-1/2 lg:border-r p-3">
          <div className="flex items-center gap-4">
            <Button onClick={() => handleCategory("all")} variant={category === "all" ? "default" : "outline"} className="rounded-full">
              All
            </Button>
            <Button onClick={() => handleCategory("top50")} variant={category === "top50" ? "default" : "outline"} className="rounded-full">
              Top 50
            </Button>
            <Button onClick={() => handleCategory("topGainers")} variant={category === "topGainers" ? "default" : "outline"} className="rounded-full">
              Top Gainer
            </Button>
            <Button onClick={() => handleCategory("topLosers")} variant={category === "topLosers" ? "default" : "outline"} className="rounded-full">
              Top Losers
            </Button>
          </div>
          <AssetTable />
        </div>

        {/* StockChart will be hidden on smaller screens */}
        <div className="hidden lg:block lg:w-1/2 p-5">
          <StockChart />
          <div className="flex gap-5 item-center">
            <div>
              <Avatar>
                <AvatarImage
                  src={"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628"}
                />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>ETH</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400"></p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">5464</p>
                <p className="text-red-600">
                  <span>-1122342324533</span>
                  <span>(-0.23244769%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Box Section */}
      <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
       { isBotRealease && <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900">
          <div className="flex justify-between items-center border-b px-6 h-[12%]">
            <p>Chat Bot</p>
            <Button onClick ={handleBotRealease} variant="ghost" size="icon">
              <Cross1Icon />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className='h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container'>
            <div className="self-start pb-5 w-auto">
              <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800">
                <p>Hi Ram Arora</p>
                <p>You can ask anything to the question</p>
              </div>
            </div>
            {/* Chat Bot Responses */}
            {[1, 1, 1, 1].map((item, i) => (
              <div key={i} className={`${i % 2 === 0 ? "self-start" : "self-end"} pb-5 w-auto`}>
                {i % 2 === 0
                  ? <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800">
                      <p>Prompt: Who are you?</p>
                    </div>
                  : <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800">
                      <p>Answer: Hi, Ram Arora</p>
                    </div>}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="h-[12%] border-t">
            <Input
              className="w-full h-full order-none outline-none"
              placeholder="Write a prompt"
              onChange={handleChange}
              value={inputValue}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>}

        {/* Chat Bot Button */}
        <div className="relative w-[10rem] cursor-pointer group">
          <Button onClick ={handleBotRealease} className="w-full h-[3rem] gap-2 items-center">
            <MessageCircle size={30} className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]" />
            <span className="text-2xl">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
