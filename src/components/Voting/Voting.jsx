import { useState } from "react";

const Voting = () => {
    const [options, setOptions] = useState({
        macos: 0,
        windows: 0,
        linux: 0
    });

    const heandleOptionClick = targetOption => {
        console.log(targetOption);
        setOptions({ ...options, [targetOption]: options[targetOption] + 1});
        
        // if (option === 'windows') {
        //     setOptions({ ...options, windows: options.windows + 1 });
        // }

        
        // if (option === 'macos') {
        //     setOptions({ ...options, macos: options.macos + 1 });
        // }

        // if (option === 'linux') {
        //     setOptions({ ...options, linux: options.linux + 1 });
        // }
    };
// ----------------------------------
  return (
      <div>
          <ul>
          <li>Windows options: {options.windows}</li>
          <li>Macos options: {options.macos}</li>
          <li>Linux options: {options.linux}</li>    
          </ul>
          <section>
              <button onClick={()=>heandleOptionClick('windows')}>Windows</button>
              <button onClick={()=>heandleOptionClick('macos')}>Macos</button>
              <button onClick={()=>heandleOptionClick('linux')}>Linux</button>
          </section>
          
    </div>
  );
};

export default Voting;