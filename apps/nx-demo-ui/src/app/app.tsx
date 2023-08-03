// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Banner,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Toggle,
} from '@nx-demo/common-ui';

export function App() {
  return (
    <div className="p-2">
      <Banner text="Hello World" />
      <div className="flex gap-2">
        <Toggle
          variant="outline"
          onPressedChange={(pressed) => {
            if (pressed) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          }}
        >
          B
        </Toggle>
        <Popover>
          <PopoverTrigger asChild>
            <Button>Open</Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto">Hello World</PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default App;
