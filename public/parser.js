const parse = {
    singleline: (line) => new Promise((resolve, reject) => {
        let arguments = line.trim().split(" ")
        const instruct = arguments.shift()

        //Parse arguments to ints
        arguments = arguments.map(x => {

            //Not a number
            if (isNaN(parseInt(x))) {
                //A variable (register)
                if (eval("typeof " + x) != "undefined")
                    //variable represents integer
                    if (!isNaN(parseInt(eval(x))))
                        return parseInt(eval(x))
            }
            else if(!x.includes(",") && !x.includes(".")) return parseInt(x)
            
            //Not parseable as integer
            return undefined

        });
        
        if (arguments.includes(undefined))
            return reject("Syntax Error")

        //Instruction is either mentioned by name or code
        let instruction;
        if (isNaN(parseInt(instruct)))
            instruction = instructs[instruct];
        else {
            //Loop through instructions to find matching code
            for (let property in instructs) {
                let instruction_ = instructs[property];
                if (instruction_.code == instruct)
                    instruction = instruction_
            }
        }
        
        if (instruction) {
            if (instruction.args == arguments.length) {
                instruction.r(arguments)
                resolve();
            } else reject("SyntaxError")
        } else reject("Invalid instruction")
    })
}