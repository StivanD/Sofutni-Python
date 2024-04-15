function solve(input) {
    let encodedMessage = input.shift();

    let commandLine = input.shift();

    while (commandLine != 'Buy') {
        let args = commandLine.split('?');
        let operation = args[0];

        if (operation === 'TakeEven') {
            let newMessage = '';

            for (let i = 0; i < encodedMessage.length; i += 2) {
                newMessage += encodedMessage[i];
            }

            encodedMessage = newMessage;

            console.log(encodedMessage)
        }
        else if (operation === 'ChangeAll') {
            let substring = args[1];
            let replacement = args[2];

            encodedMessage = encodedMessage.replace(new RegExp(substring, 'g'), replacement);

            console.log(encodedMessage)
        }
        else if (operation === 'Reverse') {
            let substring = args[1];
            
            if (encodedMessage.includes(substring)) {
                encodedMessage = encodedMessage.replace(substring, "");
                let reversed = substring.split("").reverse().join("");
                encodedMessage = encodedMessage + reversed;
                console.log(encodedMessage);
            }
            else {
                console.log('error');
            }
        }

        commandLine = input.shift();
    }

    console.log(`The cryptocurrency is: ${encodedMessage}`);
}

// solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
//     "TakeEven",
//     "Reverse?!nzahc",
//     "ChangeAll?m?g",
//     "Reverse?adshk",
//     "ChangeAll?z?i",
//     "Buy"])
// );

// solve((["PZDfA2PkAsakhnefZ7aZ", 
// "TakeEven",
// "TakeEven",
// "TakeEven",
// "ChangeAll?Z?X",
// "ChangeAll?A?R",
// "Reverse?PRX",
// "Buy"])

// );