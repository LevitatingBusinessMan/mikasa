/* STACK */

const stack = new Array(5000).fill(0);

/* REGISTERS */
IP = ip = 1000;
BP = bp = 3000;
SP = sp = 3000;

/* INSTRUCTIONS */
const instructs = {
    
    /**
     * PUSH
     * @param {value} value 
     * 
     * Increase SP by 1
     * Sets supplied value at SP
     * 
     */
    push: {
        r: function ([value]) {
            SP++;
            stack[SP] = value;
        },
        args: 1,
        code: 10
    },
    
    /**
     * POP
     * 
     * Decrease SP by 1
     * 
     */
    pop: {
        r: function () {
            SP--;
        },
        args: 0,
        code: 11
    },

    /**
     * ADD
     * 
     * Add value at SP to value at SP-1
     * 
     * Decrease SP by 1
     * 
     */
    add: {
        r: function ([address, value]) {


            stack[SP-1] += stack[SP];
            SP--;

        },
        args: 0,
        code: 12
    },
    
    /**
     * PUSHV
     * @param {address} address
     * 
     * Increase SP by 1
     * Sets value found at supplied address at SP
     * 
     */
    pushv: {
        r: function ([address]) {
            
            SP++;
            stack[SP] = stack[address];

        },
        args: 1,
        code: 13
    },

    /**
     * ASS
     * @param {address} address
     * 
     * Copy value at SP to address
     * Decrease SP
     * 
     */
    ass: {
        r: function ([address]) {
            
            stack[address] = stack[SP]
            SP--

        },
        args: 1,
        code: 14
    },

    /**
     * TIM
     * 
     * Multiply value at SP with value at SP-1
     * 
     * Decrease SP by 1
     * 
     */
    tim: {
        r: function () {

            stack[SP-1] *= stack[SP];
            SP--;

        },
        args: 0,
        code: 15
    },

    /**
     * DIV
     * 
     * Divide value at SP with value at SP-1
     * 
     * Decrease SP by 1
     * 
     */
    div: {
        r: function () {

            //No floats
            stack[SP-1] = Math.floor(stack[SP-1] / stack[SP]);
            SP--;

        },
        args: 0,
        code: 16
    },

    /**
     * SUB
     * 
     * Subtract value at SP with value at SP-1
     * 
     * Decrease SP by 1
     * 
     */
    sub: {
        r: function () {

            stack[SP-1] -= stack[SP];
            SP--;

        },
        args: 0,
        code: 17
    }

}
