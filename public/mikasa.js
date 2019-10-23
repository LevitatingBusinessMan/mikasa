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
        args: 1
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
        args: 0
    },

    /**
     * ADD
     * @param {address} address 
     * @param {value}   value
     * 
     * Add supplied value to value at supplied address
     * address defaults to SP-1
     * value defaults to SP
     * 
     */
    add: {
        r: function ([address, value]) {
            stack[address] += value;
        },
        args: 2
    }

}
