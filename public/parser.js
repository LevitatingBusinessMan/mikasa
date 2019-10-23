const parse = {
    singleline: (line) => new Promise((resolve, reject) => {
        let arguments = line.split(" ")
        const instruction = arguments.shift()

        //Parse arguments to ints
        arguments = arguments.map(x => {

            //Not a number
            if (isNaN(parseInt(x))) {
                //A variable (register)
                if (eval(x))
                    //variable represents integer
                    if (!isNaN(parseInt(eval(x))))
                        return parseInt(eval(x))
            }
            else return parseInt(x)
            
            //Not parseable as integer
            return undefined

        });

        console.log(arguments)
        
        if (arguments.includes(undefined))
            return reject("Syntax Error")

        if (instructs[instruction]) {
            if (instructs[instruction].args == arguments.length) {
                instructs[instruction].r(arguments)
                update()
            } else reject("SyntaxError")
        } else reject("Invalid instruction")
    })
}